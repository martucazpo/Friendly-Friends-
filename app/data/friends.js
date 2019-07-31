//===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [{
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  },
  {
    "name": "Dax",
    "photo": "Friendly-Friends-\assets\images\danijela-froki-RqdkfHl0L3A-unsplash.jpg",
    "scores": [
      "5",
      "3",
      "4",
      "2",
      "3",
      "1",
      "5",
      "4",
      "4",
      "3"
    ]
  },
  {
    "name": "Hester",
    "photo": "Friendly-Friends-\assets\images\brooke-cagle-HRZUzoX1e6w-unsplash.jpg",
    "scores": [
      "3",
      "4",
      "1",
      "5",
      "2",
      "1",
      "3",
      "4",
      "3",
      "4"
    ]
  },
  {
    "name": "Eusebio",
    "photo": "Friendly-Friends-\assets\images\ayo-ogunseinde-sibVwORYqs0-unsplash.jpg",
    "scores": [
      "4",
      "3",
      "4",
      "5",
      "2",
      "4",
      "3",
      "4",
      "1",
      "4"
    ]
  },
  {
    "name": "Verity",
    "photo": "Friendly-Friends-\assets\images\jodyhongfilms-GBgp6Iy16lc-unsplash.jpg",
    "scores": [
      "5",
      "5",
      "1",
      "1",
      "5",
      "3",
      "1",
      "1",
      "5",
      "5"
    ]
  },
  {
    "name": "Koko(mangarathusati)",
    "photo": "Friendly-Friends-\assets\images\hust-wilson-nJHvhXS4C0U-unsplash.jpg",
    "score": [
      "5",
      "4",
      "3",
      "4",
      "2",
      "3",
      "2",
      "4",
      "5",
      "4"
    ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;