# Experiments with LLM - Large Language Model
## Simulation of Stock Price Prediction
This code was created when following the training
"[Intro to AI Engineering](https://scrimba.com/learn/introtoaiengineering#)" by
Tom Chant.

This code "predicts" future stock prices using OpenAI LLM models. The code uses the Polygon API to get historical stock prices and then uses the OpenAI API to predict future stock prices.

Obviously, this is a toy example and should not be used for any real-world trading.

## Creating the Code
I used Vite to kickstart a vanilla JavaScript project. I then added the code to fetch historical stock prices from the Polygon API and the OpenAI API to predict future stock prices.
Since this is an experimental code I decided not to use any frameworks or libraries.
Also, there is no extensive error handling or testing.

## Running the Code
- Install the requirements using `npm install`
- Add the following environment variables to your `.env.local` file
    - `VITE_POLYGON_API_KEY="..." - Your Polygon API Key`
    - `VITE_OPENAI_API_KEY="..." - Your OpenAI API Key`
- Run the code using `npm run dev`
- Point your browser to `http://localhost:5173`

## AI Safety
### Types of risks
The video below explains the types of risks associated with AI.

<a href="https://www.youtube.com/watch?v=pYXy-A4siMw">
    <img  src="docs/risks.png">
</a>
