# MC-DOS – Full System Tasklist: Project Grub

## 1.0 Project Initialization & Infrastructure
1.1 Set up monorepo structure or separate repository for NestJS backend
1.2 Initialize NestJS backend with TypeScript and core modules
1.3 Provision PostgreSQL database (Neon/RDS)
1.4 Provision Redis instance for menu caching
1.5 Configure S3/Cloudflare R2 for dish image storage
1.6 Standardize environment variables and secret management

## 2.0 Data Modeling & Database Setup
2.1 Implement Restaurant schema (id, name, location, tier)
2.2 Implement Category schema with relational keys and ordering
2.3 Implement Dish schema (price, description, availability, 3D flags)
2.4 Implement Review schema linked to dishes and devices
2.5 Implement Banner schema for dynamic promotions
2.6 Execute initial migrations and seed baseline data

## 3.0 Core Backend Services (NestJS)
3.1 Implement Menu Service (High-perf GET /restaurants/{id}/menu)
3.2 Implement Category Management Service (CRUD)
3.3 Implement Dish Management Service (CRUD + Availability Toggles)
3.4 Implement Promotion/Banner Service
3.5 Implement Review Service (Submission + Aggregation)
3.6 Implement basic Analytics ingestion service

## 4.0 Authentication & Authorization
4.1 Implement JWT-based Auth system for owners/admins
4.2 Configure Role-Based Access Control (RBAC) levels
4.3 Develop Backend Login/Signup logic with validation
4.4 Implement device-based identification for customer reviews
4.5 Secure all dashboard API endpoints with middleware

## 5.0 Restaurant Dashboard Integration
5.1 Transition Dashboard UI from mock data to backend APIs
5.2 Implement Dish CRUD forms with S3 image upload integration
5.3 Develop real-time availability toggle functionality
5.4 Build Category Management tool with drag-and-drop ordering
5.5 Implement Restaurant Profile & Tier configuration page
5.6 Integrate Banner Management dashboard

## 6.0 Customer Menu Experience (QR-Driven)
6.1 Connect /menu landing page to live Menu API
6.2 Integrate Redis caching for sub-200ms menu responses
6.3 Deploy QR code generation logic per restaurant ID
6.4 Build dynamic category-based dish filtering
6.5 Implement real-time "Out of Stock" state handling
6.6 Add optional 3D renderer for premium-tier dishes

## 7.0 Review & Engagement System
7.1 Build customer-facing review submission interface
7.2 Implement Owner moderation dashboard for reviews
7.3 Display aggregate ratings and latest reviews on Dish Detail
7.4 Develop "Trending Dishes" logic based on scan frequency

## 8.0 Marketing & Tier Management
8.1 Connect PromoBanner component to backend Banner API
8.2 Implement banner scheduling (Start/End time logic)
8.3 Build platform-wide Tier Management (Free vs. Premium gating)
8.4 Implement "Upgrade to Premium" prompts for locked features

## 9.0 Platform Administration & Moderation
9.1 Develop Platform Admin Dashboard for restaurant verification
9.2 Build system-wide analytics overview (total scans, active users)
9.3 Implement global moderation tools for content and reviews
9.4 Build Automated Onboarding flow for new restaurant signups

## 10.0 Scaling, Reliability & Launch
10.1 Optimize database queries and implement read-replicas (if needed)
10.2 Configure CDN edge caching for all static assets and images
10.3 Implement centralized health checks and uptime monitoring
10.4 Finalize CI/CD pipeline for multi-environment deployments
10.5 Perform "Load Test" simulation for peak traffic periods
