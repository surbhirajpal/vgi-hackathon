// Data for the chart
export const graph1Data = {
  labels: [
    "12 AM",
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM",
  ],
  datasets: [
    {
      label: "Successful Trips",
      data: [
        5,
        8,
        3,
        2,
        0,
        0,
        4,
        10,
        20,
        18,
        22,
        25,
        30,
        27,
        24,
        15,
        10,
        8,
        12,
        14,
        9,
        5,
        3,
        2,
      ],
      backgroundColor: "rgba(0, 60, 125)",
      borderWidth: 1,
    },
  ],
};

// Options for the chart
export const graph1Options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Number of Successful Trips Per Hour",
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Time",
      },
    },
    y: {
      title: {
        display: true,
        text: "Number of Successful Trips",
      },
      beginAtZero: true,
    },
  },
};

export const graph2Data = {
  labels: [
    "12 AM",
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM",
  ], // X-axis labels for each hour
  datasets: [
    {
      label: "Cancellations by Driver",
      data: [
        15,
        14,
        0,
        0,
        10,
        9,
        7,
        10,
        10,
        4,
        10,
        7,
        3,
        1,
        4,
        5,
        3,
        10,
        8,
        2,
        4,
        7,
        0,
        11,
      ],
      // Driver cancellations
      backgroundColor: "rgba(5, 126, 205)",
    },
    {
      label: "Cancellations by User",
      data: [
        1,
        3,
        5,
        9,
        5,
        9,
        2,
        7,
        15,
        6,
        4,
        0,
        7,
        5,
        11,
        1,
        14,
        12,
        2,
        9,
        9,
        15,
        1,
        3,
      ], // User cancellations
      backgroundColor: "rgba(120, 184, 41)",
    },
  ],
};

// Chart options
export const graph2Options = {
  responsive: true,
  maintainAspectRatio: false, // Ensure it takes up all the available height
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Cancellations by Time of Day",
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Time",
      },
    },
    y: {
      title: {
        display: true,
        text: "Number of Cancellations",
      },
      beginAtZero: true,
    },
  },
};

export const graph3Data = {
  labels: [
    "12 AM",
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
  ], // hours of the day
  datasets: [
    {
      label: "Delay (minutes)",
      data: [5, 15, 10, 8, 12, 9, 7, 14, 18, 21, 10, 6], // delay values for each hour
      backgroundColor: "rgba(187, 207, 0)",
      borderWidth: 1, // Border width
    },
  ],
};

// Options for customizing the chart
export const graph3Options = {
  responsive: true,
  maintainAspectRatio: false, // Ensure it takes up all the available height
  plugins: {
    title: {
      display: true,
      text: "Trip Delay by Minutes",
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `${tooltipItem.raw} minutes`, // Display delay in minutes
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Hour of the Day",
      },
    },
    y: {
      title: {
        display: true,
        text: "Delay (Minutes)",
      },
      beginAtZero: true, // Ensure the y-axis starts at 0
    },
  },
};

// CITY 2 DATA

// Data for the chart for a new city with more difference in values
export const graph1DataCity2 = {
  labels: [
    "12 AM",
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM",
  ],
  datasets: [
    {
      label: "Successful Trips",
      data: [
        0,
        0,
        0,
        1,
        2,
        3,
        6,
        15,
        45,
        60,
        50,
        30,
        10,
        8,
        5,
        3,
        2,
        0,
        0,
        2,
        5,
        8,
        10,
        12,
      ],
      backgroundColor: "rgba(0, 60, 125)",
      borderWidth: 1,
    },
  ],
};

// Options for the chart
export const graph1OptionsCity2 = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "top" },
    title: {
      display: true,
      text: "Number of Successful Trips Per Hour (City 2)",
    },
  },
  scales: {
    x: { title: { display: true, text: "Time" } },
    y: {
      title: { display: true, text: "Number of Successful Trips" },
      beginAtZero: true,
    },
  },
};

export const graph2DataCity2 = {
  labels: [
    "12 AM",
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM",
  ],
  datasets: [
    {
      label: "Cancellations by Driver",
      data: [
        35,
        30,
        20,
        18,
        12,
        15,
        10,
        5,
        10,
        12,
        25,
        28,
        30,
        25,
        18,
        22,
        15,
        20,
        12,
        15,
        20,
        25,
        15,
        10,
      ],
      backgroundColor: "rgba(5, 126, 205)",
    },
    {
      label: "Cancellations by User",
      data: [
        15,
        20,
        10,
        8,
        12,
        18,
        22,
        25,
        30,
        28,
        24,
        20,
        15,
        12,
        18,
        25,
        30,
        35,
        22,
        20,
        18,
        10,
        7,
        6,
      ],
      backgroundColor: "rgba(120, 184, 41)",
    },
  ],
};

// Options for the chart
export const graph2OptionsCity2 = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Cancellations by Time of Day (City 2)" },
  },
  scales: {
    x: { title: { display: true, text: "Time" } },
    y: {
      title: { display: true, text: "Number of Cancellations" },
      beginAtZero: true,
    },
  },
};

export const graph3DataCity2 = {
  labels: [
    "12 AM",
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
  ],
  datasets: [
    {
      label: "Delay (minutes)",
      data: [50, 70, 60, 45, 35, 40, 20, 30, 90, 120, 100, 80],
      backgroundColor: "rgba(187, 207, 0)",
      borderWidth: 1,
    },
  ],
};

// Options for the chart
export const graph3OptionsCity2 = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: { display: true, text: "Trip Delay by Minutes (City 2)" },
    tooltip: {
      callbacks: { label: (tooltipItem) => `${tooltipItem.raw} minutes` },
    },
  },
  scales: {
    x: { title: { display: true, text: "Hour of the Day" } },
    y: { title: { display: true, text: "Delay (Minutes)" }, beginAtZero: true },
  },
};
