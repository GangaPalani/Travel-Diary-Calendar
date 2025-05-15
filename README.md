# Travel Recommendation System (ML-Based)

A machine learning–powered travel recommendation system that suggests suitable travel destinations based on the user's travel history, seasonal preferences, and activity interests. Built using Python, PyTorch, Flask, and MongoDB Atlas.

---

##  Features

- 📅 Travel suggestions based on month and season
- 🌡️ Weather and temperature-based filtering
- 💬 Considers user preferences like activity and group size
- 🧠 Continual learning to improve recommendations over time
- 🌐 REST API integration using Flask
- ☁️ Cloud database via MongoDB Atlas

---

## Tech Stack

- **Python** for model development
- **PyTorch** for building and training the ML model
- **Flask** for serving predictions via API
- **MongoDB Atlas** for storing user data and preferences
- **Postman** (optional) for API testing

---

# ML Model Overview

- Uses categorical encoding for user input features (e.g., month, season, group size,Activity preferences)
- Trained on a custom dataset with fields:
  - `Month`, `Season`, `Budget`, `Activity_Preference`, `Group_Size`, `Suggested_Place`
- Implements **continual learning**: the model updates with each new user input without full retraining.

---

# How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/GangaPalani/Travel-Diary-Calendar.git
   cd Travel-Diary-Calendar


# Example Request Json
{
  "Month": "December",
  "Season": "Winter",
  "Budget": "Medium",
  "Activity_Preference": "Adventure",
  "Group_Size": "Small"
}
