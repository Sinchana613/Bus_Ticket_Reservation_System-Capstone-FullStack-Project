# Bus Ticket Reservation System

Bus Ticket Reservation System | Spring Boot | React | MySQL

A complete **full-stack bus ticket booking platform** designed with modern technologies for seamless trip management, real-time seat availability, secure payments, and e-ticket generation.

---

## Table of Contents

* Features
* Architecture
* Tech Stack
* Screenshots
* Quick Start
* Installation
* Authentication
* API Documentation
* Testing
* Contributing
* License

---

## Features

### User Management

* JWT Authentication – Secure login/logout with role-based access
* Role-Based Authorization – Admin & Customer roles
* User Registration – Easy signup with profile creation

### Trip & Booking Management

* Trip Search – Source, destination, and date filters
* Seat Selection – Real-time seat layouts with availability
* Booking & Payments – Secure booking flow with payment integration
* E-Ticket Generation – Downloadable PDF with QR code
* Cancellations & Refunds – Policy-based refund handling

### Admin Modules

* Bus & Route Management – Define buses, routes, stops, and schedules
* Pricing & Fare Management – Dynamic fare assignment
* Reports & Dashboards – Sales, occupancy, and revenue analytics

### Additional Highlights

* Real-time seat locking to avoid double booking
* Secure 3-tier architecture with role-based access
* Scalable design for future multi-operator support

---

## Architecture

* **3-Tier Full-Stack Application**

  * Presentation Layer → React + Bootstrap
  * Business Logic → Spring Boot REST APIs
  * Data Layer → MySQL with JPA/Hibernate

---

## Tech Stack

**Frontend**

* React (Hooks + Vite)
* React Router DOM – Routing
* Bootstrap 5 – UI Framework
* Axios – API Integration

**Backend**

* Java 17
* Spring Boot 3.1 – REST APIs
* Spring Security + JWT – Authentication & Authorization
* Spring Data JPA – ORM Layer

**Database**

* MySQL 8.0

**Tools**

* Maven – Build Tool
* VS Code / IntelliJ – IDE
* Postman – API Testing
* Docker (Optional) – Containerization

---

## Quick Start

### Installation

#### Prerequisites

* Java 17 or higher
* Node.js 18+
* MySQL 8.0+
* Maven 3.9+

#### Backend Setup

```bash
# Configure MySQL
spring.datasource.url=jdbc:mysql://localhost:3306/bus_reservation
spring.datasource.username=root
spring.datasource.password=yourpassword

# Run Backend
mvn spring-boot:run
```

#### Frontend Setup

```bash
cd bus-frontend
npm install
npm run dev
```

---

## Authentication

### Default Credentials

| Role     | Username | Password | Access Level           |
| -------- | -------- | -------- | ---------------------- |
| Admin    | admin    | admin123 | Full system access     |
| Customer | user     | user123  | Limited booking access |

### JWT Flow

* User login → server validates → JWT issued
* Token stored in `localStorage`
* Token attached in headers for API calls
* Auto logout on expiry/invalid token

---

## API Documentation

### Authentication

* `POST /api/v1/auth/login`
* `POST /api/v1/auth/register`

### Trips & Bookings

* `GET /api/v1/trips/search`
* `POST /api/v1/bookings/hold`
* `POST /api/v1/payments/checkout`
* `GET /api/v1/tickets/{id}`

### Admin

* `POST /api/v1/buses`
* `POST /api/v1/routes`
* `POST /api/v1/trips`
* `GET /api/v1/reports/sales`

Full API Docs → `http://localhost:8080/swagger-ui.html`

---

## Testing

* Unit Testing with JUnit
* Integration Tests for Booking & Payments
* API Performance – Average response time < 500ms

---

## Contributing

We welcome contributions.

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push branch
5. Open Pull Request

---

## Known Issues / Roadmap

* Email/SMS Notifications (Planned)
* Mobile App Version (Upcoming)
* RazorPay/Stripe Integration (Future)
* Deployment on AWS/Docker (Planned)

---

## Acknowledgments

* Spring Boot Team
* React Team
* Bootstrap Team
* Open Source Community

---

If you found this project helpful, please give it a star!

---

**Project by Sinchana**

---
