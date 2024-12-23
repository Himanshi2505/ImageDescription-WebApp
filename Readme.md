# Image Description Web Application

This is a web application that generates descriptive captions for uploaded images using a machine learning model. It uses the **BLIP (Bootstrapped Language-Image Pretraining)** model for generating captions.

---

## Features
- Upload an image and get a descriptive caption.
- Simple and intuitive UI built using EJS templates.
- Python integration for ML model execution with Node.js backend.
- Supports various image formats (e.g., `.jpg`, `.png`, `.jpeg`).

---

## Tech Stack
- **Frontend**: HTML, CSS, EJS
- **Backend**: Node.js, Express.js
- **Machine Learning Model**: Salesforce BLIP model (`transformers` library)
- **File Upload Handling**: Multer
- **Deployment**: Render (or other platforms)

---

## Prerequisites
Make sure the following are installed on your system:
- **Node.js** (v16+ recommended)
- **Python** (v3.7+)
- **Git** (to clone the repository)
- Python libraries:
  - `transformers`
  - `torch`
  - `Pillow`

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Himanshi2505/ImageDescription-WebApp.git

### 2. Install Node.js Dependencies

```bash 
cd backend
npm install
```
### 3. Install Python Dependencies

```bash 
pip install transformers torch Pillow
```
### 4. Run the Application

Start the server locally:

``` node app.js ```

Open your browser and go to http://localhost:6969.
