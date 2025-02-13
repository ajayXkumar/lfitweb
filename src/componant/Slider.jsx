import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DecryptedText from "./Dtext";
const carouselData = [
  {
    image: "/images/workout.jpg",
    title: "Workout Log – Track Every Rep, Set & Progress",
    description:
      "Stay on top of your training with our detailed workout log, designed to help you track every set, rep, weight, and rest time in one place. " +
      "Key Features: " +
      "Smart Timer – Automatically tracks rest periods between sets for optimal recovery. " +
      "Reps & Sets Logging – Easily record the number of reps and sets for each exercise. " +
      "Weight Tracking – Monitor your strength progress over time. " +
      "Workout History – View past workouts and analyze performance trends. " +
      "Muscle Engagement Insights – See which muscles were worked after each session. " +
      "With our intuitive Workout Log, you’ll never miss a detail in your fitness journey. Train smarter, lift heavier, and achieve your goals faster!",
  },
  {
    image: "/images/anal.jpg",
    title: "Deep Dive into Your Fitness Progress",
    description: `Our Analysis Screen gives you a complete breakdown of your fitness journey with interactive charts and insights. Track your performance over time and make data-driven decisions to optimize your training.Muscle Radar Chart – Get a 360° view of your muscle engagement. Identify strong areas and muscles that need more focus.Weekly, Monthly & Yearly Progress – Visualize your growth with detailed graphs showing strength gains, endurance improvements, and consistency over time.With clear insights and real-time tracking, our Analysis Screen helps you stay on track, fine-tune your workouts, and reach peak performance. 
  `,
  },
  {
    image: "/images/exdetails.jpg",
    title: "Exercise Details – Master Your Workouts",
    description: `The Exercise Details Screen provides a comprehensive breakdown of each workout, helping you train smarter and track your progress effectively. A 2D Muscle Diagram highlights the targeted muscle groups, ensuring you focus on the right areas. You'll also find equipment recommendations, showing whether the exercise requires dumbbells, barbells, machines, or resistance bands. Each exercise is categorized by difficulty level (Beginner, Intermediate, Advanced), allowing you to choose workouts that match your experience. Additionally, the screen tracks your peak performance, displaying your best set with the highest reps and weight lifted. With clear visuals and performance insights, this feature helps you optimize your training and reach your fitness goals faster.`,
  },
  {
    image: "/images/memories.jpg",
    title: "Gym Memories – Capture & Track Your Fitness Journey",
    description: `The Gym Memories feature lets you capture and track your fitness journey by uploading up to five pictures daily from your workouts. Whether it's your lifting progress, gym setup, or transformation journey, this feature helps you create a visual record of your hard work. You can view past uploads, download your images, and reflect on how far you've come. With a daily limit of five pictures, it encourages consistency and keeps you motivated. Gym Memories is your personal fitness gallery, allowing you to look back, stay inspired, and celebrate every milestone along the way. 
    `,
  },
  {
    image: "/images/meas.jpg",
    title: "Body Measurements – Track Your Progress in Detail",
    description: `The Body Measurements feature provides a detailed way to track your fitness progress by logging key metrics such as weight, BMI, and measurements of all major body parts, including your chest, arms, waist, thighs, and calves. With real-time BMI calculations based on height and weight, you can monitor changes in your body composition and ensure you're on the right path. The weight tracking feature helps you record fluctuations, while the progress history allows you to compare past measurements and visualize your transformation over time. With comprehensive tracking and clear insights, this feature keeps you motivated and helps you fine-tune your workouts for optimal results`,
  },

  {
    image: "/images/create.jpg",
    title: "Custom Workout Templates – Build Your Perfect Routine",
    description: `The Workout Template feature allows you to create and customize your own workout routines based on your fitness goals. Whether you're focusing on strength training, endurance, hypertrophy, or fat loss, you can design a personalized plan that fits your needs. Add exercises, set reps, sets, weights, and rest intervals, and structure your workouts exactly how you like. With the ability to save and reuse your templates, you no longer need to plan from scratch each time. This feature helps you stay consistent, track progress, and optimize your workouts for maximum results`,
  },
  {
    image: "/images/deitd.jpg",
    title: "Diet Planner – Fuel Your Fitness Journey",
    description: `The Diet Screen helps you track and manage your nutrition to complement your workouts and achieve your fitness goals. Easily log your daily meals, calories, macronutrients (protein, carbs, fats), and water intake to ensure balanced nutrition. Customize your diet plan based on bulking, cutting, or maintaining weight, and get insights into your weekly and monthly progress. With a structured approach to nutrition, this feature helps you stay on track, optimize performance, and reach your fitness goals faster.`,
  },
];
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ width: "60%", margin: "auto", marginTop: 200 }}>
      <Slider {...settings}>
        {carouselData.map((item, index) => (
          <div key={index}>
            {/* Left: Image */}

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                padding: 30,
              }}
            >
              <div style={{ width: 500, height: 600 }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    height: "500px",
                    objectFit: "cover",
                    borderRadius: "20px",
                    borderColor: "gray",
                    borderStyle: "solid",
                  }}
                />
              </div>

              <div style={{ width: 900, height: 500, alignContent: "center" }}>
                <div style={{ width: "80%", paddingLeft: "80px" }}>
                  <h2 style={{ marginBottom: "10px" }}>
                    <DecryptedText
                      text={item.title}
                      animateOn="view"
                      revealDirection="left"
                    />
                  </h2>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.5",
                      color: "white",
                      textAlign: "justify",
                    }}
                  >
                    <DecryptedText
                      text={item.description}
                      animateOn="view"
                      revealDirection="center"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
