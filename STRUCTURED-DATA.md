# Structured Data & Rich Snippets Implementation

This document details all Schema.org structured data implementations across the ASC International website for enhanced SEO and rich snippet visibility in search results.

## Overview

Structured data helps search engines understand your content better and can result in rich snippets (enhanced search results) that improve click-through rates. All implementations follow Schema.org standards and Google's structured data guidelines.

## Implemented Schemas

### 1. Organization Schema (Site-Wide)
**Location:** `/src/app/layout.tsx`
**Type:** Organization
**Purpose:** Defines ASC International's business entity

**Key Features:**
- Company name and alternate names
- Founding date (1992)
- Logo and images
- Contact points (sales and support)
- Social media profiles
- Aggregate rating
- Knowledge graph information

**Benefits:**
- Appears in Google Knowledge Panel
- Enhanced business information in search results
- Social media profile links
- Company information cards

### 2. WebSite Schema (Homepage)
**Location:** `/src/app/page.tsx`
**Type:** WebSite
**Purpose:** Defines the website and enables sitelinks search box

**Key Features:**
- Site name and description
- Search action with query input
- Publisher information

**Benefits:**
- Sitelinks search box in Google results
- Direct search capability from SERPs
- Better site structure understanding

### 3. ItemList Schema (Homepage)
**Location:** `/src/app/page.tsx`
**Type:** ItemList
**Purpose:** Lists all product offerings

**Key Features:**
- 6 product items with positions
- Product names, URLs, and descriptions
- Structured product catalog

**Benefits:**
- Better product discovery
- Potential carousel appearance in search
- Improved product page indexing

### 4. Product Schema (Product Pages)
**Location:** All `/src/app/products/*/page.tsx` files
**Type:** Product
**Purpose:** Defines individual product details

**Implemented On:**
- 3D Solder Paste Inspection
- Automated Optical Inspection
- Conformal Coating Inspection
- Digital Video Inspection
- 3D Industrial Metrology
- Jetting Valves

**Key Features:**
- Product name and description
- Brand (ASC International)
- Category classification
- Availability information
- Manufacturer details

**Benefits:**
- Rich product snippets
- Product category listings
- Enhanced product cards

### 5. Service Schema (Service & Industry Pages)
**Location:** `/src/app/services/*/page.tsx` and `/src/app/industries/*/page.tsx`
**Type:** Service
**Purpose:** Defines service offerings and industry solutions

**Implemented On:**

**Services:**
- New Equipment Sales
- Pre-Owned Systems
- Contract Inspection
- Technical Support

**Industries:**
- Electronics Manufacturing
- Automotive Electronics
- Medical Devices
- Aerospace & Defense

**Key Features:**
- Service type and description
- Provider information
- Area served (Worldwide)
- Service-specific details

**Benefits:**
- Service-rich snippets
- Local service visibility
- Industry expertise demonstration

### 6. ContactPage Schema
**Location:** `/src/app/contact/page.tsx`
**Type:** ContactPage
**Purpose:** Marks the contact page for easy discovery

**Benefits:**
- Direct contact link in search results
- Improved local SEO
- Enhanced business information

### 7. FAQPage Schema
**Location:** `/src/app/faq/page.tsx`
**Type:** FAQPage
**Purpose:** Enables FAQ rich snippets

**Key Features:**
- 12 question-answer pairs
- Categorized by topic:
  - General Information
  - Products & Services
  - Technical Questions
  - Getting Started
- Detailed, comprehensive answers

**Benefits:**
- **FAQ rich snippets** in search results
- Expandable Q&A directly in Google
- Higher visibility and click-through rates
- Voice search optimization
- Featured snippet opportunities

## Rich Snippet Opportunities

### Currently Enabled

1. **Organization Knowledge Panel**
   - Company logo, description, founding date
   - Contact information
   - Social media links
   - Aggregate rating

2. **Sitelinks Search Box**
   - Direct search capability in Google results
   - Improved user experience

