export const graph1Data = {
  labels: [
    "12:00 AM",
    "1:00 AM",
    "2:00 AM",
    "3:00 AM",
    "4:00 AM",
    "5:00 AM",
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
  ],
  datasets: [
    {
      label: "Monday-Friday",
      data: [
        0,
        1,
        1,
        1,
        2,
        3,
        5,
        8,
        12,
        15,
        18,
        20,
        25,
        30,
        28,
        26,
        24,
        20,
        18,
        10,
        5,
        3,
        2,
        1,
      ],
      borderColor: "#003C7D", // Dark Blue
      backgroundColor: "rgba(0, 60, 125, 0.2)",
      tension: 0.4, // Makes the line curvy
    },
    {
      label: "Saturday",
      data: [
        0,
        0,
        0,
        0,
        1,
        2,
        4,
        6,
        10,
        14,
        16,
        18,
        22,
        26,
        24,
        22,
        20,
        16,
        12,
        8,
        4,
        2,
        1,
        0,
      ],
      borderColor: "#057ECD", // Bright Blue
      backgroundColor: "rgba(5, 126, 205, 0.2)",
      tension: 0.4,
    },
    {
      label: "Sunday",
      data: [
        0,
        0,
        0,
        0,
        0,
        1,
        3,
        5,
        9,
        12,
        14,
        16,
        18,
        20,
        18,
        16,
        14,
        10,
        8,
        5,
        3,
        2,
        1,
        0,
      ],
      borderColor: "#78B829", // Green
      backgroundColor: "rgba(120, 184, 41, 0.2)",
      tension: 0.4,
    },
  ],
};

export const graph1Options = {
  responsive: true,
  maintainAspectRatio: false, // Ensure it takes up all the available height
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Traffic Information",
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Time of Day",
      },
    },
    y: {
      title: {
        display: true,
        text: "Number of Vehicles on the Road",
      },
      beginAtZero: true,
    },
  },
};

export const graph2Data = {
  labels: [
    "12:00 AM",
    "1:00 AM",
    "2:00 AM",
    "3:00 AM",
    "4:00 AM",
    "5:00 AM",
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
  ],
  datasets: [
    {
      label: "Delay Time (Minutes)",
      data: [
        2,
        1,
        1,
        0,
        0,
        1,
        3,
        5,
        8,
        10,
        15,
        20,
        25,
        30,
        28,
        22,
        18,
        15,
        10,
        5,
        3,
        2,
        1,
        0,
      ],
      borderColor: "#BBCF00", // Yellow-Green for the line
      backgroundColor: "rgba(187, 207, 0, 0.2)", // Translucent version of the same color
      tension: 0.4, // Curvy line
    },
  ],
};

export const graph2Options = {
  responsive: true,
  maintainAspectRatio: false, // Ensure it takes up all the available height
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Delay Time Throughout the Day",
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Time of Day",
      },
      grid: {
        display: false
      },
    },
    y: {
      title: {
        display: true,
        text: "Delay Time (Minutes)",
      },
      grid: {
        display: false,
      },
      beginAtZero: true,
    },
  },
};
