import Task from "../models/MeditationTask";

export const MEDITATION = [
    // Morning
    new Task(
      1,
      "Morning",
      "Morning Meditation",
      "https://img.artpal.com/649182/1-26-16t.jpg",
      "Embark on your quest for the day with this morning meditation, as you gather your strength and focus to face the challenges ahead.",
      require("../assets/sounds/Morning Meditation.mp3")
    ),
    new Task(
      2,
      "Morning",
      "Sunrise Meditation",
      "https://art.pixilart.com/1f9b037cb7caa4d.gif",
      "Harness the power of the rising sun as you level up your energy and prepare for the adventures awaiting you in the new day.",
      require("../assets/sounds/Sunrise Meditation.mp3")
    ),
    new Task(
      3,
      "Morning",
      "Gratitude Meditation",
      "https://cdn.openart.ai/stable_diffusion/9817250bf904afdbb92e1d4fc6874f1afbea9bec_2000x2000.webp",
      "Equip yourself with the gratitude potion and fortify your spirit with appreciation, ready to conquer the day's quests and challenges.",
      require("../assets/sounds/Gratitude Meditation.mp3")
    ),
    
    // Focus
    new Task(
      4,
      "Focus",
      "Focus and Productivity",
      "https://img.freepik.com/premium-photo/anime-girl-listening-lofi-beats-accompanied-by-her-pixel-art-style-cat_713888-14801.jpg",
      "Sharpen your mental blade and increase your productivity stats with this guided meditation, as you level up your focus skills to conquer any task.",
      require("../assets/sounds/Focus and Productivity.mp3")
    ),
    new Task(
      5,
      "Focus",
      "Concentration Meditation",
      "https://pbs.twimg.com/media/DTSbmKvWsAAqwFB.jpg",
      "Channel your inner hero and master the art of concentration, equipping yourself with the mental shield to block out distractions and achieve victory.",
      require("../assets/sounds/Concentration Meditation.mp3")
    ),
    new Task(
      6,
      "Focus",
      "Mindfulness for Work",
      "https://openseauserdata.com/files/779eea3983275169131860ebc14e4932.gif",
      "Enter the realm of mindful productivity, where you wield the power of presence to navigate the challenges of the workday with calm and clarity.",
      require("../assets/sounds/Mindfulness for Work.mp3")
    ),
    
    // Sleep
    new Task(
      7,
      "Sleep",
      "Deep Sleep Meditation",
      "https://pbs.twimg.com/media/FQSyfkCXsAMRHu9.png",
      "Embark on a dreamy journey to the land of deep sleep, where you'll rest your weary adventurer's body and recharge for the adventures of tomorrow.",
      require("../assets/sounds/Deep Sleep Meditation.mp3")
    ),
    new Task(
      8,
      "Sleep",
      "Sleep Hypnosis",
      "https://media1.tenor.com/m/T7BLoKFBhSkAAAAC/sleep-psyduck.gif",
      "Surrender to the soothing melodies of sleep hypnosis as you descend into the realm of slumber, guided by the gentle whispers of relaxation.",
      require("../assets/sounds/Sleep Hypnosis.mp3")
    ),
    new Task(
      9,
      "Sleep",
      "Calm Sleep Stories",
      "https://i.pinimg.com/736x/8c/59/7b/8c597b116bc47a3746e001f2f2f92080.jpg",
      "Drift off into the pixelated world of calming sleep stories, where enchanting tales and melodies will escort you to a restful night's sleep.",
      require("../assets/sounds/Calm Sleep Stories.mp3")
    ),
  ];
  