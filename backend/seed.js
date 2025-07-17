require("dotenv").config();
const mongoose = require("mongoose");
const Post = require("./models/Post");

const seedPosts = [
  {
    title: "Getting Started with MongoDB",
    body: "This post explains how to get started with MongoDB and Mongoose in Node.js.",
    likes: 5,
    comments: [
      { user: "Alice", text: "Thanks! This was super helpful." },
      { user: "Bob", text: "Can you explain how indexes work?" }
    ]
  },
  {
    title: "Async/Await in JavaScript",
    body: "Let's dive deep into how async/await works and what problems it solves in JavaScript.",
    likes: 12,
    comments: [
      { user: "Charlie", text: "Perfect timing. I was just stuck with nested callbacks." }
    ]
  },
  {
    title: "Deploying Node Apps to Render",
    body: "A practical guide to deploying your full-stack app using Render's free tier.",
    likes: 7,
    comments: []
  },
  {
    title: "REST vs GraphQL: Which One to Choose?",
    body: "This post compares REST APIs and GraphQL to help you decide which fits your project.",
    likes: 20,
    comments: [
      { user: "DevGirl", text: "GraphQL all the way. No more over-fetching!" }
    ]
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    await Post.deleteMany({});
    console.log("🧹 Old posts cleared");

    const result = await Post.insertMany(seedPosts);
    console.log(`🌱 Seeded ${result.length} posts`);

    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding error:", err.message);
    process.exit(1);
  }
}

seedDatabase();
