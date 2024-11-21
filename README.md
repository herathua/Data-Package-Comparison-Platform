
# Data Package Comparison Platform  

A responsive web application to compare prepaid, postpaid, and broadband data packages from various providers. Includes an admin console for managing package data and supports both mobile and desktop views.

## Features  
- Compare data packages side-by-side.  
- Filter packages by provider, type, and price.  
- Admin console for adding, editing, and deleting packages.  
- Modern, responsive design with enhanced SEO using server-side rendering.  

## Technologies Used  
### Frontend:  
- **Next.js**  
- **Tailwind CSS**  

### Backend:  
- **Node.js**  
- **Express.js**  
- **MongoDB**  

---

## Getting Started  

### Prerequisites  
Ensure you have the following installed:  
- Node.js (v16 or higher)  
- MongoDB (running locally or hosted)  

### Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/your-username/data-package-comparison-platform.git  
   cd data-package-comparison-platform  
Install dependencies for both frontend and backend:

    npm install  

Set up environment variables:
Create a .env file in the root directory and add the following (update with your actual values):

    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database_name>?retryWrites=true&w=majority  
    JWT_SECRET=your_jwt_secret  
    PORT=5000  

Start the development server:

    npm run dev  

Open your browser and navigate to:

Frontend: http://localhost:3000
Backend: http://localhost:5000

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.

Contact
For any questions or issues, reach out at uvherath@gmail.com.


Let me know if you need additional customizations!
