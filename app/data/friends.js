//===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [{
    "name": "Ahmed",
    "photo": "https://github.com/martucazpo/Friendly-Friends-/blob/master/assets/images/aatik-tasneem-7omHUGhhmZ0-unsplash.jpg?raw=true",
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
    "photo": "https://github.com/martucazpo/Friendly-Friends-/blob/master/assets/images/danijela-froki-RqdkfHl0L3A-unsplash.jpg?raw=true",
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
    "photo": "https://github.com/martucazpo/Friendly-Friends-/blob/master/assets/images/brooke-cagle-HRZUzoX1e6w-unsplash.jpg?raw=true",
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
    "photo": "https://github.com/martucazpo/Friendly-Friends-/blob/master/assets/images/ayo-ogunseinde-sibVwORYqs0-unsplash.jpg?raw=true",
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
    "photo": "https://github.com/martucazpo/Friendly-Friends-/blob/master/assets/images/jodyhongfilms-GBgp6Iy16lc-unsplash.jpg?raw=true",
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
    "photo": "https://github.com/martucazpo/Friendly-Friends-/blob/master/assets/images/hust-wilson-nJHvhXS4C0U-unsplash.jpg?raw=true",
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