'use strict';

const Controller = require('egg').Controller;

class StudentController extends Controller {
  async index() {
    const {ctx} = this;
    ctx.body = [
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "72", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group B", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "74"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "90", 
          "test preparation course": "completed", 
          "writing score": "88"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "90", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group B", 
          "reading score": "95", 
          "test preparation course": "none", 
          "writing score": "93"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "47", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group A", 
          "reading score": "57", 
          "test preparation course": "none", 
          "writing score": "44"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "76", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "78", 
          "test preparation course": "none", 
          "writing score": "75"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "71", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "83", 
          "test preparation course": "none", 
          "writing score": "78"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "88", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "95", 
          "test preparation course": "completed", 
          "writing score": "92"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "40", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "43", 
          "test preparation course": "none", 
          "writing score": "39"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "64", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "64", 
          "test preparation course": "completed", 
          "writing score": "67"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "38", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "60", 
          "test preparation course": "none", 
          "writing score": "50"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "58", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "54", 
          "test preparation course": "none", 
          "writing score": "52"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "40", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "52", 
          "test preparation course": "none", 
          "writing score": "43"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "65", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "81", 
          "test preparation course": "none", 
          "writing score": "73"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "78", 
          "parental level of education": "some college", 
          "race/ethnicity": "group A", 
          "reading score": "72", 
          "test preparation course": "completed", 
          "writing score": "70"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "50", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group A", 
          "reading score": "53", 
          "test preparation course": "none", 
          "writing score": "58"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "75", 
          "test preparation course": "none", 
          "writing score": "78"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "88", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "89", 
          "test preparation course": "none", 
          "writing score": "86"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "18", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "32", 
          "test preparation course": "none", 
          "writing score": "28"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "46", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group C", 
          "reading score": "42", 
          "test preparation course": "completed", 
          "writing score": "46"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "54", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "58", 
          "test preparation course": "none", 
          "writing score": "61"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "66", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "69", 
          "test preparation course": "none", 
          "writing score": "63"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "65", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "75", 
          "test preparation course": "completed", 
          "writing score": "70"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "44", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "54", 
          "test preparation course": "none", 
          "writing score": "53"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "73", 
          "test preparation course": "none", 
          "writing score": "73"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "74", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "71", 
          "test preparation course": "completed", 
          "writing score": "80"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "73", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group A", 
          "reading score": "74", 
          "test preparation course": "none", 
          "writing score": "72"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "54", 
          "test preparation course": "none", 
          "writing score": "55"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "67", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "69", 
          "test preparation course": "none", 
          "writing score": "75"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "70", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "70", 
          "test preparation course": "none", 
          "writing score": "65"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "62", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group D", 
          "reading score": "70", 
          "test preparation course": "none", 
          "writing score": "75"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "74", 
          "test preparation course": "none", 
          "writing score": "74"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "63", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "65", 
          "test preparation course": "none", 
          "writing score": "61"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "56", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group E", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "65"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "40", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "42", 
          "test preparation course": "none", 
          "writing score": "38"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "97", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "87", 
          "test preparation course": "none", 
          "writing score": "82"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "81", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "81", 
          "test preparation course": "completed", 
          "writing score": "79"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "74", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "81", 
          "test preparation course": "none", 
          "writing score": "83"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "50", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "64", 
          "test preparation course": "none", 
          "writing score": "59"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "75", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "90", 
          "test preparation course": "completed", 
          "writing score": "88"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "57", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "56", 
          "test preparation course": "none", 
          "writing score": "57"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "55", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "61", 
          "test preparation course": "none", 
          "writing score": "54"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "58", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "73", 
          "test preparation course": "none", 
          "writing score": "68"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "53", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "58", 
          "test preparation course": "none", 
          "writing score": "65"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "59", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "65", 
          "test preparation course": "completed", 
          "writing score": "66"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "50", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "56", 
          "test preparation course": "none", 
          "writing score": "54"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "65", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "54", 
          "test preparation course": "none", 
          "writing score": "57"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "55", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group A", 
          "reading score": "65", 
          "test preparation course": "completed", 
          "writing score": "62"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "66", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "71", 
          "test preparation course": "none", 
          "writing score": "76"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "57", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "74", 
          "test preparation course": "completed", 
          "writing score": "76"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "82", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "84", 
          "test preparation course": "completed", 
          "writing score": "82"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "53", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "55", 
          "test preparation course": "none", 
          "writing score": "48"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "77", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "69", 
          "test preparation course": "completed", 
          "writing score": "68"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "53", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "44", 
          "test preparation course": "none", 
          "writing score": "42"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "88", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "78", 
          "test preparation course": "none", 
          "writing score": "75"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "71", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "84", 
          "test preparation course": "completed", 
          "writing score": "87"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "33", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "41", 
          "test preparation course": "none", 
          "writing score": "43"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "82", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "85", 
          "test preparation course": "completed", 
          "writing score": "86"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "52", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "55", 
          "test preparation course": "none", 
          "writing score": "49"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "58", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "59", 
          "test preparation course": "completed", 
          "writing score": "58"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "0", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "17", 
          "test preparation course": "none", 
          "writing score": "10"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "79", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group E", 
          "reading score": "74", 
          "test preparation course": "completed", 
          "writing score": "72"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "39", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group A", 
          "reading score": "39", 
          "test preparation course": "none", 
          "writing score": "34"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "62", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group A", 
          "reading score": "61", 
          "test preparation course": "none", 
          "writing score": "55"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "80", 
          "test preparation course": "none", 
          "writing score": "71"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "59", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "58", 
          "test preparation course": "none", 
          "writing score": "59"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "67", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "64", 
          "test preparation course": "none", 
          "writing score": "61"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "45", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "37", 
          "test preparation course": "none", 
          "writing score": "37"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "60", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "74"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "61", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "58", 
          "test preparation course": "none", 
          "writing score": "56"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "39", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "64", 
          "test preparation course": "none", 
          "writing score": "57"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "58", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "63", 
          "test preparation course": "completed", 
          "writing score": "73"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "63", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "55", 
          "test preparation course": "completed", 
          "writing score": "63"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "41", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group A", 
          "reading score": "51", 
          "test preparation course": "none", 
          "writing score": "48"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "61", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "57", 
          "test preparation course": "none", 
          "writing score": "56"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "49", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "49", 
          "test preparation course": "none", 
          "writing score": "41"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "44", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "41", 
          "test preparation course": "none", 
          "writing score": "38"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "30", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group E", 
          "reading score": "26", 
          "test preparation course": "none", 
          "writing score": "22"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "80", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group A", 
          "reading score": "78", 
          "test preparation course": "completed", 
          "writing score": "81"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "61", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "74", 
          "test preparation course": "completed", 
          "writing score": "72"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "62", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group E", 
          "reading score": "68", 
          "test preparation course": "none", 
          "writing score": "68"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "47", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "49", 
          "test preparation course": "none", 
          "writing score": "50"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "49", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "45", 
          "test preparation course": "none", 
          "writing score": "45"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "50", 
          "parental level of education": "some college", 
          "race/ethnicity": "group A", 
          "reading score": "47", 
          "test preparation course": "completed", 
          "writing score": "54"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "72", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "64", 
          "test preparation course": "none", 
          "writing score": "63"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "42", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "39", 
          "test preparation course": "none", 
          "writing score": "34"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "73", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "80", 
          "test preparation course": "none", 
          "writing score": "82"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "76", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "83", 
          "test preparation course": "none", 
          "writing score": "88"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "71", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "71", 
          "test preparation course": "none", 
          "writing score": "74"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "58", 
          "parental level of education": "some college", 
          "race/ethnicity": "group A", 
          "reading score": "70", 
          "test preparation course": "none", 
          "writing score": "67"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "73", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "86", 
          "test preparation course": "none", 
          "writing score": "82"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "65", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "74"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "27", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "34", 
          "test preparation course": "none", 
          "writing score": "36"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "71", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "79", 
          "test preparation course": "none", 
          "writing score": "71"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "43", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "45", 
          "test preparation course": "completed", 
          "writing score": "50"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "79", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "86", 
          "test preparation course": "none", 
          "writing score": "92"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "78", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "81", 
          "test preparation course": "completed", 
          "writing score": "82"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "65", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "66", 
          "test preparation course": "completed", 
          "writing score": "62"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "63", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "72", 
          "test preparation course": "completed", 
          "writing score": "70"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "58", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "67", 
          "test preparation course": "none", 
          "writing score": "62"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "65", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "67", 
          "test preparation course": "none", 
          "writing score": "62"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "79", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "67", 
          "test preparation course": "none", 
          "writing score": "67"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "68", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "74", 
          "test preparation course": "completed", 
          "writing score": "74"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "85", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "91", 
          "test preparation course": "none", 
          "writing score": "89"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "60", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "44", 
          "test preparation course": "completed", 
          "writing score": "47"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "98", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "86", 
          "test preparation course": "completed", 
          "writing score": "90"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "58", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "67", 
          "test preparation course": "none", 
          "writing score": "72"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "87", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group D", 
          "reading score": "100", 
          "test preparation course": "none", 
          "writing score": "100"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "66", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "63", 
          "test preparation course": "completed", 
          "writing score": "64"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "52", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "76", 
          "test preparation course": "none", 
          "writing score": "70"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "70", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "64", 
          "test preparation course": "none", 
          "writing score": "72"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "77", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "89", 
          "test preparation course": "completed", 
          "writing score": "98"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "62", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "55", 
          "test preparation course": "none", 
          "writing score": "49"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "54", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group A", 
          "reading score": "53", 
          "test preparation course": "none", 
          "writing score": "47"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "51", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "58", 
          "test preparation course": "none", 
          "writing score": "54"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "99", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group E", 
          "reading score": "100", 
          "test preparation course": "completed", 
          "writing score": "100"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "84", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "77", 
          "test preparation course": "none", 
          "writing score": "74"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "75", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group B", 
          "reading score": "85", 
          "test preparation course": "none", 
          "writing score": "82"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "78", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "82", 
          "test preparation course": "none", 
          "writing score": "79"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "51", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "63", 
          "test preparation course": "none", 
          "writing score": "61"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "55", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "69", 
          "test preparation course": "none", 
          "writing score": "65"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "79", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "92", 
          "test preparation course": "completed", 
          "writing score": "89"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "91", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "89", 
          "test preparation course": "completed", 
          "writing score": "92"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "88", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "93", 
          "test preparation course": "completed", 
          "writing score": "93"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "63", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "57", 
          "test preparation course": "none", 
          "writing score": "56"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "83", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "80", 
          "test preparation course": "none", 
          "writing score": "73"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "87", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "95", 
          "test preparation course": "none", 
          "writing score": "86"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "72", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "68", 
          "test preparation course": "none", 
          "writing score": "67"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "65", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "77", 
          "test preparation course": "completed", 
          "writing score": "74"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "82", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group D", 
          "reading score": "82", 
          "test preparation course": "none", 
          "writing score": "74"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "51", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group A", 
          "reading score": "49", 
          "test preparation course": "none", 
          "writing score": "51"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "89", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group D", 
          "reading score": "84", 
          "test preparation course": "none", 
          "writing score": "82"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "53", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "37", 
          "test preparation course": "completed", 
          "writing score": "40"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "87", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "74", 
          "test preparation course": "completed", 
          "writing score": "70"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "75", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "81", 
          "test preparation course": "completed", 
          "writing score": "84"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "74", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "79", 
          "test preparation course": "completed", 
          "writing score": "75"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "58", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "55", 
          "test preparation course": "none", 
          "writing score": "48"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "51", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "54", 
          "test preparation course": "completed", 
          "writing score": "41"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "70", 
          "parental level of education": "high school", 
          "race/ethnicity": "group E", 
          "reading score": "55", 
          "test preparation course": "none", 
          "writing score": "56"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "59", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "66", 
          "test preparation course": "none", 
          "writing score": "67"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "71", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "61", 
          "test preparation course": "completed", 
          "writing score": "69"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "76", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "71"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "59", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "62", 
          "test preparation course": "none", 
          "writing score": "64"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "42", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "55", 
          "test preparation course": "completed", 
          "writing score": "54"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "57", 
          "parental level of education": "high school", 
          "race/ethnicity": "group A", 
          "reading score": "43", 
          "test preparation course": "none", 
          "writing score": "47"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "88", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "73", 
          "test preparation course": "none", 
          "writing score": "78"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "22", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "39", 
          "test preparation course": "none", 
          "writing score": "33"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "88", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "84", 
          "test preparation course": "none", 
          "writing score": "75"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "73", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "68", 
          "test preparation course": "none", 
          "writing score": "66"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "68", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "75", 
          "test preparation course": "completed", 
          "writing score": "81"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "100", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "100", 
          "test preparation course": "completed", 
          "writing score": "93"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "62", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group A", 
          "reading score": "67", 
          "test preparation course": "completed", 
          "writing score": "69"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "77", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group A", 
          "reading score": "67", 
          "test preparation course": "none", 
          "writing score": "68"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "59", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "70", 
          "test preparation course": "completed", 
          "writing score": "66"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "54", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "49", 
          "test preparation course": "none", 
          "writing score": "47"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "62", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "67", 
          "test preparation course": "none", 
          "writing score": "61"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "70", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "89", 
          "test preparation course": "completed", 
          "writing score": "88"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "66", 
          "parental level of education": "high school", 
          "race/ethnicity": "group E", 
          "reading score": "74", 
          "test preparation course": "completed", 
          "writing score": "78"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "60", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "60", 
          "test preparation course": "none", 
          "writing score": "60"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "61", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "86", 
          "test preparation course": "completed", 
          "writing score": "87"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "66", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "62", 
          "test preparation course": "none", 
          "writing score": "64"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "82", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "78", 
          "test preparation course": "completed", 
          "writing score": "74"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "75", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "88", 
          "test preparation course": "completed", 
          "writing score": "85"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "49", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group B", 
          "reading score": "53", 
          "test preparation course": "none", 
          "writing score": "52"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "52", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "53", 
          "test preparation course": "none", 
          "writing score": "49"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "81", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group E", 
          "reading score": "92", 
          "test preparation course": "none", 
          "writing score": "91"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "96", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "100", 
          "test preparation course": "completed", 
          "writing score": "100"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "53", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "51", 
          "test preparation course": "completed", 
          "writing score": "51"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "58", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group B", 
          "reading score": "76", 
          "test preparation course": "completed", 
          "writing score": "78"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "68", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "83", 
          "test preparation course": "completed", 
          "writing score": "78"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "67", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "75", 
          "test preparation course": "completed", 
          "writing score": "70"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "72", 
          "parental level of education": "high school", 
          "race/ethnicity": "group A", 
          "reading score": "73", 
          "test preparation course": "completed", 
          "writing score": "74"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "94", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group E", 
          "reading score": "88", 
          "test preparation course": "none", 
          "writing score": "78"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "79", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "86", 
          "test preparation course": "none", 
          "writing score": "81"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "63", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "67", 
          "test preparation course": "none", 
          "writing score": "70"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "43", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "51", 
          "test preparation course": "completed", 
          "writing score": "54"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "81", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group C", 
          "reading score": "91", 
          "test preparation course": "completed", 
          "writing score": "87"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "46", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "54", 
          "test preparation course": "completed", 
          "writing score": "58"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "71", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "77", 
          "test preparation course": "completed", 
          "writing score": "77"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "52", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group B", 
          "reading score": "70", 
          "test preparation course": "completed", 
          "writing score": "62"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "97", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "100", 
          "test preparation course": "completed", 
          "writing score": "100"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "62", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group C", 
          "reading score": "68", 
          "test preparation course": "completed", 
          "writing score": "75"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "46", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "64", 
          "test preparation course": "none", 
          "writing score": "66"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "50", 
          "parental level of education": "high school", 
          "race/ethnicity": "group E", 
          "reading score": "50", 
          "test preparation course": "none", 
          "writing score": "47"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "65", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "69", 
          "test preparation course": "none", 
          "writing score": "70"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "45", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "52", 
          "test preparation course": "completed", 
          "writing score": "49"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "65", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "67", 
          "test preparation course": "completed", 
          "writing score": "65"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "80", 
          "parental level of education": "high school", 
          "race/ethnicity": "group E", 
          "reading score": "76", 
          "test preparation course": "none", 
          "writing score": "65"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "62", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "66", 
          "test preparation course": "completed", 
          "writing score": "68"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "48", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "52", 
          "test preparation course": "none", 
          "writing score": "45"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "77", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "88", 
          "test preparation course": "none", 
          "writing score": "87"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "66", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "65", 
          "test preparation course": "none", 
          "writing score": "69"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "76", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "83", 
          "test preparation course": "completed", 
          "writing score": "79"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "62", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "64", 
          "test preparation course": "none", 
          "writing score": "66"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "77", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "62", 
          "test preparation course": "completed", 
          "writing score": "62"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group C", 
          "reading score": "84", 
          "test preparation course": "completed", 
          "writing score": "85"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "61", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "55", 
          "test preparation course": "none", 
          "writing score": "52"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "59", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "69", 
          "test preparation course": "completed", 
          "writing score": "65"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "55", 
          "parental level of education": "high school", 
          "race/ethnicity": "group E", 
          "reading score": "56", 
          "test preparation course": "none", 
          "writing score": "51"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "45", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "53", 
          "test preparation course": "none", 
          "writing score": "55"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "78", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group B", 
          "reading score": "79", 
          "test preparation course": "none", 
          "writing score": "76"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "67", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "84", 
          "test preparation course": "completed", 
          "writing score": "86"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "65", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "81", 
          "test preparation course": "none", 
          "writing score": "77"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "77", 
          "test preparation course": "none", 
          "writing score": "69"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "57", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "69", 
          "test preparation course": "none", 
          "writing score": "68"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "59", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "41", 
          "test preparation course": "none", 
          "writing score": "42"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "74", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "71", 
          "test preparation course": "completed", 
          "writing score": "78"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "82", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group E", 
          "reading score": "62", 
          "test preparation course": "none", 
          "writing score": "62"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "81", 
          "parental level of education": "high school", 
          "race/ethnicity": "group E", 
          "reading score": "80", 
          "test preparation course": "completed", 
          "writing score": "76"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "74", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "81", 
          "test preparation course": "none", 
          "writing score": "76"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "58", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "61", 
          "test preparation course": "none", 
          "writing score": "66"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "80", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "79", 
          "test preparation course": "completed", 
          "writing score": "79"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "35", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "28", 
          "test preparation course": "none", 
          "writing score": "27"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "42", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "62", 
          "test preparation course": "none", 
          "writing score": "60"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "60", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "51", 
          "test preparation course": "completed", 
          "writing score": "56"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "87", 
          "parental level of education": "high school", 
          "race/ethnicity": "group E", 
          "reading score": "91", 
          "test preparation course": "completed", 
          "writing score": "81"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "84", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "83", 
          "test preparation course": "completed", 
          "writing score": "75"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "83", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "86", 
          "test preparation course": "completed", 
          "writing score": "88"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "34", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "42", 
          "test preparation course": "none", 
          "writing score": "39"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "66", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "77", 
          "test preparation course": "none", 
          "writing score": "70"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "61", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "56", 
          "test preparation course": "completed", 
          "writing score": "56"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "56", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "68", 
          "test preparation course": "completed", 
          "writing score": "74"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "87", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "85", 
          "test preparation course": "none", 
          "writing score": "73"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "55", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "65", 
          "test preparation course": "none", 
          "writing score": "62"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "86", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "80", 
          "test preparation course": "none", 
          "writing score": "75"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "52", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "66", 
          "test preparation course": "completed", 
          "writing score": "73"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "45", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group E", 
          "reading score": "56", 
          "test preparation course": "none", 
          "writing score": "54"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "72", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "71"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "57", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "50", 
          "test preparation course": "none", 
          "writing score": "54"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "68", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group A", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "64"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "88", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "95", 
          "test preparation course": "completed", 
          "writing score": "94"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "76", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "64", 
          "test preparation course": "none", 
          "writing score": "66"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "46", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "43", 
          "test preparation course": "none", 
          "writing score": "42"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "67", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group B", 
          "reading score": "86", 
          "test preparation course": "none", 
          "writing score": "83"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "92", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group E", 
          "reading score": "87", 
          "test preparation course": "none", 
          "writing score": "78"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "83", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "82", 
          "test preparation course": "completed", 
          "writing score": "84"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "80", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "75", 
          "test preparation course": "none", 
          "writing score": "77"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "63", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "66", 
          "test preparation course": "none", 
          "writing score": "67"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "64", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "60", 
          "test preparation course": "completed", 
          "writing score": "74"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "54", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "52", 
          "test preparation course": "none", 
          "writing score": "51"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "84", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "80", 
          "test preparation course": "none", 
          "writing score": "80"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "73", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "68", 
          "test preparation course": "completed", 
          "writing score": "66"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "80", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group E", 
          "reading score": "83", 
          "test preparation course": "none", 
          "writing score": "83"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "56", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "52", 
          "test preparation course": "none", 
          "writing score": "55"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "59", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "51", 
          "test preparation course": "none", 
          "writing score": "43"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "75", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "74", 
          "test preparation course": "none", 
          "writing score": "69"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "85", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "76", 
          "test preparation course": "none", 
          "writing score": "71"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "89", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "76", 
          "test preparation course": "none", 
          "writing score": "74"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "58", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "70", 
          "test preparation course": "completed", 
          "writing score": "68"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "65", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "64", 
          "test preparation course": "none", 
          "writing score": "62"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "68", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "60", 
          "test preparation course": "none", 
          "writing score": "53"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "47", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group A", 
          "reading score": "49", 
          "test preparation course": "completed", 
          "writing score": "49"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "71", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "83", 
          "test preparation course": "none", 
          "writing score": "83"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "60", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "70", 
          "test preparation course": "completed", 
          "writing score": "70"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "80", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group D", 
          "reading score": "80", 
          "test preparation course": "none", 
          "writing score": "72"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "54", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "52", 
          "test preparation course": "none", 
          "writing score": "52"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "62", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "73", 
          "test preparation course": "none", 
          "writing score": "70"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "64", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "73", 
          "test preparation course": "none", 
          "writing score": "68"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "78", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "77", 
          "test preparation course": "completed", 
          "writing score": "77"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "70", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "75", 
          "test preparation course": "none", 
          "writing score": "78"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "65", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group C", 
          "reading score": "81", 
          "test preparation course": "completed", 
          "writing score": "81"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "64", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "79", 
          "test preparation course": "completed", 
          "writing score": "77"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "79", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "79", 
          "test preparation course": "completed", 
          "writing score": "78"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "44", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "50", 
          "test preparation course": "none", 
          "writing score": "51"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "99", 
          "parental level of education": "high school", 
          "race/ethnicity": "group E", 
          "reading score": "93", 
          "test preparation course": "none", 
          "writing score": "90"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "76", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "73", 
          "test preparation course": "none", 
          "writing score": "68"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "59", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "42", 
          "test preparation course": "none", 
          "writing score": "41"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "63", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "75", 
          "test preparation course": "none", 
          "writing score": "81"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "77"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "88", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "92", 
          "test preparation course": "completed", 
          "writing score": "95"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "71", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "76", 
          "test preparation course": "none", 
          "writing score": "70"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "63", 
          "test preparation course": "none", 
          "writing score": "61"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "58", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "49", 
          "test preparation course": "none", 
          "writing score": "42"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "47", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "53", 
          "test preparation course": "none", 
          "writing score": "58"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "65", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "70", 
          "test preparation course": "none", 
          "writing score": "71"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "88", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "85", 
          "test preparation course": "completed", 
          "writing score": "76"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "83", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "78", 
          "test preparation course": "none", 
          "writing score": "73"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "85", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "92", 
          "test preparation course": "completed", 
          "writing score": "93"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "59", 
          "parental level of education": "high school", 
          "race/ethnicity": "group E", 
          "reading score": "63", 
          "test preparation course": "completed", 
          "writing score": "75"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "65", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "86", 
          "test preparation course": "none", 
          "writing score": "80"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "73", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group B", 
          "reading score": "56", 
          "test preparation course": "none", 
          "writing score": "57"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "53", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "52", 
          "test preparation course": "none", 
          "writing score": "42"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "45", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "48", 
          "test preparation course": "none", 
          "writing score": "46"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "73", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "79", 
          "test preparation course": "none", 
          "writing score": "84"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "70", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "78", 
          "test preparation course": "completed", 
          "writing score": "78"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "37", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "46", 
          "test preparation course": "none", 
          "writing score": "46"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "81", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "82", 
          "test preparation course": "completed", 
          "writing score": "82"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "97", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "82", 
          "test preparation course": "completed", 
          "writing score": "88"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "67", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "89", 
          "test preparation course": "none", 
          "writing score": "82"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "88", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group B", 
          "reading score": "75", 
          "test preparation course": "none", 
          "writing score": "76"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "77", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group E", 
          "reading score": "76", 
          "test preparation course": "completed", 
          "writing score": "77"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "76", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "70", 
          "test preparation course": "none", 
          "writing score": "68"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "86", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "73", 
          "test preparation course": "none", 
          "writing score": "70"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "63", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "60", 
          "test preparation course": "completed", 
          "writing score": "57"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "65", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group E", 
          "reading score": "73", 
          "test preparation course": "none", 
          "writing score": "75"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "78", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "77", 
          "test preparation course": "completed", 
          "writing score": "80"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "67", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "62", 
          "test preparation course": "none", 
          "writing score": "60"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "46", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group A", 
          "reading score": "41", 
          "test preparation course": "completed", 
          "writing score": "43"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "71", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "74", 
          "test preparation course": "completed", 
          "writing score": "68"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "40", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "46", 
          "test preparation course": "completed", 
          "writing score": "50"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "90", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "87", 
          "test preparation course": "none", 
          "writing score": "75"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "81", 
          "parental level of education": "some college", 
          "race/ethnicity": "group A", 
          "reading score": "78", 
          "test preparation course": "completed", 
          "writing score": "81"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "56", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "54", 
          "test preparation course": "none", 
          "writing score": "52"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "67", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "84", 
          "test preparation course": "completed", 
          "writing score": "81"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "80", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "76", 
          "test preparation course": "none", 
          "writing score": "64"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "74", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "75", 
          "test preparation course": "completed", 
          "writing score": "83"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "some college", 
          "race/ethnicity": "group A", 
          "reading score": "67", 
          "test preparation course": "none", 
          "writing score": "69"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "99", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "87", 
          "test preparation course": "completed", 
          "writing score": "81"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "51", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "52", 
          "test preparation course": "none", 
          "writing score": "44"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "53", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "71", 
          "test preparation course": "none", 
          "writing score": "67"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "49", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "57", 
          "test preparation course": "none", 
          "writing score": "52"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "73", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "76", 
          "test preparation course": "none", 
          "writing score": "80"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "66", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group B", 
          "reading score": "60", 
          "test preparation course": "none", 
          "writing score": "57"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "67", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "61", 
          "test preparation course": "completed", 
          "writing score": "68"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "68", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "67", 
          "test preparation course": "completed", 
          "writing score": "69"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "59", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "64", 
          "test preparation course": "completed", 
          "writing score": "75"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "71", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "66", 
          "test preparation course": "none", 
          "writing score": "65"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "77", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group D", 
          "reading score": "82", 
          "test preparation course": "completed", 
          "writing score": "91"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "83", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "78"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "63", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group B", 
          "reading score": "71", 
          "test preparation course": "none", 
          "writing score": "69"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "56", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "65", 
          "test preparation course": "none", 
          "writing score": "63"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "67", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "79", 
          "test preparation course": "completed", 
          "writing score": "84"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "75", 
          "parental level of education": "high school", 
          "race/ethnicity": "group E", 
          "reading score": "86", 
          "test preparation course": "none", 
          "writing score": "79"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "71", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "81", 
          "test preparation course": "none", 
          "writing score": "80"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "43", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "53", 
          "test preparation course": "none", 
          "writing score": "53"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "41", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "46", 
          "test preparation course": "none", 
          "writing score": "43"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "82", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "90", 
          "test preparation course": "none", 
          "writing score": "94"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "61", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "61", 
          "test preparation course": "none", 
          "writing score": "62"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "28", 
          "parental level of education": "some college", 
          "race/ethnicity": "group A", 
          "reading score": "23", 
          "test preparation course": "none", 
          "writing score": "19"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "82", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "75", 
          "test preparation course": "completed", 
          "writing score": "77"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "41", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "55", 
          "test preparation course": "none", 
          "writing score": "51"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "71", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "60", 
          "test preparation course": "none", 
          "writing score": "61"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "47", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "37", 
          "test preparation course": "none", 
          "writing score": "35"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "62", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "56", 
          "test preparation course": "completed", 
          "writing score": "53"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "90", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "78", 
          "test preparation course": "none", 
          "writing score": "81"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "83", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "93", 
          "test preparation course": "none", 
          "writing score": "95"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "61", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "68", 
          "test preparation course": "none", 
          "writing score": "66"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "76", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "70", 
          "test preparation course": "completed", 
          "writing score": "69"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "49", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "51", 
          "test preparation course": "none", 
          "writing score": "43"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "24", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "38", 
          "test preparation course": "none", 
          "writing score": "27"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "35", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "55", 
          "test preparation course": "completed", 
          "writing score": "60"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "58", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "61", 
          "test preparation course": "none", 
          "writing score": "52"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "61", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "73", 
          "test preparation course": "none", 
          "writing score": "63"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "76", 
          "test preparation course": "completed", 
          "writing score": "74"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "67", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "72", 
          "test preparation course": "completed", 
          "writing score": "67"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "79", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "73", 
          "test preparation course": "none", 
          "writing score": "67"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "72", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "80", 
          "test preparation course": "none", 
          "writing score": "75"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "62", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "61", 
          "test preparation course": "none", 
          "writing score": "57"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "77", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "94", 
          "test preparation course": "completed", 
          "writing score": "95"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "75", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "74", 
          "test preparation course": "none", 
          "writing score": "66"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "87", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "74", 
          "test preparation course": "none", 
          "writing score": "76"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "52", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group B", 
          "reading score": "65", 
          "test preparation course": "none", 
          "writing score": "69"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "66", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "57", 
          "test preparation course": "none", 
          "writing score": "52"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "63", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "78", 
          "test preparation course": "completed", 
          "writing score": "80"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "46", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "58", 
          "test preparation course": "none", 
          "writing score": "57"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "59", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "71", 
          "test preparation course": "none", 
          "writing score": "70"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "61", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group B", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "70"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "63", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group A", 
          "reading score": "61", 
          "test preparation course": "none", 
          "writing score": "61"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "42", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "66", 
          "test preparation course": "completed", 
          "writing score": "69"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "59", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "62", 
          "test preparation course": "none", 
          "writing score": "61"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "80", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "90", 
          "test preparation course": "none", 
          "writing score": "89"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "58", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "62", 
          "test preparation course": "none", 
          "writing score": "59"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "85", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "84", 
          "test preparation course": "completed", 
          "writing score": "78"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "52", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "58", 
          "test preparation course": "none", 
          "writing score": "58"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "27", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "34", 
          "test preparation course": "none", 
          "writing score": "32"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "59", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "60", 
          "test preparation course": "none", 
          "writing score": "58"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "49", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group A", 
          "reading score": "58", 
          "test preparation course": "completed", 
          "writing score": "60"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "58", 
          "test preparation course": "completed", 
          "writing score": "53"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "61", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "66", 
          "test preparation course": "none", 
          "writing score": "61"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "44", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group A", 
          "reading score": "64", 
          "test preparation course": "none", 
          "writing score": "58"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "73", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "84", 
          "test preparation course": "none", 
          "writing score": "85"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "84", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "77", 
          "test preparation course": "none", 
          "writing score": "71"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "45", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "73", 
          "test preparation course": "completed", 
          "writing score": "70"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "74", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "74", 
          "test preparation course": "none", 
          "writing score": "72"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "82", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "97", 
          "test preparation course": "completed", 
          "writing score": "96"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "59", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "70", 
          "test preparation course": "none", 
          "writing score": "73"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "46", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "43", 
          "test preparation course": "none", 
          "writing score": "41"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "80", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "90", 
          "test preparation course": "none", 
          "writing score": "82"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "85", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group D", 
          "reading score": "95", 
          "test preparation course": "completed", 
          "writing score": "100"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "71", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group A", 
          "reading score": "83", 
          "test preparation course": "none", 
          "writing score": "77"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "66", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group A", 
          "reading score": "64", 
          "test preparation course": "none", 
          "writing score": "62"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "80", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "86", 
          "test preparation course": "none", 
          "writing score": "83"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "87", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "100", 
          "test preparation course": "completed", 
          "writing score": "95"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "79", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group C", 
          "reading score": "81", 
          "test preparation course": "none", 
          "writing score": "71"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "38", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group E", 
          "reading score": "49", 
          "test preparation course": "none", 
          "writing score": "45"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "38", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group A", 
          "reading score": "43", 
          "test preparation course": "none", 
          "writing score": "43"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "67", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "76", 
          "test preparation course": "none", 
          "writing score": "75"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "64", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group E", 
          "reading score": "73", 
          "test preparation course": "none", 
          "writing score": "70"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "57", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "78", 
          "test preparation course": "none", 
          "writing score": "67"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "62", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "64", 
          "test preparation course": "none", 
          "writing score": "64"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "73", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group D", 
          "reading score": "70", 
          "test preparation course": "none", 
          "writing score": "75"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "73", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group E", 
          "reading score": "67", 
          "test preparation course": "completed", 
          "writing score": "59"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "77", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "68", 
          "test preparation course": "none", 
          "writing score": "77"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "76", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "67", 
          "test preparation course": "none", 
          "writing score": "67"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "57", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "54", 
          "test preparation course": "completed", 
          "writing score": "56"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "65", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "74", 
          "test preparation course": "completed", 
          "writing score": "77"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "48", 
          "parental level of education": "high school", 
          "race/ethnicity": "group A", 
          "reading score": "45", 
          "test preparation course": "none", 
          "writing score": "41"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "50", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "67", 
          "test preparation course": "none", 
          "writing score": "63"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "85", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "89", 
          "test preparation course": "none", 
          "writing score": "95"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "74", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "63", 
          "test preparation course": "none", 
          "writing score": "57"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "60", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "59", 
          "test preparation course": "none", 
          "writing score": "54"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "59", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "54", 
          "test preparation course": "completed", 
          "writing score": "67"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "53", 
          "parental level of education": "some college", 
          "race/ethnicity": "group A", 
          "reading score": "43", 
          "test preparation course": "none", 
          "writing score": "43"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "49", 
          "parental level of education": "some college", 
          "race/ethnicity": "group A", 
          "reading score": "65", 
          "test preparation course": "none", 
          "writing score": "55"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "88", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "99", 
          "test preparation course": "completed", 
          "writing score": "100"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "54", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "59", 
          "test preparation course": "none", 
          "writing score": "62"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "63", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "73", 
          "test preparation course": "none", 
          "writing score": "68"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "65", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "65", 
          "test preparation course": "completed", 
          "writing score": "63"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "82", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "80", 
          "test preparation course": "none", 
          "writing score": "77"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "52", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "57", 
          "test preparation course": "completed", 
          "writing score": "56"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "87", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "84", 
          "test preparation course": "completed", 
          "writing score": "85"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "70", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group D", 
          "reading score": "71", 
          "test preparation course": "completed", 
          "writing score": "74"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "84", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "83", 
          "test preparation course": "completed", 
          "writing score": "78"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "71", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "66", 
          "test preparation course": "none", 
          "writing score": "60"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "63", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "67", 
          "test preparation course": "completed", 
          "writing score": "67"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "51", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "72", 
          "test preparation course": "completed", 
          "writing score": "79"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "84", 
          "parental level of education": "high school", 
          "race/ethnicity": "group E", 
          "reading score": "73", 
          "test preparation course": "none", 
          "writing score": "69"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "71", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "74", 
          "test preparation course": "completed", 
          "writing score": "68"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "74", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "73", 
          "test preparation course": "none", 
          "writing score": "67"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "68", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "59", 
          "test preparation course": "none", 
          "writing score": "62"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "57", 
          "parental level of education": "high school", 
          "race/ethnicity": "group E", 
          "reading score": "56", 
          "test preparation course": "completed", 
          "writing score": "54"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "82", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "93", 
          "test preparation course": "completed", 
          "writing score": "93"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "57", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "58", 
          "test preparation course": "completed", 
          "writing score": "64"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "47", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group D", 
          "reading score": "58", 
          "test preparation course": "completed", 
          "writing score": "67"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "59", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group A", 
          "reading score": "85", 
          "test preparation course": "completed", 
          "writing score": "80"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "41", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "39", 
          "test preparation course": "none", 
          "writing score": "34"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "62", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "67", 
          "test preparation course": "none", 
          "writing score": "62"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "86", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "83", 
          "test preparation course": "none", 
          "writing score": "86"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "69", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "71", 
          "test preparation course": "none", 
          "writing score": "65"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "65", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group A", 
          "reading score": "59", 
          "test preparation course": "none", 
          "writing score": "53"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "68", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "63", 
          "test preparation course": "none", 
          "writing score": "54"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "64", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "66", 
          "test preparation course": "none", 
          "writing score": "59"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "61", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "70"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "61", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "56", 
          "test preparation course": "none", 
          "writing score": "55"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "47", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group A", 
          "reading score": "59", 
          "test preparation course": "none", 
          "writing score": "50"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "73", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "66", 
          "test preparation course": "none", 
          "writing score": "66"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "50", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "48", 
          "test preparation course": "completed", 
          "writing score": "53"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "75", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "68", 
          "test preparation course": "none", 
          "writing score": "64"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "75", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "66", 
          "test preparation course": "none", 
          "writing score": "73"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "70", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "56", 
          "test preparation course": "none", 
          "writing score": "51"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "89", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "88", 
          "test preparation course": "completed", 
          "writing score": "82"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "67", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "81", 
          "test preparation course": "completed", 
          "writing score": "79"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "78", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "81", 
          "test preparation course": "none", 
          "writing score": "80"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "59", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group A", 
          "reading score": "73", 
          "test preparation course": "none", 
          "writing score": "69"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "73", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "83", 
          "test preparation course": "none", 
          "writing score": "76"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "79", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group A", 
          "reading score": "82", 
          "test preparation course": "none", 
          "writing score": "73"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "67", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "74", 
          "test preparation course": "completed", 
          "writing score": "77"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "69", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "66", 
          "test preparation course": "none", 
          "writing score": "60"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "86", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "81", 
          "test preparation course": "completed", 
          "writing score": "80"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "47", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "46", 
          "test preparation course": "none", 
          "writing score": "42"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "81", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "73", 
          "test preparation course": "none", 
          "writing score": "72"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "64", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "85", 
          "test preparation course": "completed", 
          "writing score": "85"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "100", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "92", 
          "test preparation course": "none", 
          "writing score": "97"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "65", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "77", 
          "test preparation course": "none", 
          "writing score": "74"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "65", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "58", 
          "test preparation course": "none", 
          "writing score": "49"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "53", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "61", 
          "test preparation course": "none", 
          "writing score": "62"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "37", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "56", 
          "test preparation course": "none", 
          "writing score": "47"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "79", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "89", 
          "test preparation course": "none", 
          "writing score": "89"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "53", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "54", 
          "test preparation course": "none", 
          "writing score": "48"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "100", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group E", 
          "reading score": "100", 
          "test preparation course": "none", 
          "writing score": "100"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "72", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "65", 
          "test preparation course": "completed", 
          "writing score": "68"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "53", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "58", 
          "test preparation course": "none", 
          "writing score": "55"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "54", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "54", 
          "test preparation course": "none", 
          "writing score": "45"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "71", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "70", 
          "test preparation course": "none", 
          "writing score": "76"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "77", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "90", 
          "test preparation course": "none", 
          "writing score": "91"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "75", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group A", 
          "reading score": "58", 
          "test preparation course": "completed", 
          "writing score": "62"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "84", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "87", 
          "test preparation course": "none", 
          "writing score": "91"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "26", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "31", 
          "test preparation course": "none", 
          "writing score": "38"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "72", 
          "parental level of education": "high school", 
          "race/ethnicity": "group A", 
          "reading score": "67", 
          "test preparation course": "completed", 
          "writing score": "65"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "77", 
          "parental level of education": "high school", 
          "race/ethnicity": "group A", 
          "reading score": "88", 
          "test preparation course": "completed", 
          "writing score": "85"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "91", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "74", 
          "test preparation course": "none", 
          "writing score": "76"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "83", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "85", 
          "test preparation course": "completed", 
          "writing score": "90"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "63", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "69", 
          "test preparation course": "none", 
          "writing score": "74"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "68", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "86", 
          "test preparation course": "completed", 
          "writing score": "84"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "59", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "67", 
          "test preparation course": "none", 
          "writing score": "61"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "90", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "90", 
          "test preparation course": "completed", 
          "writing score": "91"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "71", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "76", 
          "test preparation course": "completed", 
          "writing score": "83"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "76", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group E", 
          "reading score": "62", 
          "test preparation course": "completed", 
          "writing score": "66"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "80", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "68", 
          "test preparation course": "none", 
          "writing score": "72"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "55", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group D", 
          "reading score": "64", 
          "test preparation course": "none", 
          "writing score": "70"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "76", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "71", 
          "test preparation course": "none", 
          "writing score": "67"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "73", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "71", 
          "test preparation course": "completed", 
          "writing score": "68"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "52", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "59", 
          "test preparation course": "none", 
          "writing score": "56"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "68", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "68", 
          "test preparation course": "none", 
          "writing score": "61"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "59", 
          "parental level of education": "high school", 
          "race/ethnicity": "group A", 
          "reading score": "52", 
          "test preparation course": "none", 
          "writing score": "46"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "49", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "52", 
          "test preparation course": "none", 
          "writing score": "54"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "70", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "74", 
          "test preparation course": "none", 
          "writing score": "71"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "61", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "47", 
          "test preparation course": "none", 
          "writing score": "56"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "60", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "75", 
          "test preparation course": "none", 
          "writing score": "74"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "64", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "53", 
          "test preparation course": "completed", 
          "writing score": "57"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "79", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group A", 
          "reading score": "82", 
          "test preparation course": "completed", 
          "writing score": "82"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "65", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group A", 
          "reading score": "85", 
          "test preparation course": "none", 
          "writing score": "76"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "64", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "64", 
          "test preparation course": "none", 
          "writing score": "70"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "83", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "83", 
          "test preparation course": "none", 
          "writing score": "90"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "81", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "88", 
          "test preparation course": "none", 
          "writing score": "90"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "54", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "64", 
          "test preparation course": "none", 
          "writing score": "68"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "68", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "64", 
          "test preparation course": "completed", 
          "writing score": "66"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "54", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "48", 
          "test preparation course": "none", 
          "writing score": "52"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "59", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "78", 
          "test preparation course": "completed", 
          "writing score": "76"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "66", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "69", 
          "test preparation course": "none", 
          "writing score": "68"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "76", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "71", 
          "test preparation course": "none", 
          "writing score": "72"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "74", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group D", 
          "reading score": "79", 
          "test preparation course": "none", 
          "writing score": "82"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "94", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "87", 
          "test preparation course": "completed", 
          "writing score": "92"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "63", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "61", 
          "test preparation course": "none", 
          "writing score": "54"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "95", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "89", 
          "test preparation course": "completed", 
          "writing score": "92"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "40", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group D", 
          "reading score": "59", 
          "test preparation course": "none", 
          "writing score": "54"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "82", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "82", 
          "test preparation course": "none", 
          "writing score": "80"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "68", 
          "parental level of education": "high school", 
          "race/ethnicity": "group A", 
          "reading score": "70", 
          "test preparation course": "none", 
          "writing score": "66"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "55", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group B", 
          "reading score": "59", 
          "test preparation course": "none", 
          "writing score": "54"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "79", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group C", 
          "reading score": "78", 
          "test preparation course": "none", 
          "writing score": "77"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "86", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "92", 
          "test preparation course": "none", 
          "writing score": "87"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "76", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "71", 
          "test preparation course": "none", 
          "writing score": "73"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "64", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group A", 
          "reading score": "50", 
          "test preparation course": "none", 
          "writing score": "43"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "62", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "49", 
          "test preparation course": "none", 
          "writing score": "52"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "54", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "61", 
          "test preparation course": "completed", 
          "writing score": "62"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "77", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group B", 
          "reading score": "97", 
          "test preparation course": "completed", 
          "writing score": "94"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "76", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "87", 
          "test preparation course": "completed", 
          "writing score": "85"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "74", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "89", 
          "test preparation course": "none", 
          "writing score": "84"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "66", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "74", 
          "test preparation course": "completed", 
          "writing score": "73"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "66", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "78", 
          "test preparation course": "completed", 
          "writing score": "78"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "67", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "78", 
          "test preparation course": "completed", 
          "writing score": "79"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "71", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "49", 
          "test preparation course": "none", 
          "writing score": "52"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "91", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "86", 
          "test preparation course": "none", 
          "writing score": "84"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "58", 
          "test preparation course": "none", 
          "writing score": "57"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "54", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group C", 
          "reading score": "59", 
          "test preparation course": "none", 
          "writing score": "50"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "53", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "52", 
          "test preparation course": "completed", 
          "writing score": "49"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "68", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "60", 
          "test preparation course": "none", 
          "writing score": "59"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "56", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "61", 
          "test preparation course": "completed", 
          "writing score": "60"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "36", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "53", 
          "test preparation course": "none", 
          "writing score": "43"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "29", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "41", 
          "test preparation course": "none", 
          "writing score": "47"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "62", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "74", 
          "test preparation course": "none", 
          "writing score": "70"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "68", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "67", 
          "test preparation course": "completed", 
          "writing score": "73"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "47", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "54", 
          "test preparation course": "none", 
          "writing score": "53"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "62", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "61", 
          "test preparation course": "completed", 
          "writing score": "58"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "79", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "88", 
          "test preparation course": "completed", 
          "writing score": "94"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "73", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "69", 
          "test preparation course": "completed", 
          "writing score": "68"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "66", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "83", 
          "test preparation course": "completed", 
          "writing score": "83"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "51", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "60", 
          "test preparation course": "completed", 
          "writing score": "58"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "51", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "66", 
          "test preparation course": "none", 
          "writing score": "62"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "85", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group E", 
          "reading score": "66", 
          "test preparation course": "completed", 
          "writing score": "71"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "97", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group A", 
          "reading score": "92", 
          "test preparation course": "completed", 
          "writing score": "86"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "75", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "69", 
          "test preparation course": "completed", 
          "writing score": "68"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "79", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "82", 
          "test preparation course": "completed", 
          "writing score": "80"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "81", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "77", 
          "test preparation course": "none", 
          "writing score": "79"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "82", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "95", 
          "test preparation course": "none", 
          "writing score": "89"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "64", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group D", 
          "reading score": "63", 
          "test preparation course": "none", 
          "writing score": "66"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "78", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group E", 
          "reading score": "83", 
          "test preparation course": "completed", 
          "writing score": "80"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "92", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group A", 
          "reading score": "100", 
          "test preparation course": "completed", 
          "writing score": "97"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "72", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "67", 
          "test preparation course": "completed", 
          "writing score": "64"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "62", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "67", 
          "test preparation course": "none", 
          "writing score": "64"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "79", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group C", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "69"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "79", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "76", 
          "test preparation course": "none", 
          "writing score": "65"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "87", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group B", 
          "reading score": "90", 
          "test preparation course": "completed", 
          "writing score": "88"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "40", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "48", 
          "test preparation course": "none", 
          "writing score": "50"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "77", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "62", 
          "test preparation course": "none", 
          "writing score": "64"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "53", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "45", 
          "test preparation course": "none", 
          "writing score": "40"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "32", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "39", 
          "test preparation course": "none", 
          "writing score": "33"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "55", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "72", 
          "test preparation course": "completed", 
          "writing score": "79"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "61", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group C", 
          "reading score": "67", 
          "test preparation course": "none", 
          "writing score": "66"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "53", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "70", 
          "test preparation course": "none", 
          "writing score": "70"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "73", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "66", 
          "test preparation course": "none", 
          "writing score": "62"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "74", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "75", 
          "test preparation course": "completed", 
          "writing score": "79"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "63", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "74", 
          "test preparation course": "none", 
          "writing score": "74"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "96", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "90", 
          "test preparation course": "completed", 
          "writing score": "92"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "63", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "80", 
          "test preparation course": "completed", 
          "writing score": "80"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "48", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group B", 
          "reading score": "51", 
          "test preparation course": "none", 
          "writing score": "46"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "48", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "43", 
          "test preparation course": "none", 
          "writing score": "45"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "92", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group E", 
          "reading score": "100", 
          "test preparation course": "completed", 
          "writing score": "100"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "61", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group D", 
          "reading score": "71", 
          "test preparation course": "completed", 
          "writing score": "78"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "63", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "48", 
          "test preparation course": "none", 
          "writing score": "47"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "68", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "68", 
          "test preparation course": "none", 
          "writing score": "67"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "71", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "75", 
          "test preparation course": "completed", 
          "writing score": "70"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "91", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group A", 
          "reading score": "96", 
          "test preparation course": "none", 
          "writing score": "92"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "53", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "62", 
          "test preparation course": "none", 
          "writing score": "56"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "50", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "66", 
          "test preparation course": "completed", 
          "writing score": "64"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "74", 
          "parental level of education": "high school", 
          "race/ethnicity": "group E", 
          "reading score": "81", 
          "test preparation course": "none", 
          "writing score": "71"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "40", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group A", 
          "reading score": "55", 
          "test preparation course": "completed", 
          "writing score": "53"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "61", 
          "parental level of education": "some college", 
          "race/ethnicity": "group A", 
          "reading score": "51", 
          "test preparation course": "completed", 
          "writing score": "52"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "81", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "91", 
          "test preparation course": "none", 
          "writing score": "89"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "48", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "56", 
          "test preparation course": "completed", 
          "writing score": "58"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "53", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group D", 
          "reading score": "61", 
          "test preparation course": "none", 
          "writing score": "68"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "81", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "97", 
          "test preparation course": "none", 
          "writing score": "96"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "77", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group E", 
          "reading score": "79", 
          "test preparation course": "none", 
          "writing score": "80"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "63", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "73", 
          "test preparation course": "none", 
          "writing score": "78"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "73", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "75", 
          "test preparation course": "completed", 
          "writing score": "80"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "77", 
          "test preparation course": "none", 
          "writing score": "77"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "65", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "76", 
          "test preparation course": "none", 
          "writing score": "76"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "55", 
          "parental level of education": "high school", 
          "race/ethnicity": "group A", 
          "reading score": "73", 
          "test preparation course": "none", 
          "writing score": "73"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "44", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "63", 
          "test preparation course": "none", 
          "writing score": "62"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "54", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "64", 
          "test preparation course": "none", 
          "writing score": "65"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "48", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group A", 
          "reading score": "66", 
          "test preparation course": "none", 
          "writing score": "65"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "58", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "57", 
          "test preparation course": "none", 
          "writing score": "54"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "71", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group A", 
          "reading score": "62", 
          "test preparation course": "none", 
          "writing score": "50"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "68", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group E", 
          "reading score": "68", 
          "test preparation course": "none", 
          "writing score": "64"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "74", 
          "parental level of education": "high school", 
          "race/ethnicity": "group E", 
          "reading score": "76", 
          "test preparation course": "none", 
          "writing score": "73"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "92", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "100", 
          "test preparation course": "completed", 
          "writing score": "99"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "56", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "79", 
          "test preparation course": "completed", 
          "writing score": "72"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "30", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "24", 
          "test preparation course": "none", 
          "writing score": "15"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "53", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group A", 
          "reading score": "54", 
          "test preparation course": "none", 
          "writing score": "48"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "77", 
          "test preparation course": "none", 
          "writing score": "73"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "65", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "82", 
          "test preparation course": "none", 
          "writing score": "81"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "54", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group D", 
          "reading score": "60", 
          "test preparation course": "none", 
          "writing score": "63"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "29", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "29", 
          "test preparation course": "none", 
          "writing score": "30"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "76", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "78", 
          "test preparation course": "none", 
          "writing score": "80"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "60", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "57", 
          "test preparation course": "none", 
          "writing score": "51"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "84", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group D", 
          "reading score": "89", 
          "test preparation course": "completed", 
          "writing score": "90"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "75", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "62"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "85", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "84", 
          "test preparation course": "none", 
          "writing score": "82"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "40", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group C", 
          "reading score": "58", 
          "test preparation course": "none", 
          "writing score": "54"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "61", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "64", 
          "test preparation course": "none", 
          "writing score": "62"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "58", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "63", 
          "test preparation course": "none", 
          "writing score": "65"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "69", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "60", 
          "test preparation course": "completed", 
          "writing score": "63"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "58", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "59", 
          "test preparation course": "none", 
          "writing score": "66"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "94", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "90", 
          "test preparation course": "completed", 
          "writing score": "91"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "65", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "77", 
          "test preparation course": "none", 
          "writing score": "74"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "82", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group A", 
          "reading score": "93", 
          "test preparation course": "none", 
          "writing score": "93"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "60", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "68", 
          "test preparation course": "none", 
          "writing score": "72"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "37", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group E", 
          "reading score": "45", 
          "test preparation course": "none", 
          "writing score": "38"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "88", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "78", 
          "test preparation course": "none", 
          "writing score": "83"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "95", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group D", 
          "reading score": "81", 
          "test preparation course": "none", 
          "writing score": "84"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "65", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "73", 
          "test preparation course": "completed", 
          "writing score": "68"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "35", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "61", 
          "test preparation course": "none", 
          "writing score": "54"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "62", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group B", 
          "reading score": "63", 
          "test preparation course": "none", 
          "writing score": "56"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "58", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "51", 
          "test preparation course": "completed", 
          "writing score": "52"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "100", 
          "parental level of education": "some college", 
          "race/ethnicity": "group A", 
          "reading score": "96", 
          "test preparation course": "completed", 
          "writing score": "86"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "61", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group E", 
          "reading score": "58", 
          "test preparation course": "none", 
          "writing score": "62"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "100", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "97", 
          "test preparation course": "completed", 
          "writing score": "99"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "69", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "70", 
          "test preparation course": "completed", 
          "writing score": "63"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "61", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "48", 
          "test preparation course": "none", 
          "writing score": "46"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "49", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "57", 
          "test preparation course": "none", 
          "writing score": "46"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "44", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "51", 
          "test preparation course": "completed", 
          "writing score": "55"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "67", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "64", 
          "test preparation course": "none", 
          "writing score": "70"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "79", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "60", 
          "test preparation course": "none", 
          "writing score": "65"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "66", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group B", 
          "reading score": "74", 
          "test preparation course": "completed", 
          "writing score": "81"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "75", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "88", 
          "test preparation course": "none", 
          "writing score": "85"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "84", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "84", 
          "test preparation course": "none", 
          "writing score": "80"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "71", 
          "parental level of education": "high school", 
          "race/ethnicity": "group A", 
          "reading score": "74", 
          "test preparation course": "none", 
          "writing score": "64"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "67", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "80", 
          "test preparation course": "completed", 
          "writing score": "81"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "80", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "92", 
          "test preparation course": "completed", 
          "writing score": "88"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "86", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "76", 
          "test preparation course": "none", 
          "writing score": "74"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "76", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "74", 
          "test preparation course": "none", 
          "writing score": "73"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "41", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "52", 
          "test preparation course": "none", 
          "writing score": "51"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "74", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "88", 
          "test preparation course": "completed", 
          "writing score": "90"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "72", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "81", 
          "test preparation course": "none", 
          "writing score": "79"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "74", 
          "parental level of education": "high school", 
          "race/ethnicity": "group E", 
          "reading score": "79", 
          "test preparation course": "completed", 
          "writing score": "80"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "70", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "65", 
          "test preparation course": "none", 
          "writing score": "60"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "65", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group B", 
          "reading score": "81", 
          "test preparation course": "completed", 
          "writing score": "81"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "59", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "70", 
          "test preparation course": "none", 
          "writing score": "65"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "64", 
          "parental level of education": "high school", 
          "race/ethnicity": "group E", 
          "reading score": "62", 
          "test preparation course": "none", 
          "writing score": "68"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "50", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "53", 
          "test preparation course": "none", 
          "writing score": "55"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "79", 
          "test preparation course": "completed", 
          "writing score": "81"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "51", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "56", 
          "test preparation course": "completed", 
          "writing score": "53"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "68", 
          "parental level of education": "high school", 
          "race/ethnicity": "group A", 
          "reading score": "80", 
          "test preparation course": "completed", 
          "writing score": "76"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "85", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "86", 
          "test preparation course": "completed", 
          "writing score": "98"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "65", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group A", 
          "reading score": "70", 
          "test preparation course": "completed", 
          "writing score": "74"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "73", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "79", 
          "test preparation course": "none", 
          "writing score": "79"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "62", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "67", 
          "test preparation course": "none", 
          "writing score": "67"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "77", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "67", 
          "test preparation course": "none", 
          "writing score": "64"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "66", 
          "test preparation course": "none", 
          "writing score": "61"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "43", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "60", 
          "test preparation course": "none", 
          "writing score": "58"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "90", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "87", 
          "test preparation course": "none", 
          "writing score": "85"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "74", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "77", 
          "test preparation course": "none", 
          "writing score": "73"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "73", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "66", 
          "test preparation course": "none", 
          "writing score": "63"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "55", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "71", 
          "test preparation course": "none", 
          "writing score": "69"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "65", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "69", 
          "test preparation course": "none", 
          "writing score": "67"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "80", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "63", 
          "test preparation course": "none", 
          "writing score": "63"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "50", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "60", 
          "test preparation course": "completed", 
          "writing score": "60"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "63", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "73", 
          "test preparation course": "completed", 
          "writing score": "71"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "77", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group B", 
          "reading score": "85", 
          "test preparation course": "none", 
          "writing score": "87"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "73", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "74", 
          "test preparation course": "none", 
          "writing score": "61"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "81", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "72", 
          "test preparation course": "completed", 
          "writing score": "77"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "66", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "76", 
          "test preparation course": "none", 
          "writing score": "68"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "52", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "57", 
          "test preparation course": "none", 
          "writing score": "50"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "78", 
          "test preparation course": "none", 
          "writing score": "76"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "65", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "84", 
          "test preparation course": "completed", 
          "writing score": "84"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "77", 
          "test preparation course": "completed", 
          "writing score": "78"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "50", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "64", 
          "test preparation course": "completed", 
          "writing score": "66"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "73", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "78", 
          "test preparation course": "completed", 
          "writing score": "76"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "70", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "82", 
          "test preparation course": "completed", 
          "writing score": "76"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "81", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "75", 
          "test preparation course": "none", 
          "writing score": "78"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "63", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "61", 
          "test preparation course": "none", 
          "writing score": "60"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "67", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "74"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "60", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "68", 
          "test preparation course": "none", 
          "writing score": "60"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "62", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "55", 
          "test preparation course": "none", 
          "writing score": "54"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "29", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "40", 
          "test preparation course": "completed", 
          "writing score": "44"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "62", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "66", 
          "test preparation course": "completed", 
          "writing score": "68"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "94", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group E", 
          "reading score": "99", 
          "test preparation course": "completed", 
          "writing score": "100"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "85", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "75", 
          "test preparation course": "completed", 
          "writing score": "68"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "77", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "78", 
          "test preparation course": "none", 
          "writing score": "73"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "53", 
          "parental level of education": "high school", 
          "race/ethnicity": "group A", 
          "reading score": "58", 
          "test preparation course": "none", 
          "writing score": "44"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "93", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "90", 
          "test preparation course": "none", 
          "writing score": "83"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "49", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "53", 
          "test preparation course": "none", 
          "writing score": "53"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "73", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "76", 
          "test preparation course": "none", 
          "writing score": "78"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "66", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "74", 
          "test preparation course": "completed", 
          "writing score": "81"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "77", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "77", 
          "test preparation course": "none", 
          "writing score": "73"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "49", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "63", 
          "test preparation course": "none", 
          "writing score": "56"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "79", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "89", 
          "test preparation course": "none", 
          "writing score": "86"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "75", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "82", 
          "test preparation course": "completed", 
          "writing score": "90"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "59", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group A", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "70"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "57", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "78", 
          "test preparation course": "completed", 
          "writing score": "79"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "66", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "66", 
          "test preparation course": "none", 
          "writing score": "59"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "79", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group E", 
          "reading score": "81", 
          "test preparation course": "completed", 
          "writing score": "82"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "57", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "67", 
          "test preparation course": "none", 
          "writing score": "72"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "87", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group A", 
          "reading score": "84", 
          "test preparation course": "completed", 
          "writing score": "87"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "63", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "64", 
          "test preparation course": "none", 
          "writing score": "67"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "59", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "63", 
          "test preparation course": "completed", 
          "writing score": "64"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "62", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group A", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "65"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "46", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "34", 
          "test preparation course": "none", 
          "writing score": "36"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "66", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "59", 
          "test preparation course": "none", 
          "writing score": "52"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "89", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "87", 
          "test preparation course": "none", 
          "writing score": "79"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "42", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "61", 
          "test preparation course": "completed", 
          "writing score": "58"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "93", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "84", 
          "test preparation course": "completed", 
          "writing score": "90"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "80", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group E", 
          "reading score": "85", 
          "test preparation course": "completed", 
          "writing score": "85"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "98", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "100", 
          "test preparation course": "none", 
          "writing score": "99"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "81", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group D", 
          "reading score": "81", 
          "test preparation course": "none", 
          "writing score": "84"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "60", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "70", 
          "test preparation course": "completed", 
          "writing score": "74"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "76", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "94", 
          "test preparation course": "completed", 
          "writing score": "87"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "73", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "78", 
          "test preparation course": "completed", 
          "writing score": "72"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "96", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "96", 
          "test preparation course": "completed", 
          "writing score": "99"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "76", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "76", 
          "test preparation course": "none", 
          "writing score": "74"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "91", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "73", 
          "test preparation course": "completed", 
          "writing score": "80"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "62", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "70"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "55", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "59", 
          "test preparation course": "completed", 
          "writing score": "59"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "74", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "90", 
          "test preparation course": "completed", 
          "writing score": "88"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "50", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "48", 
          "test preparation course": "none", 
          "writing score": "42"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "47", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "43", 
          "test preparation course": "none", 
          "writing score": "41"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "81", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "74", 
          "test preparation course": "completed", 
          "writing score": "71"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "65", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "75", 
          "test preparation course": "completed", 
          "writing score": "77"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "68", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group E", 
          "reading score": "51", 
          "test preparation course": "completed", 
          "writing score": "57"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "73", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "92", 
          "test preparation course": "none", 
          "writing score": "84"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "53", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "39", 
          "test preparation course": "none", 
          "writing score": "37"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "68", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "77", 
          "test preparation course": "completed", 
          "writing score": "80"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "55", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group A", 
          "reading score": "46", 
          "test preparation course": "none", 
          "writing score": "43"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "87", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "89", 
          "test preparation course": "completed", 
          "writing score": "94"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "55", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "47", 
          "test preparation course": "none", 
          "writing score": "44"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "53", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "58", 
          "test preparation course": "none", 
          "writing score": "57"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "67", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group C", 
          "reading score": "57", 
          "test preparation course": "none", 
          "writing score": "59"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "92", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "79", 
          "test preparation course": "none", 
          "writing score": "84"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "53", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "66", 
          "test preparation course": "completed", 
          "writing score": "73"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "81", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "71", 
          "test preparation course": "none", 
          "writing score": "73"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "61", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "60", 
          "test preparation course": "none", 
          "writing score": "55"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "80", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "73", 
          "test preparation course": "none", 
          "writing score": "72"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "37", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group A", 
          "reading score": "57", 
          "test preparation course": "none", 
          "writing score": "56"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "81", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "84", 
          "test preparation course": "none", 
          "writing score": "82"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "59", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "73", 
          "test preparation course": "completed", 
          "writing score": "72"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "55", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "55", 
          "test preparation course": "none", 
          "writing score": "47"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "72", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "79", 
          "test preparation course": "none", 
          "writing score": "74"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "75", 
          "test preparation course": "none", 
          "writing score": "71"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "64", 
          "test preparation course": "none", 
          "writing score": "68"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "50", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "60", 
          "test preparation course": "none", 
          "writing score": "59"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "87", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "84", 
          "test preparation course": "completed", 
          "writing score": "86"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "71", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "69", 
          "test preparation course": "completed", 
          "writing score": "68"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "68", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "65"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "79", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group C", 
          "reading score": "77", 
          "test preparation course": "completed", 
          "writing score": "75"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "77", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "90", 
          "test preparation course": "completed", 
          "writing score": "85"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "58", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "55", 
          "test preparation course": "none", 
          "writing score": "53"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "84", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "95", 
          "test preparation course": "none", 
          "writing score": "92"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "55", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "58", 
          "test preparation course": "none", 
          "writing score": "52"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "70", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group E", 
          "reading score": "68", 
          "test preparation course": "completed", 
          "writing score": "72"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "52", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "59", 
          "test preparation course": "completed", 
          "writing score": "65"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "77", 
          "test preparation course": "completed", 
          "writing score": "77"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "53", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "64"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "48", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "58", 
          "test preparation course": "none", 
          "writing score": "54"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "78", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "81", 
          "test preparation course": "completed", 
          "writing score": "86"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "62", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "62", 
          "test preparation course": "none", 
          "writing score": "63"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "60", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "63", 
          "test preparation course": "none", 
          "writing score": "59"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "74", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "72"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "58", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "75", 
          "test preparation course": "completed", 
          "writing score": "77"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "76", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "62", 
          "test preparation course": "completed", 
          "writing score": "60"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "68", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "71", 
          "test preparation course": "none", 
          "writing score": "75"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "58", 
          "parental level of education": "some college", 
          "race/ethnicity": "group A", 
          "reading score": "60", 
          "test preparation course": "none", 
          "writing score": "57"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "52", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "48", 
          "test preparation course": "none", 
          "writing score": "49"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "75", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "73", 
          "test preparation course": "none", 
          "writing score": "74"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "52", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "67", 
          "test preparation course": "completed", 
          "writing score": "72"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "62", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "78", 
          "test preparation course": "none", 
          "writing score": "79"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "66", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "65", 
          "test preparation course": "none", 
          "writing score": "60"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "49", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "58", 
          "test preparation course": "none", 
          "writing score": "55"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "66", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "70"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "35", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "44", 
          "test preparation course": "none", 
          "writing score": "43"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "72", 
          "parental level of education": "some college", 
          "race/ethnicity": "group A", 
          "reading score": "79", 
          "test preparation course": "completed", 
          "writing score": "82"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "94", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "85", 
          "test preparation course": "completed", 
          "writing score": "82"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "46", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "56", 
          "test preparation course": "none", 
          "writing score": "57"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "77", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group B", 
          "reading score": "90", 
          "test preparation course": "none", 
          "writing score": "84"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "76", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "85", 
          "test preparation course": "completed", 
          "writing score": "82"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "52", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "59", 
          "test preparation course": "completed", 
          "writing score": "62"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "91", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "81", 
          "test preparation course": "completed", 
          "writing score": "79"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "32", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "51", 
          "test preparation course": "completed", 
          "writing score": "44"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "72", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group E", 
          "reading score": "79", 
          "test preparation course": "none", 
          "writing score": "77"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "19", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "38", 
          "test preparation course": "none", 
          "writing score": "32"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "68", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "65", 
          "test preparation course": "none", 
          "writing score": "61"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "52", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group C", 
          "reading score": "65", 
          "test preparation course": "none", 
          "writing score": "61"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "48", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "62", 
          "test preparation course": "none", 
          "writing score": "60"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "60", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "66", 
          "test preparation course": "none", 
          "writing score": "70"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "66", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "74", 
          "test preparation course": "none", 
          "writing score": "69"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "89", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group E", 
          "reading score": "84", 
          "test preparation course": "completed", 
          "writing score": "77"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "42", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "52", 
          "test preparation course": "none", 
          "writing score": "51"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "57", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "68", 
          "test preparation course": "completed", 
          "writing score": "73"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "70", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "70", 
          "test preparation course": "none", 
          "writing score": "70"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "70", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "84", 
          "test preparation course": "none", 
          "writing score": "81"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "60", 
          "test preparation course": "none", 
          "writing score": "54"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "52", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "55", 
          "test preparation course": "none", 
          "writing score": "57"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "67", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "73", 
          "test preparation course": "completed", 
          "writing score": "68"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "76", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "80", 
          "test preparation course": "completed", 
          "writing score": "73"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "87", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "94", 
          "test preparation course": "none", 
          "writing score": "95"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "82", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "85", 
          "test preparation course": "none", 
          "writing score": "87"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "73", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "76", 
          "test preparation course": "none", 
          "writing score": "78"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "75", 
          "parental level of education": "some college", 
          "race/ethnicity": "group A", 
          "reading score": "81", 
          "test preparation course": "none", 
          "writing score": "74"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "64", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "74", 
          "test preparation course": "none", 
          "writing score": "75"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "41", 
          "parental level of education": "high school", 
          "race/ethnicity": "group E", 
          "reading score": "45", 
          "test preparation course": "none", 
          "writing score": "40"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "90", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "75", 
          "test preparation course": "none", 
          "writing score": "69"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "59", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group B", 
          "reading score": "54", 
          "test preparation course": "none", 
          "writing score": "51"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "51", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group A", 
          "reading score": "31", 
          "test preparation course": "none", 
          "writing score": "36"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "45", 
          "parental level of education": "high school", 
          "race/ethnicity": "group A", 
          "reading score": "47", 
          "test preparation course": "none", 
          "writing score": "49"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "54", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group C", 
          "reading score": "64", 
          "test preparation course": "completed", 
          "writing score": "67"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "87", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group E", 
          "reading score": "84", 
          "test preparation course": "completed", 
          "writing score": "76"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "72", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "80", 
          "test preparation course": "none", 
          "writing score": "83"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "94", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "86", 
          "test preparation course": "completed", 
          "writing score": "87"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "45", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group A", 
          "reading score": "59", 
          "test preparation course": "none", 
          "writing score": "64"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "61", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "70", 
          "test preparation course": "completed", 
          "writing score": "76"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "60", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "68"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "77", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "91", 
          "test preparation course": "none", 
          "writing score": "88"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "85", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group A", 
          "reading score": "90", 
          "test preparation course": "completed", 
          "writing score": "92"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "78", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "90", 
          "test preparation course": "none", 
          "writing score": "93"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "49", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "52", 
          "test preparation course": "completed", 
          "writing score": "51"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "71", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "87", 
          "test preparation course": "none", 
          "writing score": "82"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "48", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "58", 
          "test preparation course": "none", 
          "writing score": "52"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "62", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "67", 
          "test preparation course": "none", 
          "writing score": "58"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "56", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "68", 
          "test preparation course": "completed", 
          "writing score": "70"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "65", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "69", 
          "test preparation course": "none", 
          "writing score": "76"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "69", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "86", 
          "test preparation course": "completed", 
          "writing score": "81"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "68", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "54", 
          "test preparation course": "none", 
          "writing score": "53"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "61", 
          "parental level of education": "some college", 
          "race/ethnicity": "group A", 
          "reading score": "60", 
          "test preparation course": "none", 
          "writing score": "57"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "74", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "86", 
          "test preparation course": "completed", 
          "writing score": "89"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "64", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group A", 
          "reading score": "60", 
          "test preparation course": "none", 
          "writing score": "58"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "77", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "82", 
          "test preparation course": "completed", 
          "writing score": "89"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "58", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "50", 
          "test preparation course": "none", 
          "writing score": "45"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "60", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "64", 
          "test preparation course": "completed", 
          "writing score": "74"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "73", 
          "parental level of education": "high school", 
          "race/ethnicity": "group E", 
          "reading score": "64", 
          "test preparation course": "none", 
          "writing score": "57"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "75", 
          "parental level of education": "high school", 
          "race/ethnicity": "group A", 
          "reading score": "82", 
          "test preparation course": "completed", 
          "writing score": "79"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "58", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "57", 
          "test preparation course": "completed", 
          "writing score": "53"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "66", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "77", 
          "test preparation course": "none", 
          "writing score": "73"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "39", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "52", 
          "test preparation course": "none", 
          "writing score": "46"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "64", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "58", 
          "test preparation course": "none", 
          "writing score": "51"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "23", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "44", 
          "test preparation course": "completed", 
          "writing score": "36"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "74", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "77", 
          "test preparation course": "completed", 
          "writing score": "76"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "40", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "65", 
          "test preparation course": "completed", 
          "writing score": "64"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "90", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group E", 
          "reading score": "85", 
          "test preparation course": "none", 
          "writing score": "84"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "91", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group C", 
          "reading score": "85", 
          "test preparation course": "completed", 
          "writing score": "85"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "64", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "54", 
          "test preparation course": "none", 
          "writing score": "50"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "59", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "68"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "80", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "75", 
          "test preparation course": "none", 
          "writing score": "69"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "71", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group C", 
          "reading score": "67", 
          "test preparation course": "none", 
          "writing score": "67"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "61", 
          "parental level of education": "high school", 
          "race/ethnicity": "group A", 
          "reading score": "68", 
          "test preparation course": "none", 
          "writing score": "63"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "87", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "85", 
          "test preparation course": "none", 
          "writing score": "93"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "82", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group E", 
          "reading score": "67", 
          "test preparation course": "none", 
          "writing score": "61"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "62", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "64", 
          "test preparation course": "none", 
          "writing score": "55"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "97", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group B", 
          "reading score": "97", 
          "test preparation course": "none", 
          "writing score": "96"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "75", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "68", 
          "test preparation course": "none", 
          "writing score": "65"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "65", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "79", 
          "test preparation course": "none", 
          "writing score": "81"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "52", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "49", 
          "test preparation course": "completed", 
          "writing score": "46"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "87", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "73", 
          "test preparation course": "none", 
          "writing score": "72"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "53", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "62", 
          "test preparation course": "none", 
          "writing score": "53"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "81", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group E", 
          "reading score": "86", 
          "test preparation course": "none", 
          "writing score": "87"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "39", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "42", 
          "test preparation course": "completed", 
          "writing score": "38"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "71", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "71", 
          "test preparation course": "completed", 
          "writing score": "80"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "97", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "93", 
          "test preparation course": "none", 
          "writing score": "91"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "82", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "82", 
          "test preparation course": "completed", 
          "writing score": "88"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "59", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "53", 
          "test preparation course": "none", 
          "writing score": "52"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "61", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "42", 
          "test preparation course": "none", 
          "writing score": "41"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "78", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "74", 
          "test preparation course": "completed", 
          "writing score": "72"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "49", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "51", 
          "test preparation course": "none", 
          "writing score": "51"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "59", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "58", 
          "test preparation course": "none", 
          "writing score": "47"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "70", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "72", 
          "test preparation course": "completed", 
          "writing score": "76"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "82", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "84", 
          "test preparation course": "completed", 
          "writing score": "78"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "90", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "90", 
          "test preparation course": "none", 
          "writing score": "82"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "43", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "62", 
          "test preparation course": "none", 
          "writing score": "61"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "80", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "64", 
          "test preparation course": "none", 
          "writing score": "66"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "81", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "82", 
          "test preparation course": "none", 
          "writing score": "84"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "57", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "61", 
          "test preparation course": "none", 
          "writing score": "54"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "59", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "80"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "64", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "76", 
          "test preparation course": "none", 
          "writing score": "74"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "63", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "64", 
          "test preparation course": "completed", 
          "writing score": "66"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "71", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group E", 
          "reading score": "70", 
          "test preparation course": "completed", 
          "writing score": "70"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "64", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "73", 
          "test preparation course": "none", 
          "writing score": "71"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "55", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "46", 
          "test preparation course": "none", 
          "writing score": "44"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "51", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "51", 
          "test preparation course": "none", 
          "writing score": "54"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "62", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "76", 
          "test preparation course": "completed", 
          "writing score": "80"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "93", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "100", 
          "test preparation course": "completed", 
          "writing score": "95"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "54", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "59"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "69", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "65", 
          "test preparation course": "none", 
          "writing score": "74"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "44", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "51", 
          "test preparation course": "none", 
          "writing score": "48"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "86", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "85", 
          "test preparation course": "completed", 
          "writing score": "91"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "85", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "92", 
          "test preparation course": "none", 
          "writing score": "85"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "50", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group A", 
          "reading score": "67", 
          "test preparation course": "none", 
          "writing score": "73"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "88", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "74", 
          "test preparation course": "completed", 
          "writing score": "75"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "59", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "62", 
          "test preparation course": "none", 
          "writing score": "69"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "32", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group E", 
          "reading score": "34", 
          "test preparation course": "none", 
          "writing score": "38"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "36", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "29", 
          "test preparation course": "none", 
          "writing score": "27"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "63", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "78", 
          "test preparation course": "completed", 
          "writing score": "79"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "67", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "54", 
          "test preparation course": "completed", 
          "writing score": "63"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "65", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "78", 
          "test preparation course": "completed", 
          "writing score": "82"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "85", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group D", 
          "reading score": "84", 
          "test preparation course": "none", 
          "writing score": "89"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "73", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group C", 
          "reading score": "78", 
          "test preparation course": "none", 
          "writing score": "74"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "34", 
          "parental level of education": "high school", 
          "race/ethnicity": "group A", 
          "reading score": "48", 
          "test preparation course": "completed", 
          "writing score": "41"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "93", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "100", 
          "test preparation course": "completed", 
          "writing score": "100"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "67", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "84", 
          "test preparation course": "none", 
          "writing score": "84"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "88", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "77", 
          "test preparation course": "none", 
          "writing score": "77"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "57", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "48", 
          "test preparation course": "none", 
          "writing score": "51"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "79", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "84", 
          "test preparation course": "completed", 
          "writing score": "91"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "67", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "75", 
          "test preparation course": "none", 
          "writing score": "72"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "70", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group E", 
          "reading score": "64", 
          "test preparation course": "completed", 
          "writing score": "70"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "50", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "42", 
          "test preparation course": "none", 
          "writing score": "48"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "69", 
          "parental level of education": "some college", 
          "race/ethnicity": "group A", 
          "reading score": "84", 
          "test preparation course": "none", 
          "writing score": "82"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "52", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "61", 
          "test preparation course": "completed", 
          "writing score": "66"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "47", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "62", 
          "test preparation course": "completed", 
          "writing score": "66"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "46", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "61", 
          "test preparation course": "none", 
          "writing score": "55"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "68", 
          "parental level of education": "some college", 
          "race/ethnicity": "group E", 
          "reading score": "70", 
          "test preparation course": "none", 
          "writing score": "66"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "100", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group E", 
          "reading score": "100", 
          "test preparation course": "completed", 
          "writing score": "100"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "44", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "61", 
          "test preparation course": "none", 
          "writing score": "52"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "57", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "77", 
          "test preparation course": "completed", 
          "writing score": "80"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "91", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "96", 
          "test preparation course": "completed", 
          "writing score": "91"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "69", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "70", 
          "test preparation course": "none", 
          "writing score": "67"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "35", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "53", 
          "test preparation course": "none", 
          "writing score": "46"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "72", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "66", 
          "test preparation course": "none", 
          "writing score": "66"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "54", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group B", 
          "reading score": "65", 
          "test preparation course": "none", 
          "writing score": "65"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "74", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "70", 
          "test preparation course": "none", 
          "writing score": "69"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "74", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group E", 
          "reading score": "64", 
          "test preparation course": "completed", 
          "writing score": "60"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "64", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "56", 
          "test preparation course": "none", 
          "writing score": "52"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "65", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "61", 
          "test preparation course": "completed", 
          "writing score": "71"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "46", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "43", 
          "test preparation course": "completed", 
          "writing score": "44"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "48", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "56", 
          "test preparation course": "none", 
          "writing score": "51"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "67", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "74", 
          "test preparation course": "completed", 
          "writing score": "70"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "62", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "57", 
          "test preparation course": "none", 
          "writing score": "62"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "61", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "71", 
          "test preparation course": "completed", 
          "writing score": "73"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "70", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group C", 
          "reading score": "75", 
          "test preparation course": "completed", 
          "writing score": "74"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "98", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "87", 
          "test preparation course": "completed", 
          "writing score": "90"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "70", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "63", 
          "test preparation course": "none", 
          "writing score": "58"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "67", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group A", 
          "reading score": "57", 
          "test preparation course": "none", 
          "writing score": "53"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "57", 
          "parental level of education": "high school", 
          "race/ethnicity": "group E", 
          "reading score": "58", 
          "test preparation course": "none", 
          "writing score": "57"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "85", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "81", 
          "test preparation course": "completed", 
          "writing score": "85"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "77", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "68", 
          "test preparation course": "completed", 
          "writing score": "69"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "72", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group C", 
          "reading score": "66", 
          "test preparation course": "completed", 
          "writing score": "72"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "78", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group D", 
          "reading score": "91", 
          "test preparation course": "none", 
          "writing score": "96"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "81", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "66", 
          "test preparation course": "none", 
          "writing score": "64"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "61", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group A", 
          "reading score": "62", 
          "test preparation course": "completed", 
          "writing score": "61"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "58", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "68", 
          "test preparation course": "none", 
          "writing score": "61"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "54", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "61", 
          "test preparation course": "none", 
          "writing score": "58"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "82", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "82", 
          "test preparation course": "none", 
          "writing score": "80"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "49", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "58", 
          "test preparation course": "none", 
          "writing score": "60"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "49", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "50", 
          "test preparation course": "completed", 
          "writing score": "52"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "57", 
          "parental level of education": "high school", 
          "race/ethnicity": "group E", 
          "reading score": "75", 
          "test preparation course": "completed", 
          "writing score": "73"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "94", 
          "parental level of education": "high school", 
          "race/ethnicity": "group E", 
          "reading score": "73", 
          "test preparation course": "none", 
          "writing score": "71"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "75", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "77", 
          "test preparation course": "completed", 
          "writing score": "83"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "74", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group E", 
          "reading score": "74", 
          "test preparation course": "none", 
          "writing score": "72"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "58", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "52", 
          "test preparation course": "completed", 
          "writing score": "54"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "62", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "69", 
          "test preparation course": "none", 
          "writing score": "69"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "72", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "57", 
          "test preparation course": "none", 
          "writing score": "62"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "84", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "87", 
          "test preparation course": "none", 
          "writing score": "81"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "92", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group D", 
          "reading score": "100", 
          "test preparation course": "none", 
          "writing score": "100"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "45", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "63", 
          "test preparation course": "none", 
          "writing score": "59"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "75", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "81", 
          "test preparation course": "none", 
          "writing score": "71"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "56", 
          "parental level of education": "some college", 
          "race/ethnicity": "group A", 
          "reading score": "58", 
          "test preparation course": "none", 
          "writing score": "64"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "48", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "54", 
          "test preparation course": "none", 
          "writing score": "53"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "100", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "100", 
          "test preparation course": "none", 
          "writing score": "100"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "65", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "76", 
          "test preparation course": "completed", 
          "writing score": "75"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "72", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "57", 
          "test preparation course": "none", 
          "writing score": "58"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "62", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "70", 
          "test preparation course": "none", 
          "writing score": "72"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "66", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group A", 
          "reading score": "68", 
          "test preparation course": "completed", 
          "writing score": "64"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "63", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "63", 
          "test preparation course": "none", 
          "writing score": "60"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "68", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group E", 
          "reading score": "76", 
          "test preparation course": "none", 
          "writing score": "67"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "75", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group B", 
          "reading score": "84", 
          "test preparation course": "none", 
          "writing score": "80"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "89", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "100", 
          "test preparation course": "none", 
          "writing score": "100"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "78", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "72", 
          "test preparation course": "completed", 
          "writing score": "69"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "53", 
          "parental level of education": "high school", 
          "race/ethnicity": "group A", 
          "reading score": "50", 
          "test preparation course": "completed", 
          "writing score": "60"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "49", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "65", 
          "test preparation course": "none", 
          "writing score": "61"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "54", 
          "parental level of education": "some college", 
          "race/ethnicity": "group A", 
          "reading score": "63", 
          "test preparation course": "none", 
          "writing score": "67"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "64", 
          "parental level of education": "some college", 
          "race/ethnicity": "group C", 
          "reading score": "82", 
          "test preparation course": "completed", 
          "writing score": "77"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "60", 
          "parental level of education": "some college", 
          "race/ethnicity": "group B", 
          "reading score": "62", 
          "test preparation course": "completed", 
          "writing score": "60"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "62", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "65", 
          "test preparation course": "none", 
          "writing score": "58"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "55", 
          "parental level of education": "high school", 
          "race/ethnicity": "group D", 
          "reading score": "41", 
          "test preparation course": "completed", 
          "writing score": "48"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "91", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "95", 
          "test preparation course": "none", 
          "writing score": "94"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "8", 
          "parental level of education": "high school", 
          "race/ethnicity": "group B", 
          "reading score": "24", 
          "test preparation course": "none", 
          "writing score": "23"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "81", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group D", 
          "reading score": "78", 
          "test preparation course": "none", 
          "writing score": "78"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "79", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "85", 
          "test preparation course": "completed", 
          "writing score": "86"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "78", 
          "parental level of education": "some college", 
          "race/ethnicity": "group A", 
          "reading score": "87", 
          "test preparation course": "completed", 
          "writing score": "91"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "74", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group C", 
          "reading score": "75", 
          "test preparation course": "none", 
          "writing score": "82"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "57", 
          "parental level of education": "high school", 
          "race/ethnicity": "group A", 
          "reading score": "51", 
          "test preparation course": "none", 
          "writing score": "54"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "40", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group C", 
          "reading score": "59", 
          "test preparation course": "none", 
          "writing score": "51"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "81", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group E", 
          "reading score": "75", 
          "test preparation course": "completed", 
          "writing score": "76"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "44", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group A", 
          "reading score": "45", 
          "test preparation course": "none", 
          "writing score": "45"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "67", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "86", 
          "test preparation course": "completed", 
          "writing score": "83"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "86", 
          "parental level of education": "high school", 
          "race/ethnicity": "group E", 
          "reading score": "81", 
          "test preparation course": "completed", 
          "writing score": "75"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "65", 
          "parental level of education": "some high school", 
          "race/ethnicity": "group B", 
          "reading score": "82", 
          "test preparation course": "completed", 
          "writing score": "78"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "55", 
          "parental level of education": "associate's degree", 
          "race/ethnicity": "group D", 
          "reading score": "76", 
          "test preparation course": "none", 
          "writing score": "76"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "62", 
          "parental level of education": "bachelor's degree", 
          "race/ethnicity": "group D", 
          "reading score": "72", 
          "test preparation course": "none", 
          "writing score": "74"
        }, 
        {
          "gender": "male", 
          "lunch": "standard", 
          "math score": "63", 
          "parental level of education": "high school", 
          "race/ethnicity": "group A", 
          "reading score": "63", 
          "test preparation course": "none", 
          "writing score": "62"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "88", 
          "parental level of education": "master's degree", 
          "race/ethnicity": "group E", 
          "reading score": "99", 
          "test preparation course": "completed", 
          "writing score": "95"
        }, 
        {
          "gender": "male", 
          "lunch": "free/reduced", 
          "math score": "62", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "55", 
          "test preparation course": "none", 
          "writing score": "55"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "59", 
          "parental level of education": "high school", 
          "race/ethnicity": "group C", 
          "reading score": "71", 
          "test preparation course": "completed", 
          "writing score": "65"
        }, 
        {
          "gender": "female", 
          "lunch": "standard", 
          "math score": "68", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "78", 
          "test preparation course": "completed", 
          "writing score": "77"
        }, 
        {
          "gender": "female", 
          "lunch": "free/reduced", 
          "math score": "77", 
          "parental level of education": "some college", 
          "race/ethnicity": "group D", 
          "reading score": "86", 
          "test preparation course": "none", 
          "writing score": "86"
        }
      ]
      
  }
}

module.exports = StudentController;
