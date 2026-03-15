"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`;
}

function formatMonths(value: number): string {
  if (value <= 0) return "Immediate";
  if (value > 120) return "120+ months";
  return `${value.toFixed(1)} months`;
}

export default function ROICalculator() {
  // Input state
  const [productionVolume, setProductionVolume] = useState(500000);
  const [averageBoardValue, setAverageBoardValue] = useState(75);
  const [currentDefectRate, setCurrentDefectRate] = useState(2.5);
  const [currentReworkRate, setCurrentReworkRate] = useState(4.0);
  const [numberOfLines, setNumberOfLines] = useState(2);

  // Constants for calculations
  const SYSTEM_COST_PER_LINE = 200000; // Average system cost per line (SPI + AOI)
  const INSTALLATION_PER_LINE = 15000;
  const TRAINING_COST = 10000;
  const ANNUAL_SERVICE_PER_LINE = 18000;
  const EXPECTED_DEFECT_REDUCTION = 0.65; // 65% defect reduction
  const EXPECTED_REWORK_REDUCTION = 0.75; // 75% rework reduction
  const AVERAGE_REWORK_COST_PER_BOARD = 28; // labor + materials per rework
  const SCRAP_RATE_AS_PERCENT_OF_DEFECT = 0.4; // 40% of defects become scrap

  const calculations = useMemo(() => {
    // Total investment
    const equipmentCost = numberOfLines * SYSTEM_COST_PER_LINE;
    const installationCost = numberOfLines * INSTALLATION_PER_LINE;
    const totalInvestment = equipmentCost + installationCost + TRAINING_COST;
    const annualServiceCost = numberOfLines * ANNUAL_SERVICE_PER_LINE;

    // Current costs
    const currentDefectsPerYear = productionVolume * (currentDefectRate / 100);
    const currentScrapPerYear = currentDefectsPerYear * SCRAP_RATE_AS_PERCENT_OF_DEFECT;
    const currentScrapCost = currentScrapPerYear * averageBoardValue;

    const currentReworkPerYear = productionVolume * (currentReworkRate / 100);
    const currentReworkCost = currentReworkPerYear * AVERAGE_REWORK_COST_PER_BOARD;

    // Projected savings
    const annualScrapSavings = currentScrapCost * EXPECTED_DEFECT_REDUCTION;
    const annualReworkSavings = currentReworkCost * EXPECTED_REWORK_REDUCTION;
    const totalAnnualSavings = annualScrapSavings + annualReworkSavings;

    // Net savings (minus service costs)
    const netAnnualSavings = totalAnnualSavings - annualServiceCost;

    // Payback period
    const paybackMonths = netAnnualSavings > 0 ? (totalInvestment / netAnnualSavings) * 12 : Infinity;

    // 5-year ROI
    const totalBenefits5Year = netAnnualSavings * 5;
    const roi5Year = totalInvestment > 0 ? ((totalBenefits5Year - totalInvestment) / totalInvestment) * 100 : 0;

    // Projected metrics after improvement
    const projectedDefectRate = currentDefectRate * (1 - EXPECTED_DEFECT_REDUCTION);
    const projectedReworkRate = currentReworkRate * (1 - EXPECTED_REWORK_REDUCTION);

    return {
      totalInvestment,
      equipmentCost,
      installationCost,
      annualServiceCost,
      currentScrapCost,
      currentReworkCost,
      annualScrapSavings,
      annualReworkSavings,
      totalAnnualSavings,
      netAnnualSavings,
      paybackMonths,
      roi5Year,
      projectedDefectRate,
      projectedReworkRate,
      totalBenefits5Year,
    };
  }, [productionVolume, averageBoardValue, currentDefectRate, currentReworkRate, numberOfLines]);

  return (
    <>
      <Header />
      <main className="bg-dark-bg">
        {/* Breadcrumb */}
        <nav className="bg-dark-bg border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-accent-cyan transition-colors">Home</Link>
              </li>
              <li className="text-gray-600">/</li>
              <li>
                <Link href="/tools/roi-calculator" className="text-gray-400 hover:text-accent-cyan transition-colors">Tools</Link>
              </li>
              <li className="text-gray-600">/</li>
              <li className="text-white">ROI Calculator</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative overflow-hidden py-16">
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
              }}
            />
          </div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[120px]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full mb-6">
                <span className="text-sm font-semibold text-accent-cyan">INTERACTIVE TOOL</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
                Inspection ROI Calculator
              </h1>
              <p className="text-xl text-gray-300">
                Estimate the return on investment for automated inspection systems based on your production parameters. Adjust the inputs below to see projected savings, payback period, and 5-year ROI.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Inputs */}
                <div>
                  <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Your Production Parameters</h2>
                  <div className="space-y-8">
                    {/* Production Volume */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-semibold text-gray-700">
                          Annual Production Volume
                        </label>
                        <span className="text-sm font-bold text-blue-600">
                          {productionVolume.toLocaleString()} boards/year
                        </span>
                      </div>
                      <input
                        type="range"
                        min="10000"
                        max="5000000"
                        step="10000"
                        value={productionVolume}
                        onChange={(e) => setProductionVolume(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>10K</span>
                        <span>5M</span>
                      </div>
                      <input
                        type="number"
                        min="10000"
                        max="5000000"
                        step="1000"
                        value={productionVolume}
                        onChange={(e) => setProductionVolume(Math.max(10000, Math.min(5000000, Number(e.target.value))))}
                        className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    {/* Average Board Value */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-semibold text-gray-700">
                          Average Board Value
                        </label>
                        <span className="text-sm font-bold text-blue-600">
                          {formatCurrency(averageBoardValue)}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="500"
                        step="5"
                        value={averageBoardValue}
                        onChange={(e) => setAverageBoardValue(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>$5</span>
                        <span>$500</span>
                      </div>
                      <input
                        type="number"
                        min="5"
                        max="500"
                        step="1"
                        value={averageBoardValue}
                        onChange={(e) => setAverageBoardValue(Math.max(5, Math.min(500, Number(e.target.value))))}
                        className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    {/* Current Defect Rate */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-semibold text-gray-700">
                          Current Defect Rate
                        </label>
                        <span className="text-sm font-bold text-blue-600">
                          {formatPercent(currentDefectRate)}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0.1"
                        max="10"
                        step="0.1"
                        value={currentDefectRate}
                        onChange={(e) => setCurrentDefectRate(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>0.1%</span>
                        <span>10%</span>
                      </div>
                      <input
                        type="number"
                        min="0.1"
                        max="10"
                        step="0.1"
                        value={currentDefectRate}
                        onChange={(e) => setCurrentDefectRate(Math.max(0.1, Math.min(10, Number(e.target.value))))}
                        className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    {/* Current Rework Rate */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-semibold text-gray-700">
                          Current Rework Rate
                        </label>
                        <span className="text-sm font-bold text-blue-600">
                          {formatPercent(currentReworkRate)}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0.1"
                        max="15"
                        step="0.1"
                        value={currentReworkRate}
                        onChange={(e) => setCurrentReworkRate(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>0.1%</span>
                        <span>15%</span>
                      </div>
                      <input
                        type="number"
                        min="0.1"
                        max="15"
                        step="0.1"
                        value={currentReworkRate}
                        onChange={(e) => setCurrentReworkRate(Math.max(0.1, Math.min(15, Number(e.target.value))))}
                        className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    {/* Number of Lines */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-semibold text-gray-700">
                          Number of SMT Lines
                        </label>
                        <span className="text-sm font-bold text-blue-600">
                          {numberOfLines} {numberOfLines === 1 ? "line" : "lines"}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="12"
                        step="1"
                        value={numberOfLines}
                        onChange={(e) => setNumberOfLines(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>1</span>
                        <span>12</span>
                      </div>
                      <input
                        type="number"
                        min="1"
                        max="12"
                        step="1"
                        value={numberOfLines}
                        onChange={(e) => setNumberOfLines(Math.max(1, Math.min(12, Number(e.target.value))))}
                        className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> This calculator provides estimates based on industry-average improvement rates (65% defect reduction, 75% rework reduction). Actual results vary based on your specific products, processes, and current quality levels. Contact us for a detailed analysis tailored to your operation.
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Projected Results</h2>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className={`p-6 rounded-lg text-center ${calculations.paybackMonths <= 12 ? 'bg-green-50 border border-green-200' : calculations.paybackMonths <= 24 ? 'bg-blue-50 border border-blue-200' : 'bg-yellow-50 border border-yellow-200'}`}>
                      <p className={`text-3xl font-bold ${calculations.paybackMonths <= 12 ? 'text-green-700' : calculations.paybackMonths <= 24 ? 'text-blue-700' : 'text-yellow-700'}`}>
                        {formatMonths(calculations.paybackMonths)}
                      </p>
                      <p className="text-sm text-gray-600 mt-1 font-semibold">Estimated Payback</p>
                    </div>
                    <div className={`p-6 rounded-lg text-center ${calculations.roi5Year >= 200 ? 'bg-green-50 border border-green-200' : calculations.roi5Year >= 100 ? 'bg-blue-50 border border-blue-200' : 'bg-yellow-50 border border-yellow-200'}`}>
                      <p className={`text-3xl font-bold ${calculations.roi5Year >= 200 ? 'text-green-700' : calculations.roi5Year >= 100 ? 'text-blue-700' : 'text-yellow-700'}`}>
                        {calculations.roi5Year > 0 ? `${calculations.roi5Year.toFixed(0)}%` : "N/A"}
                      </p>
                      <p className="text-sm text-gray-600 mt-1 font-semibold">5-Year ROI</p>
                    </div>
                  </div>

                  {/* Investment Summary */}
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                    <h3 className="font-bold text-gray-900 mb-4">Investment Summary</h3>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 text-gray-600">Equipment ({numberOfLines} {numberOfLines === 1 ? "line" : "lines"})</td>
                          <td className="py-2 text-right font-semibold text-gray-900">{formatCurrency(calculations.equipmentCost)}</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 text-gray-600">Installation & integration</td>
                          <td className="py-2 text-right font-semibold text-gray-900">{formatCurrency(calculations.installationCost)}</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2 text-gray-600">Training</td>
                          <td className="py-2 text-right font-semibold text-gray-900">{formatCurrency(TRAINING_COST)}</td>
                        </tr>
                        <tr className="border-t-2 border-gray-900">
                          <td className="py-2 font-bold text-gray-900">Total Investment</td>
                          <td className="py-2 text-right font-bold text-gray-900 text-lg">{formatCurrency(calculations.totalInvestment)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Annual Savings */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                    <h3 className="font-bold text-gray-900 mb-4">Estimated Annual Savings</h3>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-green-200">
                          <td className="py-2 text-gray-600">Scrap cost savings</td>
                          <td className="py-2 text-right font-semibold text-green-700">{formatCurrency(calculations.annualScrapSavings)}</td>
                        </tr>
                        <tr className="border-b border-green-200">
                          <td className="py-2 text-gray-600">Rework cost savings</td>
                          <td className="py-2 text-right font-semibold text-green-700">{formatCurrency(calculations.annualReworkSavings)}</td>
                        </tr>
                        <tr className="border-b border-green-200">
                          <td className="py-2 text-gray-600 font-semibold">Total gross savings</td>
                          <td className="py-2 text-right font-bold text-green-700">{formatCurrency(calculations.totalAnnualSavings)}</td>
                        </tr>
                        <tr className="border-b border-green-200">
                          <td className="py-2 text-gray-500">Less: annual service costs</td>
                          <td className="py-2 text-right font-semibold text-red-600">-{formatCurrency(calculations.annualServiceCost)}</td>
                        </tr>
                        <tr className="border-t-2 border-green-800">
                          <td className="py-2 font-bold text-gray-900">Net Annual Savings</td>
                          <td className="py-2 text-right font-bold text-green-700 text-lg">{formatCurrency(calculations.netAnnualSavings)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Quality Improvement */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <h3 className="font-bold text-gray-900 mb-4">Projected Quality Improvement</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold">Defect Rate</p>
                        <p className="text-gray-600 text-sm">
                          <span className="line-through">{formatPercent(currentDefectRate)}</span>
                          {" "}
                          <span className="font-bold text-blue-700">{formatPercent(calculations.projectedDefectRate)}</span>
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-semibold">Rework Rate</p>
                        <p className="text-gray-600 text-sm">
                          <span className="line-through">{formatPercent(currentReworkRate)}</span>
                          {" "}
                          <span className="font-bold text-blue-700">{formatPercent(calculations.projectedReworkRate)}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 5-Year Summary */}
                  <div className="bg-gray-900 text-white rounded-lg p-6">
                    <h3 className="font-bold mb-4">5-Year Financial Summary</h3>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-gray-300">Total 5-year net savings</td>
                          <td className="py-2 text-right font-semibold text-green-400">{formatCurrency(calculations.totalBenefits5Year)}</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-gray-300">Total investment</td>
                          <td className="py-2 text-right font-semibold text-gray-300">{formatCurrency(calculations.totalInvestment)}</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2 text-gray-300">Net 5-year benefit</td>
                          <td className="py-2 text-right font-semibold text-green-400">{formatCurrency(calculations.totalBenefits5Year - calculations.totalInvestment)}</td>
                        </tr>
                        <tr className="border-t-2 border-white">
                          <td className="py-2 font-bold text-white text-base">5-Year ROI</td>
                          <td className="py-2 text-right font-bold text-green-400 text-2xl">{calculations.roi5Year > 0 ? `${calculations.roi5Year.toFixed(0)}%` : "N/A"}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Assumptions */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Calculation Assumptions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">System Costs</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Average $200K per line (SPI + AOI)</li>
                    <li>$15K installation per line</li>
                    <li>$10K training (one-time)</li>
                    <li>$18K annual service per line</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Quality Improvements</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>65% defect rate reduction (industry average)</li>
                    <li>75% rework rate reduction</li>
                    <li>40% of defects result in scrap</li>
                    <li>$28 average rework cost per board</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Not Included (Conservative)</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Warranty cost savings</li>
                    <li>Manual inspection labor savings</li>
                    <li>Increased throughput value</li>
                    <li>Customer retention value</li>
                  </ul>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Your Results May Vary</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>Actual costs depend on specific system configuration</li>
                    <li>Improvement rates vary by process maturity</li>
                    <li>High-value boards see faster payback</li>
                    <li>Contact us for a detailed, customized analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-dark-secondary to-dark-card relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 217, 255, 0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 217, 255, 0.2) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
                Want a Detailed Analysis Tailored to Your Operation?
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Our applications team can build a comprehensive ROI model using your actual production data, including factors this calculator does not cover such as labor savings, warranty reductions, and capacity improvements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-blue text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/50 transition-all">
                  Request Custom ROI Analysis
                </Link>
                <Link href="/case-studies" className="px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-accent-cyan/50 transition-all">
                  See Real Results
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
