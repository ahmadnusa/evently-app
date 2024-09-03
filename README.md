# Event Management Web Application

## Introduction

The Event Management Web Application is a comprehensive, full-stack platform built on Next.js 14, designed to manage and showcase events globally. Whether you're looking to purchase tickets for events or manage your own, this application provides a seamless experience, including secure payment processing through Stripe.

## Tech Stack

- **Node.js**
- **Next.js**
- **TypeScript**
- **TailwindCSS**
- **Stripe**
- **Zod**
- **React Hook Form**
- **Shadcn**
- **uploadthing**

## Features

### Authentication (CRUD) with Clerk
- Secure user management through Clerk, ensuring efficient authentication.

### Events (CRUD)
- **Create Events**: Generate new events with essential details like title, date, location, and more.
- **Read Events**: View detailed information about events, including descriptions, schedules, and related information.
- **Update Events**: Modify event details dynamically to keep information accurate and up-to-date.
- **Delete Events**: Easily remove events from the system, providing administrators with control over the platform.

### Related Events
- Smartly connects and displays related events on the event details page to enhance user engagement.

### Organized Events
- Efficiently organizes events, displaying those created by users in their profile.

### Search & Filter
- Robust search and filter system allowing users to find events that match their preferences.

### New Category
- Dynamically adds new event categories, keeping the platform adaptable.

### Checkout and Pay with Stripe
- Provides smooth and secure payment transactions using Stripe, enhancing the user experience during checkout.

### Event Orders
- Comprehensive order management system, offering a clear overview of all event-related transactions.

### Search Orders
- Quick and efficient search functionality for orders, facilitating easy tracking and management.


## Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:

- **Git**
- **Node.js**
- **npm** (Node Package Manager)

### Cloning the Repository

```bash
git clone https://github.com/ahmadnusa/evently-app.git
cd your-project
```

## Installation

Install the project dependencies using npm:

```bash
npm install
```

## Running the Project
Start the development server:
```bash
npm run dev
```
Open http://localhost:3000 in your browser to view the project.