3. **Product Rich Snippets**
   - Product name, image, description
   - Brand and category
   - Availability status

4. **FAQ Rich Snippets**
   - Expandable Q&A in search results
   - Questions visible directly in SERPs
   - High visibility for informational queries

5. **Service Listings**
   - Service type and descriptions
   - Provider information
   - Geographic availability

### Future Enhancements

1. **BreadcrumbList Schema**
   - Add to all pages with breadcrumb navigation
   - Improves navigation understanding
   - Breadcrumb trails in search results

2. **Review/Rating Schema**
   - Add customer testimonials with ratings
   - Star ratings in search results
   - Trust signals

3. **VideoObject Schema**
   - If product demo videos are added
   - Video rich snippets
   - Video carousel eligibility

4. **HowTo Schema**
   - For technical guides and tutorials
   - Step-by-step rich snippets
   - Enhanced instructional content

5. **LocalBusiness Schema**
   - Add office locations with addresses
   - Google Maps integration
   - Local search visibility

6. **Offer Schema**
   - For special promotions
   - Price and availability information
   - E-commerce features

## Testing Structured Data

### Tools

1. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Tests if page is eligible for rich results
   - Preview how results will appear

2. **Schema Markup Validator**
   - URL: https://validator.schema.org/
   - Validates Schema.org syntax
   - Identifies errors and warnings

3. **Google Search Console**
   - Monitor rich results performance
   - View enhancement reports
   - Track impressions and clicks

### Validation Steps

1. Visit each page on the live site
2. Run through Rich Results Test
3. Check for errors or warnings
4. Validate proper rendering
5. Submit to Google Search Console

## Best Practices

1. **Keep Data Accurate**
   - Ensure all information matches page content
   - Update schemas when content changes
   - Don't add misleading structured data

2. **Use Specific Types**
   - Choose most specific schema type available
   - Use appropriate properties
   - Follow Google's guidelines

3. **Avoid Duplication**
   - Don't mark up same content multiple times
   - One primary schema per page element
   - Use `@id` for cross-referencing

4. **Monitor Performance**
   - Track rich result impressions
   - Monitor click-through rates
   - Fix errors promptly

5. **Stay Updated**
   - Google updates guidelines regularly
   - New schema types become available
   - Rich result features evolve

## AI Search Optimization

The structured data implementation specifically helps with AI search engines:

1. **Clear Entity Definition**
   - Organization schema helps AI understand business entity
   - Product and service schemas define offerings
   - Industry schemas show expertise areas

2. **Q&A Format**
   - FAQ schema provides direct answers
   - Questions match natural language queries
   - Comprehensive answers for AI training

3. **Relationship Mapping**
   - Links between products, services, and industries
   - Clear business structure
   - Entity relationships defined

4. **Knowledge Graph Integration**
   - Schema.org markup feeds knowledge graphs
   - Better AI understanding of context
   - Improved entity recognition

## Maintenance

### Regular Tasks

1. **Quarterly Reviews**
   - Validate all structured data still works
   - Check for new rich result opportunities
   - Update ratings and review counts

2. **Content Updates**
   - Update schemas when adding new products/services
   - Maintain accuracy with content changes
   - Add new schema types as appropriate

3. **Performance Monitoring**
   - Track rich result impressions in Search Console
   - Monitor CTR improvements
   - Identify underperforming pages

4. **Error Resolution**
   - Fix any validation errors promptly
   - Address Search Console warnings
   - Test after major site updates

## Next Steps

1. Add BreadcrumbList schema to all pages with breadcrumbs
2. Implement customer testimonials with Review schema
3. Add VideoObject schema when product videos are created
4. Create HowTo guides with HowTo schema
5. Add LocalBusiness schema if physical office addresses are added
6. Consider Event schema for webinars or trade shows
7. Implement Offer schema for promotions

## Resources

- [Schema.org Documentation](https://schema.org/)
- [Google Search Central - Structured Data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)
