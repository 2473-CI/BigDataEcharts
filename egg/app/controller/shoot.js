'use strict';

const Controller = require('egg').Controller;

class ShootController extends Controller {
  async index() {
    this.ctx.body = [
        {
          "Date": "31/12/2018", 
          "Dead": "3", 
          "Description": "A dispute began at a rented Airbnb during a New Year's Eve party. Three men were killed and another man and woman were wounded.", 
          "Injured": "2", 
          "State": "Ohio", 
          "Total": "5"
        }, 
        {
          "Date": "29/12/2018", 
          "Dead": "1", 
          "Description": "One person was killed and three people were wounded in a shooting at an afterhours club.", 
          "Injured": "3", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "28/12/2018", 
          "Dead": "4", 
          "Description": "A gunman shot and killed his girlfriend, her two children, and her mother. He was arrested after exchanging fire with police and attempting to carjack a vehicle.", 
          "Injured": "1", 
          "State": "Missouri", 
          "Total": "5"
        }, 
        {
          "Date": "24/12/2018", 
          "Dead": "2", 
          "Description": "Three people were killed and two others were wounded in a shooting outside of a bar.", 
          "Injured": "2", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "23/12/2018", 
          "Dead": "0", 
          "Description": "Seven people were wounded during a shooting at a holiday party.", 
          "Injured": "7", 
          "State": "Missouri", 
          "Total": "7"
        }, 
        {
          "Date": "22/12/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded during a shooting at a holiday party.", 
          "Injured": "4", 
          "State": "Nevada", 
          "Total": "4"
        }, 
        {
          "Date": "18/12/2018", 
          "Dead": "0", 
          "Description": "Five people were injured in a shooting outside a deli.", 
          "Injured": "5", 
          "State": "Maryland", 
          "Total": "5"
        }, 
        {
          "Date": "15/12/2018", 
          "Dead": "0", 
          "Description": "Five people were wounded in a shooting.", 
          "Injured": "5", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "14/12/2018", 
          "Dead": "1", 
          "Description": "One person was killed and three others were injured in a shooting near the Colorado Springs Airport.", 
          "Injured": "3", 
          "State": "Colorado", 
          "Total": "4"
        }, 
        {
          "Date": "13/12/2018", 
          "Dead": "0", 
          "Description": "Four men were injured in a shooting that occurred inside a barbershop. The suspect evaded police but the weapon was recovered.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "11/12/2018", 
          "Dead": "1", 
          "Description": "One person was killed and three others were wounded in a shooting just before midnight.", 
          "Injured": "3", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "09/12/2018", 
          "Dead": "0", 
          "Description": "Four people were injured by gunfire inside a strip club following a fight. One additional person was stabbed.", 
          "Injured": "4", 
          "State": "Wisconsin", 
          "Total": "4"
        }, 
        {
          "Date": "09/12/2018", 
          "Dead": "1", 
          "Description": "One person was killed and three others were wounded in a shooting.", 
          "Injured": "3", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "08/12/2018", 
          "Dead": "0", 
          "Description": "Five people were wounded outside of a nightclub in Queens after a dispute inside the club.", 
          "Injured": "5", 
          "State": "New York", 
          "Total": "5"
        }, 
        {
          "Date": "01/12/2018", 
          "Dead": "0", 
          "Description": "Five people were wounded in a shooting in the Overtown neighborhood of Miami.", 
          "Injured": "5", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "26/11/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded in a shooting. Two suspects were taken into custody by police.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "25/11/2018", 
          "Dead": "1", 
          "Description": "A thirteen-year-old boy was killed and six other people were injured in a shooting at a block party. At least two shooters were involved, and police believe it may have been gang-related.", 
          "Injured": "6", 
          "State": "Texas", 
          "Total": "7"
        }, 
        {
          "Date": "25/11/2018", 
          "Dead": "2", 
          "Description": "Two people were killed and two others were wounded in a shooting at an intersection.", 
          "Injured": "2", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "25/11/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded in a drive-by shooting while attending a vigil for a resident of their area who had died of natural causes.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "24/11/2018", 
          "Dead": "2", 
          "Description": "Two people were killed and two others were wounded in a shooting outside a pizza shop. A suspect was taken into custody by police.", 
          "Injured": "2", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "23/11/2018", 
          "Dead": "2", 
          "Description": "Two people were killed and five others were wounded in a shooting outside of a convenience store. Two of the injured were hit with bullets, the other three were injured in other ways.", 
          "Injured": "2", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "22/11/2018", 
          "Dead": "3", 
          "Description": "Three people were killed and two others were injured in a home invasion shooting. One person was arrested the next day, and police suspect another person was involved.", 
          "Injured": "2", 
          "State": "Indiana", 
          "Total": "5"
        }, 
        {
          "Date": "21/11/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting in the Penrose neighborhood of St. Louis.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "19/11/2018", 
          "Dead": "1", 
          "Description": "One person was killed and three others were injured in a shooting in the LoDo neighborhood.", 
          "Injured": "3", 
          "State": "Colorado", 
          "Total": "4"
        }, 
        {
          "Date": "19/11/2018", 
          "Dead": "4", 
          "Description": "Four people were discovered shot execution style in the head in a basement of a home.", 
          "Injured": "0", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "19/11/2018", 
          "Dead": "4", 
          "Description": "Mercy Hospital shooting: A gunman opened fire in the Mercy Hospital and Medical Center in Chicago, killing a doctor at the hospital who was his former fianc\ufffd\ufffde, a police officer, and one other person before being killed either by himself or by police.", 
          "Injured": "0", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "18/11/2018", 
          "Dead": "1", 
          "Description": "A man killed his girlfriend and wounded his uncle and grandmother in a shooting in Watts, Los Angeles. The shooter was also injured, either during a confrontation with police or by a self-inflicted gunshot.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "16/11/2018", 
          "Dead": "3", 
          "Description": "Police found a boy suffering from gunshot injuries, then discovered a car that had crashed into a ditch. Inside the car were three people who had all been shot and killed.", 
          "Injured": "1", 
          "State": "Arkansas", 
          "Total": "4"
        }, 
        {
          "Date": "16/11/2018", 
          "Dead": "1", 
          "Description": "Two people were shot inside a home, and two others were shot at a gas station. One of the victims later died of their injuries.", 
          "Injured": "3", 
          "State": "Wisconsin", 
          "Total": "4"
        }, 
        {
          "Date": "14/11/2018", 
          "Dead": "3", 
          "Description": "Three people were killed and one person was injured in a shooting.", 
          "Injured": "1", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "13/11/2018", 
          "Dead": "2", 
          "Description": "A man killed two people and wounded two others after shooting them during what police believe to be a drug robbery. One of the deceased men is suspected to have been the perpetrator.", 
          "Injured": "2", 
          "State": "Indiana", 
          "Total": "4"
        }, 
        {
          "Date": "13/11/2018", 
          "Dead": "4", 
          "Description": "A person killed three people and injured a fourth before killing themself in a residence in an apparent murder\ufffdCsuicide.", 
          "Injured": "1", 
          "State": "New Mexico", 
          "Total": "5"
        }, 
        {
          "Date": "12/11/2018", 
          "Dead": "3", 
          "Description": "A man killed three people and injured one in a shooting after a fight at a home. The shooter was arrested after crashing a vehicle he stole from the scene.", 
          "Injured": "1", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "11/11/2018", 
          "Dead": "3", 
          "Description": "Three people were killed and one injured when a man began firing at 5 individuals at a bar following a pool game. The suspect was arrested.", 
          "Injured": "3", 
          "State": "Arizona", 
          "Total": "5"
        }, 
        {
          "Date": "11/11/2018", 
          "Dead": "1", 
          "Description": "Shooting of Jemel Roberson: A man re-entered a bar after being ejected and began to fire, wounding three people and becoming injured himself. Armed security guards apprehended the suspect. Responding officers saw one of the security guards with a gun, and shot and killed him.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "10/11/2018", 
          "Dead": "2", 
          "Description": "Two people were killed and four people were wounded when they were shot after an argument over gambling.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "6"
        }, 
        {
          "Date": "07/11/2018", 
          "Dead": "13", 
          "Description": "Thousand Oaks shooting: A man entered a bar hosting a student line-dancing event and killed twelve people, including a police officer. Sixteen other people were injured, one of them by gunfire. The gunman then killed himself.", 
          "Injured": "16", 
          "State": "California", 
          "Total": "29"
        }, 
        {
          "Date": "03/11/2018", 
          "Dead": "0", 
          "Description": "Five people were wounded in a shooting outside of a nightclub. The suspect was taken into custody by police.", 
          "Injured": "5", 
          "State": "New York", 
          "Total": "5"
        }, 
        {
          "Date": "02/11/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting in North Long Beach. Police suspect the incident was gang-related.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "02/11/2018", 
          "Dead": "3", 
          "Description": "2018 Tallahassee shooting: A gunman killed two women and injured five others; four by gunfire, one by being pistol-whipped, at a yoga studio before killing himself in a murder\ufffdCsuicide.", 
          "Injured": "5", 
          "State": "Florida", 
          "Total": "8"
        }, 
        {
          "Date": "01/11/2018", 
          "Dead": "0", 
          "Description": "An argument evolved into a shooting that left five people wounded.", 
          "Injured": "5", 
          "State": "Minnesota", 
          "Total": "5"
        }, 
        {
          "Date": "01/11/2018", 
          "Dead": "2", 
          "Description": "Two men were killed and two other people were wounded in a shooting at a home.", 
          "Injured": "2", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "31/10/2018", 
          "Dead": "1", 
          "Description": "A fifteen-year-old boy was killed and three other people were wounded in a shooting at a home after a robbery.", 
          "Injured": "3", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "30/10/2018", 
          "Dead": "2", 
          "Description": "Two people were killed and three others were wounded in a shooting.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "30/10/2018", 
          "Dead": "0", 
          "Description": "Five people were injured in a drive-by shooting in South Los Angeles.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "29/10/2018", 
          "Dead": "0", 
          "Description": "Seven people were wounded in a shooting following a fight at a nightclub.", 
          "Injured": "7", 
          "State": "California", 
          "Total": "7"
        }, 
        {
          "Date": "28/10/2018", 
          "Dead": "2", 
          "Description": "Two people were killed and two were injured in a shooting at a home.", 
          "Injured": "2", 
          "State": "Arkansas", 
          "Total": "4"
        }, 
        {
          "Date": "27/10/2018", 
          "Dead": "11", 
          "Description": "Pittsburgh synagogue shooting: A man opened fire in the Tree of Life synagogue in an antisemitic attack, killing eleven people and injuring six others (including four police officers). The suspect was taken into custody by police.", 
          "Injured": "6", 
          "State": "Pennsylvania", 
          "Total": "17"
        }, 
        {
          "Date": "27/10/2018", 
          "Dead": "0", 
          "Description": "Five people were wounded by several shooters at a high school Halloween party.", 
          "Injured": "5", 
          "State": "Tennessee", 
          "Total": "5"
        }, 
        {
          "Date": "26/10/2018", 
          "Dead": "1", 
          "Description": "A seventeen-year-old was killed and three other people were wounded in a shooting.", 
          "Injured": "3", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "24/10/2018", 
          "Dead": "0", 
          "Description": "Several gunmen wounded five people who were standing on a sidewalk.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "22/10/2018", 
          "Dead": "0", 
          "Description": "Six people were injured at a funeral service for Vantrease Criss, a rapper who was killed a week before.", 
          "Injured": "6", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "21/10/2018", 
          "Dead": "0", 
          "Description": "Six people were injured in a drive-by shooting before an NFL game between the Houston Texans and the Jacksonville Jaguars. Those injured were between the ages of 20 and 70.", 
          "Injured": "6", 
          "State": "Florida", 
          "Total": "6"
        }, 
        {
          "Date": "21/10/2018", 
          "Dead": "1", 
          "Description": "One person was killed and three were wounded after three gunmen began shooting at a nightclub following an argument.", 
          "Injured": "3", 
          "State": "Washington", 
          "Total": "4"
        }, 
        {
          "Date": "16/10/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a drive-by shooting.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "15/10/2018", 
          "Dead": "5", 
          "Description": "A mother and four teenage children were found by an older brother in an apparent murder\ufffdCsuicide in which the mother is the reported perpetrator.", 
          "Injured": "0", 
          "State": "Tennessee", 
          "Total": "5"
        }, 
        {
          "Date": "14/10/2018", 
          "Dead": "0", 
          "Description": "Two children and two adults were injured in a drive-by shooting.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "14/10/2018", 
          "Dead": "2", 
          "Description": "Two people were killed and two were injured in a shooting outside of a Halloween party.", 
          "Injured": "2", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "14/10/2018", 
          "Dead": "3", 
          "Description": "Three people were killed and one was wounded after someone arguing with them outside a shopping center shot them and fled.", 
          "Injured": "1", 
          "State": "Nevada", 
          "Total": "4"
        }, 
        {
          "Date": "13/10/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded near Glasgow Village when one or more people shot into a home.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "13/10/2018", 
          "Dead": "4", 
          "Description": "A dispute at a one-year-olds birthday party, resulted in four men killed and one wounded.", 
          "Injured": "1", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "12/10/2018", 
          "Dead": "0", 
          "Description": "Six people were injured in a shooting at a fast food restaurant. One suspect was arrested and another turned himself in to police. A third person is also suspected of being involved.", 
          "Injured": "6", 
          "State": "South Carolina", 
          "Total": "6"
        }, 
        {
          "Date": "12/10/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded after being shot in central Las Vegas.", 
          "Injured": "4", 
          "State": "Nevada", 
          "Total": "4"
        }, 
        {
          "Date": "08/10/2018", 
          "Dead": "0", 
          "Description": "Four people were injured when a person in a vehicle fired shots at them at an apartment complex.", 
          "Injured": "4", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "06/10/2018", 
          "Dead": "0", 
          "Description": "A man fired into a crowd outside a bar during a fight, injuring four people. Another person fired a gun into the air to try to stop the fight, but did not injure anyone.", 
          "Injured": "4", 
          "State": "Oklahoma", 
          "Total": "4"
        }, 
        {
          "Date": "06/10/2018", 
          "Dead": "1", 
          "Description": "People began firing from a vehicle at people in a gas station parking lot, killing one person in a vehicle and wounding three others. The shooting is suspected to be gang-related.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "06/10/2018", 
          "Dead": "0", 
          "Description": "Two men began shooting during a dispute, injuring six people in total including each other. Both men were arrested.", 
          "Injured": "6", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "04/10/2018", 
          "Dead": "1", 
          "Description": "Several people began firing at teenagers in a car, killing one and wounding three. Police believe they were targeting people with whom they had been in a dispute on social media, and that the teenagers were mistakenly targeted. Seven suspects were arrested on various charges related to the shooting, including three people charged with first-degree murder.", 
          "Injured": "3", 
          "State": "New Mexico", 
          "Total": "4"
        }, 
        {
          "Date": "04/10/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded when they were injured in a gang-related shooting.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "03/10/2018", 
          "Dead": "2", 
          "Description": "Florence, South Carolina shooting: Officers were shot at during a two-hour standoff while attempting to execute a search warrant in which the perpetrator held children hostage, killing two and wounding six before being arrested.", 
          "Injured": "6", 
          "State": "South Carolina", 
          "Total": "8"
        }, 
        {
          "Date": "03/10/2018", 
          "Dead": "1", 
          "Description": "One person was killed and four others were injured in a drive-by shooting outside of a store.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "01/10/2018", 
          "Dead": "2", 
          "Description": "A man began firing a gun inside a vehicle, killing two passengers and wounding another passenger and the driver. He was arrested.", 
          "Injured": "2", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "24/09/2018", 
          "Dead": "3", 
          "Description": "A fight at an apartment complex, reportedly got out of control and three people were killed and two women wounded.", 
          "Injured": "2", 
          "State": "Tennessee", 
          "Total": "5"
        }, 
        {
          "Date": "21/09/2018", 
          "Dead": "4", 
          "Description": "Aberdeen, Maryland Shooting: An employee of the Rite Aid Distribution facility killed three victims before wounding herself. The shooter died later in the hospital.", 
          "Injured": "3", 
          "State": "Maryland", 
          "Total": "7"
        }, 
        {
          "Date": "20/09/2018", 
          "Dead": "1", 
          "Description": "A gunman opened fire in a municipal building and wounded four people before being shot by officer who responded to the incident.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "20/09/2018", 
          "Dead": "1", 
          "Description": "A gunman opened fire at the WTS Paradigm software company and wounded three people. The gunman was injured in a shootout with the police, and later died in the hospital.", 
          "Injured": "3", 
          "State": "Wisconsin", 
          "Total": "4"
        }, 
        {
          "Date": "17/09/2018", 
          "Dead": "4", 
          "Description": "A father shot and killed his wife and two children, and injured his adult stepdaughter, before he committed suicide.", 
          "Injured": "1", 
          "State": "Maryland", 
          "Total": "5"
        }, 
        {
          "Date": "13/09/2018", 
          "Dead": "6", 
          "Description": "A gunman opened fire at three locations after following a witness to another store and then to a private home. He killed two women and three men before carjacking a woman and child, and committing suicide when police approached.", 
          "Injured": "0", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "06/09/2018", 
          "Dead": "4", 
          "Description": "Fifth Third Center Shooting: A gunman entered a loading dock at the Fifth Third Center skyscraper and opened fire before entering the lobby of a building. Four people, including the shooter, were killed and two were injured.", 
          "Injured": "2", 
          "State": "Ohio", 
          "Total": "6"
        }, 
        {
          "Date": "02/09/2018", 
          "Dead": "0", 
          "Description": "Eight people were wounded during a shooting at a dice game at an apartment complex.", 
          "Injured": "8", 
          "State": "California", 
          "Total": "8"
        }, 
        {
          "Date": "01/09/2018", 
          "Dead": "1", 
          "Description": "Eight people were shot at a nightclub. Police arrived and found a woman with a gunshot wound to the head at the back of the bar. She later died at a hospital.", 
          "Injured": "7", 
          "State": "Ohio", 
          "Total": "8"
        }, 
        {
          "Date": "27/08/2018", 
          "Dead": "1", 
          "Description": "An unidentified individual fired from a vehicle on a group of people standing outside a home, killing one and injuring three.", 
          "Injured": "3", 
          "State": "Arkansas", 
          "Total": "4"
        }, 
        {
          "Date": "26/08/2018", 
          "Dead": "3", 
          "Description": "Jacksonville Landing Shooting: A gunman killed two people and wounded eleven more at a Madden NFL 19 competition before killing himself. The shooter was identified as David Katz, an individual who had reportedly been eliminated from the competition before the shooting.", 
          "Injured": "11", 
          "State": "Florida", 
          "Total": "14"
        }, 
        {
          "Date": "26/08/2018", 
          "Dead": "1", 
          "Description": "One person was killed and three others were wounded inside a residence. Authorities took a man into custody in connection with the shooting. According to reports, the deceased victim was shot in the chest.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "25/08/2018", 
          "Dead": "1", 
          "Description": "Two gunmen reportedly shot five people outside a residence. One victim was shot in the chest and later died at Vanderbilt University Medical Center.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "5"
        }, 
        {
          "Date": "25/08/2018", 
          "Dead": "0", 
          "Description": "Five people were shot and wounded during an armed robbery of Liquid Caf\ufffd\ufffd. One other individual had an unspecified injury \"by other means\" than gunfire.", 
          "Injured": "6", 
          "State": "Virginia", 
          "Total": "6"
        }, 
        {
          "Date": "23/08/2018", 
          "Dead": "0", 
          "Description": "Four people were injured during a shooting in the Oxford Circle neighborhood of Philadelphia.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "22/08/2018", 
          "Dead": "0", 
          "Description": "A rapper's tour van \"came under fire\" on I-64 after a concert at around 11:05 PM. Four people were injured. It's not clear if the rapper himself was shot.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "21/08/2018", 
          "Dead": "0", 
          "Description": "Six people were wounded by gunfire in a shooting outside of an apartment complex, following a large fight in the same location the previous day. One of the wounded men was arrested, but charges against him were later dropped.", 
          "Injured": "6", 
          "State": "Tennessee", 
          "Total": "6"
        }, 
        {
          "Date": "20/08/2018", 
          "Dead": "1", 
          "Description": "Five people were injured in a shooting at a bar. One of the victims later died of his injuries.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "5"
        }, 
        {
          "Date": "20/08/2018", 
          "Dead": "1", 
          "Description": "A fight over drugs resulted in one person being killed and three others being wounded.", 
          "Injured": "3", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "19/08/2018", 
          "Dead": "0", 
          "Description": "Five were wounded in a shooting after a softball game in the Grand Crossing neighborhood of Chicago.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "19/08/2018", 
          "Dead": "1", 
          "Description": "One person was killed and three others were wounded in a drive-by shooting at a family gathering.", 
          "Injured": "3", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "18/08/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded by gunfire following an event where school supplies were distributed to children. A fifth person, a child, received minor injuries after being struck by a dirt bike operated by one of the attackers.", 
          "Injured": "5", 
          "State": "New Jersey", 
          "Total": "5"
        }, 
        {
          "Date": "18/08/2018", 
          "Dead": "0", 
          "Description": "Four people were injured during gunfire during a drive-by shooting following a fight in a Bronx lounge.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "17/08/2018", 
          "Dead": "0", 
          "Description": "Seven people were wounded in a shooting in the Englewood neighborhood of Chicago.", 
          "Injured": "7", 
          "State": "Illinois", 
          "Total": "7"
        }, 
        {
          "Date": "15/08/2018", 
          "Dead": "0", 
          "Description": "Five people were injured when they were shot during a backyard gathering to mourn the death of a family member who had died in a car accident earlier that month.", 
          "Injured": "5", 
          "State": "South Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "14/08/2018", 
          "Dead": "0", 
          "Description": "After a dispute at a grocery store checkout line, a man pulled a handgun from his sister's waistband and wounded five people. The suspect was arrested.", 
          "Injured": "5", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "12/08/2018", 
          "Dead": "4", 
          "Description": "A father killed three of his children and wounded the fourth before killing himself.", 
          "Injured": "1", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "12/08/2018", 
          "Dead": "0", 
          "Description": "A woman shot and injured four people in a street fight in the East Liberty neighborhood of Pittsburgh. She later turned herself in to police.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "11/08/2018", 
          "Dead": "0", 
          "Description": "Two adults and two children were wounded in a shooting at a party at a park in north Columbus.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "11/08/2018", 
          "Dead": "1", 
          "Description": "One person was killed and four others were shot in an early-morning shooting in the Crocker-Amazon neighborhood of San Francisco.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "11/08/2018", 
          "Dead": "1", 
          "Description": "After being kicked out of a sports bar following several fights, a man returned with a gun and killed a bartender. Three others were wounded by gunfire. The shooter was taken into custody.", 
          "Injured": "3", 
          "State": "Colorado", 
          "Total": "4"
        }, 
        {
          "Date": "10/08/2018", 
          "Dead": "0", 
          "Description": "A man wounded four people at a gas station after shooting at them from his truck. He was arrested by police.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "10/08/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded by a gunman who was later taken into custody.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "08/08/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded by a gunman.", 
          "Injured": "4", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "08/08/2018", 
          "Dead": "2", 
          "Description": "Two people were killed and four were injured in a drive-by shooting in North Philadelphia.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "6"
        }, 
        {
          "Date": "05/08/2018", 
          "Dead": "1", 
          "Description": "One person was killed and four were injured in the Austin neighborhood of Chicago.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "05/08/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded at Humboldt Park when they were shot at by two people in a car.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "05/08/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded by gunfire at a house party.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "05/08/2018", 
          "Dead": "0", 
          "Description": "Eight people were wounded when a group of men approached them in a courtyard and began shooting.", 
          "Injured": "8", 
          "State": "Illinois", 
          "Total": "8"
        }, 
        {
          "Date": "05/08/2018", 
          "Dead": "1", 
          "Description": "Two shooters killed one person and wounded five others when they began shooting at a group standing on a sidewalk.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "04/08/2018", 
          "Dead": "0", 
          "Description": "Six people were shot when a man pulled a handgun from his waistband during a fight. The suspect was taken into custody.", 
          "Injured": "6", 
          "State": "Missouri", 
          "Total": "6"
        }, 
        {
          "Date": "04/08/2018", 
          "Dead": "0", 
          "Description": "Six people were injured during a shooting at a house party.", 
          "Injured": "6", 
          "State": "Nevada", 
          "Total": "6"
        }, 
        {
          "Date": "04/08/2018", 
          "Dead": "1", 
          "Description": "One person was killed and three were injured in the Austin neighborhood of Chicago.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "04/08/2018", 
          "Dead": "0", 
          "Description": "Four people were injured when a gunman began shooting from a car at a group of people who were grilling and playing basketball in a park.", 
          "Injured": "4", 
          "State": "Wisconsin", 
          "Total": "4"
        }, 
        {
          "Date": "31/07/2018", 
          "Dead": "2", 
          "Description": "After becoming upset at a party, a man killed one person and wounded three others, including his girlfriend. He was driven from the scene by his friend and his friend's wife. He later shot and killed his friend, but his attempt to kill his friend's wife failed when his gun malfunctioned.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "30/07/2018", 
          "Dead": "0", 
          "Description": "Four people were injured when shots were fired during a dispute in a parking lot.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "30/07/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a drive-by shooting.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "29/07/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "29/07/2018", 
          "Dead": "1", 
          "Description": "One person was killed and four were injured in a shooting following a verbal altercation at an inn.", 
          "Injured": "4", 
          "State": "Arizona", 
          "Total": "5"
        }, 
        {
          "Date": "29/07/2018", 
          "Dead": "0", 
          "Description": "Four people were injured when they were shot after a fight broke out.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "28/07/2018", 
          "Dead": "3", 
          "Description": "Two gunmen killed three people and injured seven others in a shooting at a daiquiri shop.", 
          "Injured": "7", 
          "State": "Louisiana", 
          "Total": "10"
        }, 
        {
          "Date": "28/07/2018", 
          "Dead": "2", 
          "Description": "Two people were killed and six were injured in a drive-by shooting by a liquor store.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "27/07/2018", 
          "Dead": "0", 
          "Description": "Three children and an adult were injured in a shooting.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "27/07/2018", 
          "Dead": "5", 
          "Description": "A man killed his father and stepmother, as well as their adopted son and his stepmother's son, before killing himself in a murder\ufffdCsuicide at a nursing home.", 
          "Injured": "0", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "26/07/2018", 
          "Dead": "1", 
          "Description": "One person was killed and six were injured in a shootout involving multiple gunmen at a bar after the filming of a rap music video.", 
          "Injured": "6", 
          "State": "Ohio", 
          "Total": "7"
        }, 
        {
          "Date": "26/07/2018", 
          "Dead": "2", 
          "Description": "A gunman shot at a moving car, killing two occupants and injuring the other two.", 
          "Injured": "2", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "26/07/2018", 
          "Dead": "0", 
          "Description": "Six people were injured in a drive-by shooting.", 
          "Injured": "6", 
          "State": "Texas", 
          "Total": "6"
        }, 
        {
          "Date": "25/07/2018", 
          "Dead": "0", 
          "Description": "Four people were injured when a truck pulled up beside a car and one or more of its occupants began shooting. A suspect was arrested.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "23/07/2018", 
          "Dead": "0", 
          "Description": "Five people were wounded when someone began firing at them while they stood on a sidewalk.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "21/07/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded in a shooting.", 
          "Injured": "4", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "21/07/2018", 
          "Dead": "2", 
          "Description": "Two people were killed and five injured when they were shot by four gunmen in a park.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "7"
        }, 
        {
          "Date": "20/07/2018", 
          "Dead": "1", 
          "Description": "One person was killed and four were injured after a shooter opened fire into a backyard party.", 
          "Injured": "4", 
          "State": "Washington", 
          "Total": "5"
        }, 
        {
          "Date": "20/07/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded when three gunmen began shooting at them at a restaurant.", 
          "Injured": "4", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "18/07/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded when shots were fired during a large fight in an apartment complex. Four people were arrested on other charges, but the shooter or shooters were not identified.", 
          "Injured": "4", 
          "State": "Oklahoma", 
          "Total": "4"
        }, 
        {
          "Date": "16/07/2018", 
          "Dead": "2", 
          "Description": "Two people were killed and four others were injured when a gunman began shooting at them while they were standing in a yard.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "6"
        }, 
        {
          "Date": "16/07/2018", 
          "Dead": "1", 
          "Description": "Two gunmen killed one person and injured four others.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "16/07/2018", 
          "Dead": "1", 
          "Description": "Masked men drove up in a car and began shooting into a crowd, killing a ten-year-old girl and injuring three others. Three people were arrested in relation to the shooting.", 
          "Injured": "4", 
          "State": "District of Columbia", 
          "Total": "5"
        }, 
        {
          "Date": "15/07/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded during a shooting following a fight at a party.", 
          "Injured": "4", 
          "State": "Colorado", 
          "Total": "4"
        }, 
        {
          "Date": "15/07/2018", 
          "Dead": "0", 
          "Description": "Five people were injured when a shooter fired into a group of people gathered in a parking lot outside a club.", 
          "Injured": "5", 
          "State": "Tennessee", 
          "Total": "5"
        }, 
        {
          "Date": "14/07/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting.", 
          "Injured": "4", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "13/07/2018", 
          "Dead": "1", 
          "Description": "One person was killed and three people were wounded in a shooting outside a nightclub in Scott's Addition.", 
          "Injured": "3", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "12/07/2018", 
          "Dead": "0", 
          "Description": "Five people were wounded in a shooting near a community center. Police believe the shooting was spurred by an earlier fight over a dice game.", 
          "Injured": "5", 
          "State": "Tennessee", 
          "Total": "5"
        }, 
        {
          "Date": "11/07/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a drive-by shooting while they were inside their car at restaurant.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "11/07/2018", 
          "Dead": "0", 
          "Description": "Gunmen injured four people\ufffd\ufffdtwo inside a mobile home, and two in separate vehicles outside of the home.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "09/07/2018", 
          "Dead": "5", 
          "Description": "A man killed his wife and three children in their home before killing himself in a murder\ufffdCsuicide.", 
          "Injured": "0", 
          "State": "Delaware", 
          "Total": "5"
        }, 
        {
          "Date": "09/07/2018", 
          "Dead": "1", 
          "Description": "Following a fight, a man was killed and four other people were injured by gunshots. Two people were arrested.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "08/07/2018", 
          "Dead": "0", 
          "Description": "Six people, including a suspect, were wounded during a shooting at a bar.", 
          "Injured": "6", 
          "State": "Alabama", 
          "Total": "6"
        }, 
        {
          "Date": "08/07/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "07/07/2018", 
          "Dead": "3", 
          "Description": "A man killed his wife and one of his children and wounded his other two children before setting the house on fire and killing himself in a murder\ufffdCsuicide.", 
          "Injured": "2", 
          "State": "Alabama", 
          "Total": "5"
        }, 
        {
          "Date": "05/07/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in Brooklyn when they were shot at while standing outside.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "05/07/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "05/07/2018", 
          "Dead": "3", 
          "Description": "Three people were killed and three others were wounded during a Fourth of July party. Police believe the shooting was gang-related.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "05/07/2018", 
          "Dead": "0", 
          "Description": "Six people were injured while walking down the street. A suspect was taken into custody.", 
          "Injured": "6", 
          "State": "Virginia", 
          "Total": "6"
        }, 
        {
          "Date": "05/07/2018", 
          "Dead": "1", 
          "Description": "One person was killed and five were injured in a shooting at a Fourth of July party.", 
          "Injured": "5", 
          "State": "Ohio", 
          "Total": "6"
        }, 
        {
          "Date": "04/07/2018", 
          "Dead": "1", 
          "Description": "One person was killed and three were wounded.", 
          "Injured": "3", 
          "State": "Indiana", 
          "Total": "4"
        }, 
        {
          "Date": "04/07/2018", 
          "Dead": "1", 
          "Description": "After a bar fight spilled into a parking lot, shots were fired, killing one person and wounding three others.", 
          "Injured": "3", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "03/07/2018", 
          "Dead": "1", 
          "Description": "One person was killed and five others were wounded in a drive-by shooting.", 
          "Injured": "5", 
          "State": "Missouri", 
          "Total": "6"
        }, 
        {
          "Date": "03/07/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting.", 
          "Injured": "4", 
          "State": "District of Columbia", 
          "Total": "4"
        }, 
        {
          "Date": "02/07/2018", 
          "Dead": "2", 
          "Description": "A woman and a 17-month-old child were killed in a shooting that injured two others. One person was taken into custody, although police suspect others were involved. Police believe the shooting was gang-related.", 
          "Injured": "2", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "01/07/2018", 
          "Dead": "0", 
          "Description": "Six people were injured when a gunman opened fire on three people on a sidewalk. In addition to the three people on the sidewalk, three children in a car were wounded.", 
          "Injured": "6", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "30/06/2018", 
          "Dead": "1", 
          "Description": "Several shooters fired into a crowd that was fleeing a nightclub, killing one person and injuring six. Police arrested one suspect, and believe the shooting was gang-related.", 
          "Injured": "6", 
          "State": "Georgia", 
          "Total": "7"
        }, 
        {
          "Date": "30/06/2018", 
          "Dead": "0", 
          "Description": "Six people were injured at a barbecue when an unknown person walked into the yard and began firing.", 
          "Injured": "6", 
          "State": "Maryland", 
          "Total": "6"
        }, 
        {
          "Date": "30/06/2018", 
          "Dead": "0", 
          "Description": "Five people were injured when several people began exchanging gunfire. One suspect was arrested.", 
          "Injured": "5", 
          "State": "New Jersey", 
          "Total": "5"
        }, 
        {
          "Date": "28/06/2018", 
          "Dead": "5", 
          "Description": "Capital Gazette shooting: A gunman entered the offices of The Capital Gazette and killed five employees and wounded two others.", 
          "Injured": "2", 
          "State": "Maryland", 
          "Total": "7"
        }, 
        {
          "Date": "27/06/2018", 
          "Dead": "1", 
          "Description": "One person was killed and three were injured when at least one person began shooting at them outside a mini-mart.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "27/06/2018", 
          "Dead": "0", 
          "Description": "During an argument between neighbors, two people drew weapons and wounded four people. One suspect was arrested.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "27/06/2018", 
          "Dead": "0", 
          "Description": "Four victims were injured in a drive-by shooting outside a bodega.", 
          "Injured": "4", 
          "State": "Connecticut", 
          "Total": "4"
        }, 
        {
          "Date": "25/06/2018", 
          "Dead": "0", 
          "Description": "Six people were injured when a gunman began firing upon them as they stood near a park.", 
          "Injured": "6", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "24/06/2018", 
          "Dead": "1", 
          "Description": "One person was killed and six were injured during a fight at a birthday party. One of the wounded was arrested.", 
          "Injured": "6", 
          "State": "North Carolina", 
          "Total": "7"
        }, 
        {
          "Date": "24/06/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded when an uninvited guest at a birthday party at an event center began shooting.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "24/06/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting at a block party.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "24/06/2018", 
          "Dead": "1", 
          "Description": "One person was killed and three were injured in a shooting. Six teenage suspects were arrested in relation to the shooting after leading police on a car chase.", 
          "Injured": "3", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "24/06/2018", 
          "Dead": "1", 
          "Description": "One person was killed and three were wounded in a shooting.", 
          "Injured": "3", 
          "State": "Indiana", 
          "Total": "4"
        }, 
        {
          "Date": "24/06/2018", 
          "Dead": "0", 
          "Description": "After several fights inside a bar led the bar owner to close for the night, the fights continued outside before escalating to a shooting in which five people were wounded.", 
          "Injured": "5", 
          "State": "Ohio", 
          "Total": "5"
        }, 
        {
          "Date": "23/06/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a gang-related shooting.", 
          "Injured": "4", 
          "State": "Kansas", 
          "Total": "4"
        }, 
        {
          "Date": "23/06/2018", 
          "Dead": "1", 
          "Description": "One person was killed and four others were injured after being shot at from a vehicle.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "23/06/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "22/06/2018", 
          "Dead": "1", 
          "Description": "One person was killed and three were injured when their car was shot at from another car.", 
          "Injured": "3", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "21/06/2018", 
          "Dead": "1", 
          "Description": "One person was killed and three were wounded in a fight that progressed to a shooting outside of a liquor store.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "21/06/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded in a shooting.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "21/06/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded in a shooting.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "20/06/2018", 
          "Dead": "0", 
          "Description": "Five people were injured when someone drew a gun and began shooting during a fight.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "19/06/2018", 
          "Dead": "0", 
          "Description": "A man returned after an argument and wounded four people. He was later taken into custody.", 
          "Injured": "4", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "18/06/2018", 
          "Dead": "2", 
          "Description": "Two people were killed and three people were injured in a shooting after a fight at a party.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "18/06/2018", 
          "Dead": "3", 
          "Description": "Three people were killed and a four-year-old child was wounded in a shooting.", 
          "Injured": "1", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "17/06/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting at a gas station.", 
          "Injured": "4", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "17/06/2018", 
          "Dead": "1", 
          "Description": "Art All Night shooting: Multiple gunmen wounded 17 people at the Art All Night festival. Five others were wounded when they were trampled by people around them. One of the suspected gunmen was shot and killed by police. Police suspect the shooting was gang-related.", 
          "Injured": "22", 
          "State": "New Jersey", 
          "Total": "23"
        }, 
        {
          "Date": "17/06/2018", 
          "Dead": "1", 
          "Description": "A teenager was killed and three other people were injured in a drive-by shooting during a cookout. A 15-year-old was later charged with the killing.", 
          "Injured": "3", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "17/06/2018", 
          "Dead": "0", 
          "Description": "A gunman walked up to and wounded four people standing on the street.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "14/06/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "14/06/2018", 
          "Dead": "0", 
          "Description": "Five people were injured in a shooting that took place in a cemetery.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "14/06/2018", 
          "Dead": "1", 
          "Description": "A fight turned into a shooting that resulted in a 15-year-old being killed and four other people being injured.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "14/06/2018", 
          "Dead": "1", 
          "Description": "One person was killed and four were wounded in a drive-by shooting.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "5"
        }, 
        {
          "Date": "14/06/2018", 
          "Dead": "1", 
          "Description": "A 13-year-old boy was killed, and his mother, 8-year-old brother, and a bystander were wounded in a road rage incident after the shooter followed them to the parking lot of a dentist's office. The shooter was arrested.", 
          "Injured": "3", 
          "State": "Colorado", 
          "Total": "4"
        }, 
        {
          "Date": "12/06/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting in the Bronx.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "11/06/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting after a verbal altercation. Three suspects were arrested.", 
          "Injured": "4", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "11/06/2018", 
          "Dead": "5", 
          "Description": "After barricading himself and his four children in a home for nearly 24 hours, a man shot and wounded a police officer before killing the four children and himself.", 
          "Injured": "1", 
          "State": "Florida", 
          "Total": "6"
        }, 
        {
          "Date": "10/06/2018", 
          "Dead": "1", 
          "Description": "One person was killed and five others were injured after a fight in a bar moved outside and a member of one of the groups began shooting.", 
          "Injured": "5", 
          "State": "Florida", 
          "Total": "6"
        }, 
        {
          "Date": "10/06/2018", 
          "Dead": "0", 
          "Description": "Six people were injured by gunfire at a birthday party.", 
          "Injured": "6", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "10/06/2018", 
          "Dead": "1", 
          "Description": "A 14-year-old boy was killed and four other people were wounded at a party. A 14-year-old boy was arrested in connection to the shooting.", 
          "Injured": "4", 
          "State": "Indiana", 
          "Total": "5"
        }, 
        {
          "Date": "10/06/2018", 
          "Dead": "0", 
          "Description": "Seven people were injured after gunfire broke out at a party. Several men arrived at the home and began to shoot, and an attendee at the party shot back. The police believe the incident was gang-related.", 
          "Injured": "7", 
          "State": "Illinois", 
          "Total": "7"
        }, 
        {
          "Date": "10/06/2018", 
          "Dead": "2", 
          "Description": "Two people were killed and two others were wounded after a shooting at a birthday party. The suspect was later taken into custody.", 
          "Injured": "2", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "10/06/2018", 
          "Dead": "1", 
          "Description": "One person was killed and five others were injured in a drive-by shooting.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "09/06/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting at a house party.", 
          "Injured": "4", 
          "State": "Massachusetts", 
          "Total": "4"
        }, 
        {
          "Date": "09/06/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded after a gunman began shooting outside a high school graduation party.", 
          "Injured": "4", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "09/06/2018", 
          "Dead": "1", 
          "Description": "Four or five gunmen killed one person and injured four others.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "05/06/2018", 
          "Dead": "3", 
          "Description": "Three men were killed and a fourth was injured after a car pulled up alongside theirs and the occupant began shooting.", 
          "Injured": "1", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "03/06/2018", 
          "Dead": "0", 
          "Description": "After an argument at a football game, a man drove a moped into the middle of the field and began to fire a gun. Multiple people then began firing at the shooter. Five people were injured in the exchange of gunshots.", 
          "Injured": "5", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "03/06/2018", 
          "Dead": "1", 
          "Description": "One person was killed and three others were wounded by two gunmen in a drive-by shooting.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "02/06/2018", 
          "Dead": "1", 
          "Description": "One person was killed and six others were injured in a shooting. A suspect was taken into custody.", 
          "Injured": "6", 
          "State": "Nebraska", 
          "Total": "7"
        }, 
        {
          "Date": "02/06/2018", 
          "Dead": "0", 
          "Description": "Five people were injured in a shooting at an outdoor gathering.", 
          "Injured": "5", 
          "State": "New York", 
          "Total": "5"
        }, 
        {
          "Date": "31/05/2018", 
          "Dead": "3", 
          "Description": "A man killed a woman and two of her daughters, and injured her husband and her third daughter, when he shot them at their home. He has been arrested.", 
          "Injured": "2", 
          "State": "South Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "04/06/2018", 
          "Dead": "7", 
          "Description": "2018 Scottsdale shootings: Over the course of several days (May 30, 2018 to June 4, 2018), a man killed a forensic psychologist, two paralegals, a counselor, and a couple from whom he took a handgun. The suspect killed himself when police began closing in on him.", 
          "Injured": "0", 
          "State": "Arizona", 
          "Total": "7"
        }, 
        {
          "Date": "27/05/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting on the bank of the Red River.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "27/05/2018", 
          "Dead": "1", 
          "Description": "A fight in a nightclub spilled into the parking lot and resulted in a shooting that killed one person and injured three others.", 
          "Injured": "3", 
          "State": "Colorado", 
          "Total": "4"
        }, 
        {
          "Date": "25/05/2018", 
          "Dead": "0", 
          "Description": "A shooting broke out after a man tried to rob a group of people playing dice. Four people were injured by gunshots. Two men were arrested.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "20/05/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded in a shooting at a block party.", 
          "Injured": "4", 
          "State": "Indiana", 
          "Total": "4"
        }, 
        {
          "Date": "20/05/2018", 
          "Dead": "1", 
          "Description": "Two suspects fired shots into a nightclub, killing one person and wounding seven others.", 
          "Injured": "7", 
          "State": "Mississippi", 
          "Total": "8"
        }, 
        {
          "Date": "18/05/2018", 
          "Dead": "10", 
          "Description": "Santa Fe High School shooting: A student at Santa Fe High School shot and killed ten people and wounded fourteen others. Explosive devices were also found, but they were not detonated. The suspect was taken into custody by police.", 
          "Injured": "14", 
          "State": "Texas", 
          "Total": "24"
        }, 
        {
          "Date": "16/05/2018", 
          "Dead": "5", 
          "Description": "A man wounded his ex-wife and killed their three children and his ex-wife's boyfriend before killing himself in a murder\ufffdCsuicide.", 
          "Injured": "1", 
          "State": "Texas", 
          "Total": "6"
        }, 
        {
          "Date": "14/05/2018", 
          "Dead": "0", 
          "Description": "Four men were wounded in a shooting near a playground.", 
          "Injured": "4", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "13/05/2018", 
          "Dead": "3", 
          "Description": "A shooter fired into a home, killing a five-year-old girl and her parents, and wounding two other family members.", 
          "Injured": "2", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "13/05/2018", 
          "Dead": "0", 
          "Description": "A man opened fire at a block party, possibly after a fight over a dice game, wounding four people. The suspect was arrested.", 
          "Injured": "4", 
          "State": "Mississippi", 
          "Total": "4"
        }, 
        {
          "Date": "13/05/2018", 
          "Dead": "2", 
          "Description": "A man killed one teenage boy and wounded three others. One of the wounded boys died in the hospital several days later.", 
          "Injured": "2", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "12/05/2018", 
          "Dead": "0", 
          "Description": "Seven people were wounded in a shooting.", 
          "Injured": "7", 
          "State": "Nebraska", 
          "Total": "7"
        }, 
        {
          "Date": "12/05/2018", 
          "Dead": "0", 
          "Description": "Four people were injured by gunfire in a shooting following a fight at a birthday party.", 
          "Injured": "4", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "11/05/2018", 
          "Dead": "0", 
          "Description": "Two children and two adults were injured when shooters fired at them from two cars.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "11/05/2018", 
          "Dead": "1", 
          "Description": "Four police officers were injured in a shootout while trying to execute a search warrant, either by gunfire or from shrapnel from explosives in the home. The suspect was killed.", 
          "Injured": "4", 
          "State": "Oklahoma", 
          "Total": "5"
        }, 
        {
          "Date": "09/05/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a suspected drive-by shooting outside an apartment complex.", 
          "Injured": "4", 
          "State": "Nebraska", 
          "Total": "4"
        }, 
        {
          "Date": "09/05/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded in a shooting.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "07/05/2018", 
          "Dead": "0", 
          "Description": "Two men approached a group of people and wounded four people. A fifth victim was shot and wounded several blocks away. Police believe the first attack was gang-related.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "06/05/2018", 
          "Dead": "0", 
          "Description": "After a fight and theft from the bar and a tip jar, private security shut down a party. As the guests left, several weapons were fired and four people were injured.", 
          "Injured": "4", 
          "State": "Oklahoma", 
          "Total": "4"
        }, 
        {
          "Date": "06/05/2018", 
          "Dead": "2", 
          "Description": "Two people were killed and four were injured after they were shot while traveling in a car by a gunman in another car.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "6"
        }, 
        {
          "Date": "05/05/2018", 
          "Dead": "0", 
          "Description": "Five people were injured in a shooting. A suspect was arrested.", 
          "Injured": "5", 
          "State": "Georgia", 
          "Total": "5"
        }, 
        {
          "Date": "04/05/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting.", 
          "Injured": "4", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "04/05/2018", 
          "Dead": "0", 
          "Description": "A shooting at a house party wounded four people.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "02/05/2018", 
          "Dead": "1", 
          "Description": "A man shot at a group of people from a car, killing one and wounding four. He and the driver of the car were later arrested.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "02/05/2018", 
          "Dead": "0", 
          "Description": "Six people were wounded after guns were fired following an argument at a housing complex. Three people were arrested.", 
          "Injured": "6", 
          "State": "Minnesota", 
          "Total": "6"
        }, 
        {
          "Date": "02/05/2018", 
          "Dead": "1", 
          "Description": "One person was killed and four were wounded following a shooting outside of a Brooklyn apartment complex.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "5"
        }, 
        {
          "Date": "01/05/2018", 
          "Dead": "0", 
          "Description": "Five people were injured in a shooting.", 
          "Injured": "5", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "30/04/2018", 
          "Dead": "0", 
          "Description": "A man pulled out a gun after being punched during an after-party at a club and wounded four people.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "30/04/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a drive-by shooting.", 
          "Injured": "4", 
          "State": "District of Columbia", 
          "Total": "4"
        }, 
        {
          "Date": "29/04/2018", 
          "Dead": "0", 
          "Description": "A man shot and wounded two people at an apartment complex. Two more people were wounded by gunfire while trying to disarm the shooter. The shooter was arrested.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "29/04/2018", 
          "Dead": "2", 
          "Description": "Two people were killed and two others were injured in a shooting in a parking lot outside a motorcycle club.", 
          "Injured": "2", 
          "State": "Washington", 
          "Total": "4"
        }, 
        {
          "Date": "29/04/2018", 
          "Dead": "1", 
          "Description": "A man killed one person and wounded three others in a shooting. He was later arrested by police.", 
          "Injured": "3", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "29/04/2018", 
          "Dead": "1", 
          "Description": "A man killed one person and injured three others in a shooting at a nightclub. He was later arrested by police.", 
          "Injured": "3", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "28/04/2018", 
          "Dead": "0", 
          "Description": "Five were injured in a shooting following an argument at a party.", 
          "Injured": "5", 
          "State": "North Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "25/04/2018", 
          "Dead": "0", 
          "Description": "Four people were injured after men stepped out of a truck and began shooting at them.", 
          "Injured": "4", 
          "State": "Arkansas", 
          "Total": "4"
        }, 
        {
          "Date": "25/04/2018", 
          "Dead": "3", 
          "Description": "Three people were killed and one was wounded after being shot in a home. A suspect was later taken into custody by police.", 
          "Injured": "1", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "24/04/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "22/04/2018", 
          "Dead": "1", 
          "Description": "After a domestic issue, a man went on a shooting spree that resulted in one death and five people being injured by gunfire. The man was arrested.", 
          "Injured": "5", 
          "State": "Louisiana", 
          "Total": "6"
        }, 
        {
          "Date": "22/04/2018", 
          "Dead": "4", 
          "Description": "Nashville Waffle House shooting: A gunman entered a Waffle House, where he killed four people and injured two others. He was later taken into custody.", 
          "Injured": "2", 
          "State": "Tennessee", 
          "Total": "6"
        }, 
        {
          "Date": "21/04/2018", 
          "Dead": "2", 
          "Description": "A man killed two people and wounded two others after being kicked out of a party.", 
          "Injured": "2", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "20/04/2018", 
          "Dead": "1", 
          "Description": "A gunman shot six men standing near each, killing one and injuring five.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "18/04/2018", 
          "Dead": "4", 
          "Description": "A man killed a mother and two of her children, wounded her other three children, and then killed himself.", 
          "Injured": "3", 
          "State": "North Carolina", 
          "Total": "7"
        }, 
        {
          "Date": "15/04/2018", 
          "Dead": "0", 
          "Description": "Six people in a tattoo parlor were injured when they were shot at by a person in a pickup truck outside the business.", 
          "Injured": "6", 
          "State": "Louisiana", 
          "Total": "6"
        }, 
        {
          "Date": "09/04/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting outside an apartment complex.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "08/04/2018", 
          "Dead": "1", 
          "Description": "Several people fired hundreds of rounds outside of a bar, killing one person and injuring three others. Three men were arrested.", 
          "Injured": "3", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "08/04/2018", 
          "Dead": "2", 
          "Description": "Two people were killed and two were wounded in a shooting in the Liberty City neighborhood of Miami.", 
          "Injured": "2", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "06/04/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded in a shooting.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "06/04/2018", 
          "Dead": "1", 
          "Description": "One person was killed and three others were injured in a shooting.", 
          "Injured": "3", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "04/04/2018", 
          "Dead": "2", 
          "Description": "Two people were killed and two others were injured in a shooting.", 
          "Injured": "2", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "03/04/2018", 
          "Dead": "1", 
          "Description": "YouTube headquarters shooting: A woman approached an outdoor patio at YouTube Headquarters and wounded three people before committing suicide, a fourth person was injured in the evacuation.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "02/04/2018", 
          "Dead": "1", 
          "Description": "One person was killed and three others were wounded in a drive-by shooting outside of a home.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "01/04/2018", 
          "Dead": "1", 
          "Description": "A fifteen-year-old was killed and four other people were wounded in a shooting at a spring break party.", 
          "Injured": "4", 
          "State": "Alabama", 
          "Total": "5"
        }, 
        {
          "Date": "01/04/2018", 
          "Dead": "0", 
          "Description": "Five people were injured in a shooting at a house party.", 
          "Injured": "5", 
          "State": "Michigan", 
          "Total": "5"
        }, 
        {
          "Date": "31/03/2018", 
          "Dead": "0", 
          "Description": "Five people were wounded in a drive-by shooting.", 
          "Injured": "5", 
          "State": "New Jersey", 
          "Total": "5"
        }, 
        {
          "Date": "29/03/2018", 
          "Dead": "1", 
          "Description": "One person was killed and three others were injured in a shooting at an apartment complex. One person was arrested.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "29/03/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded in a shooting inside a business.", 
          "Injured": "4", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "24/03/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a drive-by shooting directed at a traveling rap group. The shooting may have been gang-related.", 
          "Injured": "4", 
          "State": "Utah", 
          "Total": "4"
        }, 
        {
          "Date": "21/03/2018", 
          "Dead": "1", 
          "Description": "A police officer, the suspect, and four others were all wounded by gunfire. One of the wounded victims later died of his injuries.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "17/03/2018", 
          "Dead": "0", 
          "Description": "Seven people were injured in a shooting in a nightclub.", 
          "Injured": "7", 
          "State": "Kentucky", 
          "Total": "7"
        }, 
        {
          "Date": "17/03/2018", 
          "Dead": "0", 
          "Description": "Four men were wounded in a shooting in a strip club, which seemed to stem from an earlier incident at a different nightclub.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "13/03/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a drive-by shooting. Two people were later arrested.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "12/03/2018", 
          "Dead": "0", 
          "Description": "Four people were injured when shots were fired through the garage door of the garage they were in.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "11/03/2018", 
          "Dead": "1", 
          "Description": "Three people were wounded and one other was fatally injured in a nightclub shooting following a verbal argument.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "11/03/2018", 
          "Dead": "0", 
          "Description": "Six people were wounded when a man began shooting at a house party. He was arrested.", 
          "Injured": "6", 
          "State": "Indiana", 
          "Total": "6"
        }, 
        {
          "Date": "11/03/2018", 
          "Dead": "0", 
          "Description": "Five people were injured in a shooting following an argument at a party.", 
          "Injured": "5", 
          "State": "Michigan", 
          "Total": "5"
        }, 
        {
          "Date": "09/03/2018", 
          "Dead": "5", 
          "Description": "Yountville Shooting: A man entered the Veterans Home of California and held three staff members hostage. He killed the three staff members (and the unborn child of one of the staff members, who was pregnant) before killing himself in a murder\ufffdCsuicide.", 
          "Injured": "0", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "09/03/2018", 
          "Dead": "3", 
          "Description": "A man killed three people and injured one other in a shooting at a restaurant and bar. He was arrested two days later.", 
          "Injured": "1", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "07/03/2018", 
          "Dead": "2", 
          "Description": "A man entered a restaurant and killed the restaurant's owner and wounded three others. He was later taken into custody by police.", 
          "Injured": "2", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "04/03/2018", 
          "Dead": "1", 
          "Description": "One man was killed and four other people were injured in a shooting at a party.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "03/03/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "03/03/2018", 
          "Dead": "1", 
          "Description": "One person was killed and three were injured in a shooting or series of shootings in a close vicinity in Brooklyn.", 
          "Injured": "3", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "27/02/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded after being shot by at least three shooters.", 
          "Injured": "4", 
          "State": "Connecticut", 
          "Total": "4"
        }, 
        {
          "Date": "26/02/2018", 
          "Dead": "5", 
          "Description": "A man shot and killed the mother of his child and another woman who was sitting with her in a car at a gas station. He then killed another man at the gas station before returning home and killing his cousin. After being urged by his mother to turn himself in to police, the suspect killed himself.", 
          "Injured": "0", 
          "State": "Michigan", 
          "Total": "5"
        }, 
        {
          "Date": "23/02/2018", 
          "Dead": "1", 
          "Description": "One person was killed and three were injured after a drug deal.", 
          "Injured": "3", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "18/02/2018", 
          "Dead": "0", 
          "Description": "Five people were injured in a shooting outside a Texas Roadhouse.", 
          "Injured": "5", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "17/02/2018", 
          "Dead": "1", 
          "Description": "One person was killed and seven others were injured at a party in what police suspect to be a gang-related shooting.", 
          "Injured": "7", 
          "State": "Kansas", 
          "Total": "8"
        }, 
        {
          "Date": "17/02/2018", 
          "Dead": "0", 
          "Description": "Five people were wounded in a shooting outside a nightclub.", 
          "Injured": "5", 
          "State": "Tennessee", 
          "Total": "5"
        }, 
        {
          "Date": "16/02/2018", 
          "Dead": "1", 
          "Description": "One person was killed and three were injured inside a home. The man who died had been receiving threats after falling out with a gang. Two people were arrested.", 
          "Injured": "3", 
          "State": "Oklahoma", 
          "Total": "4"
        }, 
        {
          "Date": "14/02/2018", 
          "Dead": "17", 
          "Description": "Stoneman Douglas High School shooting: A former student of Marjory Stoneman Douglas High School entered the school, killed seventeen people, and wounded seventeen others. He was taken into custody by police.", 
          "Injured": "17", 
          "State": "Florida", 
          "Total": "34"
        }, 
        {
          "Date": "13/02/2018", 
          "Dead": "3", 
          "Description": "A series of shootings left three people dead and five others wounded during the Mardi Gras celebration in New Orleans.", 
          "Injured": "5", 
          "State": "Louisiana", 
          "Total": "8"
        }, 
        {
          "Date": "11/02/2018", 
          "Dead": "4", 
          "Description": "Three women were killed and three police officers were wounded before a gunman killed himself in a murder\ufffdCsuicide in a home.", 
          "Injured": "3", 
          "State": "Michigan", 
          "Total": "7"
        }, 
        {
          "Date": "10/02/2018", 
          "Dead": "5", 
          "Description": "A gunman killed two people in a home and two other people in an apartment building before killing himself in a murder\ufffdCsuicide.", 
          "Injured": "0", 
          "State": "Kentucky", 
          "Total": "5"
        }, 
        {
          "Date": "07/02/2018", 
          "Dead": "3", 
          "Description": "A man killed two people and injured three others in a series of shootings before being shot and killed by a police officer.", 
          "Injured": "3", 
          "State": "Florida", 
          "Total": "6"
        }, 
        {
          "Date": "05/02/2018", 
          "Dead": "2", 
          "Description": "A sheriff's deputy was killed and three detectives and a passerby were wounded in a shooting. The suspect was killed by police.", 
          "Injured": "4", 
          "State": "Colorado", 
          "Total": "6"
        }, 
        {
          "Date": "03/02/2018", 
          "Dead": "1", 
          "Description": "One person was killed and five others were injured in a shooting at a sports bar.", 
          "Injured": "5", 
          "State": "Ohio", 
          "Total": "6"
        }, 
        {
          "Date": "31/01/2018", 
          "Dead": "0", 
          "Description": "Three people in a car and a man standing at a bus stop were injured when they were shot at by someone in another vehicle.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "28/01/2018", 
          "Dead": "5", 
          "Description": "A man shot his ex-girlfriend and three other people at a car wash. The suspect also sustained a gunshot injury, suspected to be self-inflicted, and later died of his injuries.", 
          "Injured": "0", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "28/01/2018", 
          "Dead": "4", 
          "Description": "Four men were killed in a shooting in an apartment.", 
          "Injured": "0", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "28/01/2018", 
          "Dead": "2", 
          "Description": "Two were killed and three people were injured in a shooting at a bar.", 
          "Injured": "3", 
          "State": "Indiana", 
          "Total": "5"
        }, 
        {
          "Date": "27/01/2018", 
          "Dead": "0", 
          "Description": "Five people were injured in a gang-related drive-by shooting.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "27/01/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded in a fight in and outside a club.", 
          "Injured": "4", 
          "State": "Kentucky", 
          "Total": "4"
        }, 
        {
          "Date": "25/01/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting.", 
          "Injured": "4", 
          "State": "District of Columbia", 
          "Total": "4"
        }, 
        {
          "Date": "23/01/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a drive-by shooting.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "23/01/2018", 
          "Dead": "2", 
          "Description": "Marshall County High School Shooting: A fifteen-year-old student killed two other students and injured sixteen others before discarding his weapon and attempting to hide among other students. He was apprehended by police.", 
          "Injured": "16", 
          "State": "Kentucky", 
          "Total": "18"
        }, 
        {
          "Date": "21/01/2018", 
          "Dead": "0", 
          "Description": "Four children were injured in a shooting. Two teenage suspects were arrested by police.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "21/01/2018", 
          "Dead": "0", 
          "Description": "Four people were injured after being shot near the entrance to a party.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "17/01/2018", 
          "Dead": "1", 
          "Description": "A man killed one person and injured three others after determining them to be acquaintances of a person who stole his favorite pistol. The man was later taken into custody.", 
          "Injured": "3", 
          "State": "District of Columbia", 
          "Total": "4"
        }, 
        {
          "Date": "15/01/2018", 
          "Dead": "0", 
          "Description": "Five people were injured in a gang-related drive-by shooting believed to be related to a murder that had happened the previous day. Two suspects were arrested.", 
          "Injured": "5", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "14/01/2018", 
          "Dead": "1", 
          "Description": "One person was killed and four were injured in a shooting following a fight at a biker club party.", 
          "Injured": "4", 
          "State": "Alabama", 
          "Total": "5"
        }, 
        {
          "Date": "14/01/2018", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting at a hotel. A suspect was arrested.", 
          "Injured": "4", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "12/01/2018", 
          "Dead": "3", 
          "Description": "A man wounded his stepmother and killed her two daughters before highjacking a car, killing the driver and wounding the passenger. A suspect was arrested after abandoning the car.", 
          "Injured": "2", 
          "State": "Tennessee", 
          "Total": "5"
        }, 
        {
          "Date": "11/01/2018", 
          "Dead": "2", 
          "Description": "Four people were discovered in a vehicle, two deceased and two wounded, after police responded to calls of an abandoned car.", 
          "Injured": "2", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "07/01/2018", 
          "Dead": "1", 
          "Description": "A shooting on US Highway 29 led to the shooting of another person at a local hospital. One person was killed and five others were wounded. Three suspects were arrested.", 
          "Injured": "5", 
          "State": "Alabama", 
          "Total": "6"
        }, 
        {
          "Date": "07/01/2018", 
          "Dead": "0", 
          "Description": "Four people were wounded while leaving a private party.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "05/01/2018", 
          "Dead": "0", 
          "Description": "Six people were wounded in a drive-by shooting behind a bar.", 
          "Injured": "6", 
          "State": "Mississippi", 
          "Total": "6"
        }, 
        {
          "Date": "04/01/2018", 
          "Dead": "1", 
          "Description": "A 33-year-old was killed and three others wounded in a common area of an apartment complex.", 
          "Injured": "3", 
          "State": "Arkansas", 
          "Total": "4"
        }, 
        {
          "Date": "01/01/2018", 
          "Dead": "1", 
          "Description": "A 21-year-old was killed and three others were wounded shortly after midnight at a New Year's Eve party.", 
          "Injured": "3", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "29/12/2019", 
          "Dead": "3", 
          "Description": "West Freeway Church of Christ shooting: Two people were killed inside the West Freeway Church of Christ by a gunman before he was shot and killed by a member of the security team. The attack was livestreamed, leading to numerous social media posts showing the shooting in progress.", 
          "Injured": "0", 
          "State": "Texas", 
          "Total": "3"
        }, 
        {
          "Date": "29/12/2019", 
          "Dead": "0", 
          "Description": "Five people were shot outside a home after returning from a bar in Modesto where they had been involved in an altercation.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "29/12/2019", 
          "Dead": "0", 
          "Description": "Five women aged 18 to 32 years old were injured by gunfire after the home they were in was shot at by an unknown person.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "29/12/2019", 
          "Dead": "1", 
          "Description": "After an argument escalated on a front porch, four people were wounded by gunfire, with one man dying later at the hospital.", 
          "Injured": "3", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "27/12/2019", 
          "Dead": "2", 
          "Description": "Two people were killed and seven injured in a drive-by shooting at a music video set.", 
          "Injured": "7", 
          "State": "Texas", 
          "Total": "9"
        }, 
        {
          "Date": "27/12/2019", 
          "Dead": "0", 
          "Description": "Officers responding to a call about an individual shot arrived at a house party and found four teenagers injured.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "27/12/2019", 
          "Dead": "1", 
          "Description": "Officers responding to a call of suspicious circumstances near an intersection found one man killed and two others and a woman injured.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "26/12/2019", 
          "Dead": "0", 
          "Description": "Five people were wounded by gunfire outside a night club, with an additional three injured by the resulting building damage and chaos. The shooting occurred after an altercation escalated out onto the street.", 
          "Injured": "5", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "25/12/2019", 
          "Dead": "1", 
          "Description": "Police responding to reports of shots fired discovered four wounded victims, one of which died later at the hospital.", 
          "Injured": "3", 
          "State": "Iowa", 
          "Total": "4"
        }, 
        {
          "Date": "25/12/2019", 
          "Dead": "1", 
          "Description": "One person was killed and three injured in a shooting outside a bar, after an earlier argument in a restaurant.", 
          "Injured": "3", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "25/12/2019", 
          "Dead": "0", 
          "Description": "Four people wounded by gunfire were discovered by police after responding to a house party.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "24/12/2019", 
          "Dead": "0", 
          "Description": "Six people were wounded in a shooting in which the perpetrator was believed to have exited a vehicle and opened fire before leaving in it.", 
          "Injured": "6", 
          "State": "North Carolina", 
          "Total": "6"
        }, 
        {
          "Date": "24/12/2019", 
          "Dead": "0", 
          "Description": "Shooters wearing ski masks exited a vehicle and wounded four people before fleeing.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "22/12/2019", 
          "Dead": "0", 
          "Description": "Thirteen people were shot at a party that was held to memorialize a victim of an earlier shooting, at least one was a teenager.", 
          "Injured": "13", 
          "State": "Illinois", 
          "Total": "13"
        }, 
        {
          "Date": "22/12/2019", 
          "Dead": "0", 
          "Description": "Seven people were wounded in an early morning shooting, including two 17-year-olds.", 
          "Injured": "7", 
          "State": "Maryland", 
          "Total": "7"
        }, 
        {
          "Date": "21/12/2019", 
          "Dead": "1", 
          "Description": "One person was killed and six injured in an apartment complex after a drive-by shooting.", 
          "Injured": "6", 
          "State": "Mississippi", 
          "Total": "7"
        }, 
        {
          "Date": "20/12/2019", 
          "Dead": "2", 
          "Description": "Two people were killed and a police officer and bystander injured at the local Sanitation Department after a fight escalated.", 
          "Injured": "2", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "20/12/2019", 
          "Dead": "2", 
          "Description": "Two people were killed and two were injured in a late night double homicide.", 
          "Injured": "2", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "19/12/2019", 
          "Dead": "2", 
          "Description": "A resident at Babcock Village Apartments shot two employees, one fatally, and one resident before killing himself.", 
          "Injured": "2", 
          "State": "Rhode Island", 
          "Total": "4"
        }, 
        {
          "Date": "18/12/2019", 
          "Dead": "0", 
          "Description": "Four people were shot at the South Park Mall.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "17/12/2019", 
          "Dead": "4", 
          "Description": "Three people are killed and one wounded in a shooting at the Emerald City Casino. The suspect was later killed by police at a different location.", 
          "Injured": "1", 
          "State": "Montana", 
          "Total": "5"
        }, 
        {
          "Date": "15/12/2019", 
          "Dead": "1", 
          "Description": "One man was killed and four others injured at an intersection early in the morning.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "5"
        }, 
        {
          "Date": "14/12/2019", 
          "Dead": "0", 
          "Description": "Four teenagers were wounded in a drive-by shooting at an apartment complex.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "12/12/2019", 
          "Dead": "1", 
          "Description": "One man was killed and three wounded in a business parking lot.", 
          "Injured": "3", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "10/12/2019", 
          "Dead": "6", 
          "Description": "2019 Jersey City shooting: Four people were killed, including a police officer, and another three were injured in an ambush style shootout by a man and woman who were killed by police. The suspects were Black Hebrew Israelites members and targeted a kosher grocery store.", 
          "Injured": "3", 
          "State": "New Jersey", 
          "Total": "9"
        }, 
        {
          "Date": "10/12/2019", 
          "Dead": "4", 
          "Description": "Four people were discovered dead in a home, in either by a murder-suicide or a quadruple homicide. A toddler was also in the home, unharmed.", 
          "Injured": "0", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "08/12/2019", 
          "Dead": "2", 
          "Description": "Two men were killed and three injured at an apartment building. The incident was originally reported as a home invasion, although the account was not confirmed.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "08/12/2019", 
          "Dead": "1", 
          "Description": "Five people were shot outside a local bar, with one man dying of his injuries at the hospital.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "06/12/2019", 
          "Dead": "4", 
          "Description": "Naval Air Station Pensacola shooting: A man killed three individuals and injured eight more at Naval Air Station Pensacola before being killed by police. A terrorist motive is suspected to be behind the attack.", 
          "Injured": "8", 
          "State": "Florida", 
          "Total": "12"
        }, 
        {
          "Date": "05/12/2019", 
          "Dead": "4", 
          "Description": "2019 Miramar shootout: Four people are dead and one injured after a pair of men rob a jewelry store in Coral Gables, injuring the clerk, then carjack a UPS truck and lead police on a chase that ended in a shootout in Miramar that killed the UPS driver, a bystander, and the suspects.", 
          "Injured": "1", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "04/12/2019", 
          "Dead": "3", 
          "Description": "22-year-old Gabriel Romero, a US Navy sailor and submarine crewman, randomly opened fire just minutes after starting his shift for routine guard duty at at Joint Base Pearl Harbor\ufffdCHickam. He opened fire on a group of civilian workers, killing two and wounded another, before immediately shooting himself. The motive is thought to be a toxic cultural environment in the USN, particularly among submarine crewman.", 
          "Injured": "1", 
          "State": "Hawaii", 
          "Total": "4"
        }, 
        {
          "Date": "04/12/2019", 
          "Dead": "2", 
          "Description": "Two people were killed and two wounded in an apartment complex.", 
          "Injured": "2", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "01/12/2019", 
          "Dead": "1", 
          "Description": "One person was killed and three police officers wounded when a home invasion turned into a hostage situation.", 
          "Injured": "3", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "01/12/2019", 
          "Dead": "2", 
          "Description": "One woman was killed and three others wounded, including a perpetrator, after an argument escalated at a nightclub.", 
          "Injured": "3", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "01/12/2019", 
          "Dead": "2", 
          "Description": "Two people were killed and two injured at an intersection hours after the first mass shooting in the city.", 
          "Injured": "2", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "01/12/2019", 
          "Dead": "1", 
          "Description": "One person was killed and four were injured in a shooting in Aurora, Illinois.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "01/12/2019", 
          "Dead": "0", 
          "Description": "2019 New Orleans shooting: Ten people were shot in a densely populated area with heavy police presence at a time when tens of thousands of tourists were downtown for the Bayou Classic football game.", 
          "Injured": "10", 
          "State": "Louisiana", 
          "Total": "10"
        }, 
        {
          "Date": "29/11/2019", 
          "Dead": "0", 
          "Description": "Seven people were shot at a nightclub in the early morning.", 
          "Injured": "7", 
          "State": "Texas", 
          "Total": "7"
        }, 
        {
          "Date": "27/11/2019", 
          "Dead": "0", 
          "Description": "Five people were wounded including two children aged 10 and 15.", 
          "Injured": "5", 
          "State": "New York", 
          "Total": "5"
        }, 
        {
          "Date": "25/11/2019", 
          "Dead": "2", 
          "Description": "Two men were killed and two others wounded in a drive-by shooting. One suspect was arrested after the car crashed into a parked police car.", 
          "Injured": "2", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "24/11/2019", 
          "Dead": "0", 
          "Description": "Six people were wounded at a warehouse party after an argument escalated and the perpetrator opened fire.", 
          "Injured": "6", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "24/11/2019", 
          "Dead": "2", 
          "Description": "Two people were killed and two others injured in an early morning shooting at a club.", 
          "Injured": "2", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "24/11/2019", 
          "Dead": "1", 
          "Description": "One person was killed and four others injured in a drive-by shooting after being made to leave a club following an argument.", 
          "Injured": "4", 
          "State": "Alabama", 
          "Total": "5"
        }, 
        {
          "Date": "23/11/2019", 
          "Dead": "1", 
          "Description": "One person was killed and six injured after an argument at a club escalated and the perpetrator began to fire randomly.", 
          "Injured": "6", 
          "State": "Louisiana", 
          "Total": "7"
        }, 
        {
          "Date": "23/11/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded at an outdoor party after a fight broke out.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "21/11/2019", 
          "Dead": "0", 
          "Description": "Five people were wounded randomly as a man drove down a road and opened fire on pedestrians.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "21/11/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded in an apartment complex during a large gathering.", 
          "Injured": "4", 
          "State": "Washington", 
          "Total": "4"
        }, 
        {
          "Date": "20/11/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded in a shooting.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "18/11/2019", 
          "Dead": "1", 
          "Description": "One person was killed and three people were injured in two homes on one street.", 
          "Injured": "3", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "17/11/2019", 
          "Dead": "4", 
          "Description": "2019 Fresno shooting: Ten people were shot, four fatally, at a football watch party.", 
          "Injured": "6", 
          "State": "California", 
          "Total": "10"
        }, 
        {
          "Date": "17/11/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded outside a home by a drive-by shooting.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "16/11/2019", 
          "Dead": "5", 
          "Description": "A man killed his estranged wife and their three children, wounding a fourth child, before killing himself.", 
          "Injured": "1", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "14/11/2019", 
          "Dead": "3", 
          "Description": "Saugus High School shooting: A high school student shot five classmates, two fatally, before shooting himself; he died the next day in the hospital.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "11/11/2019", 
          "Dead": "0", 
          "Description": "Four people were shot randomly along a road.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "10/11/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded outside a night club after a disturbance escalated.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "10/11/2019", 
          "Dead": "1", 
          "Description": "A woman was killed and four others were wounded during an early morning shooting at a strip club.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "5"
        }, 
        {
          "Date": "10/11/2019", 
          "Dead": "0", 
          "Description": "An adult male and three children, aged 12 through 13-years-old, were wounded by an unknown perpetrator while filming a rap music video.", 
          "Injured": "4", 
          "State": "Arkansas", 
          "Total": "4"
        }, 
        {
          "Date": "09/11/2019", 
          "Dead": "0", 
          "Description": "Two vehicles were shot at, wounding three adults and a 10-year-old child.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "09/11/2019", 
          "Dead": "0", 
          "Description": "Four men were wounded in a drive-by shooting in a parking lot.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "07/11/2019", 
          "Dead": "2", 
          "Description": "An argument escalated and left one man injured and another dead. The shooter then engaged in a shootout with officers injuring two officers before being killed.", 
          "Injured": "3", 
          "State": "Georgia", 
          "Total": "5"
        }, 
        {
          "Date": "04/11/2019", 
          "Dead": "1", 
          "Description": "A man was killed and three other people were injured when a person opened fire at a group in a driveway.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "03/11/2019", 
          "Dead": "0", 
          "Description": "Officers responding to a Shotspotter alert found four people wounded at a nightclub.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "03/11/2019", 
          "Dead": "1", 
          "Description": "A man shot at five men working on a barn, killing one and injured three others.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "02/11/2019", 
          "Dead": "1", 
          "Description": "One person was killed and five injured at an after hours party.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "5"
        }, 
        {
          "Date": "02/11/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded in a shooting.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "01/11/2019", 
          "Dead": "0", 
          "Description": "Five teenagers were wounded at a Halloween party in a vacant home.", 
          "Injured": "5", 
          "State": "Arizona", 
          "Total": "5"
        }, 
        {
          "Date": "01/11/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded in a drive-by shooting outside a night club.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "31/10/2019", 
          "Dead": "5", 
          "Description": "Orinda shooting: At an overnight Halloween party attended by over 100 people, five people were killed, and four more wounded by gunfire.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "9"
        }, 
        {
          "Date": "29/10/2019", 
          "Dead": "3", 
          "Description": "Three men were killed and nine injured at a Halloween party at a residential home.", 
          "Injured": "9", 
          "State": "California", 
          "Total": "12"
        }, 
        {
          "Date": "28/10/2019", 
          "Dead": "1", 
          "Description": "A man was killed and two adults and a 17-year-old were injured in front of a store.", 
          "Injured": "3", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "27/10/2019", 
          "Dead": "0", 
          "Description": "Four men were injured in a random drive by shooting.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "27/10/2019", 
          "Dead": "1", 
          "Description": "One man was killed and four others were injured at a house party.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "5"
        }, 
        {
          "Date": "27/10/2019", 
          "Dead": "2", 
          "Description": "Two men were killed and ten others injured at a large party to celebrate Texas A&M University's homecoming weekend.", 
          "Injured": "10", 
          "State": "Texas", 
          "Total": "12"
        }, 
        {
          "Date": "26/10/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded in a late night shooting.", 
          "Injured": "4", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "24/10/2019", 
          "Dead": "2", 
          "Description": "Two people were killed and two injured at a home late at night.", 
          "Injured": "2", 
          "State": "Oklahoma", 
          "Total": "4"
        }, 
        {
          "Date": "22/10/2019", 
          "Dead": "1", 
          "Description": "One person was killed and three wounded at an apartment complex late at night.", 
          "Injured": "3", 
          "State": "Oklahoma", 
          "Total": "4"
        }, 
        {
          "Date": "21/10/2019", 
          "Dead": "0", 
          "Description": "Four people were shot at random and wounded by a lone gunman.", 
          "Injured": "4", 
          "State": "South Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "20/10/2019", 
          "Dead": "1", 
          "Description": "A woman was killed and three others injured in an early morning shooting.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "19/10/2019", 
          "Dead": "0", 
          "Description": "Four people were shot in a drive-by shooting.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "19/10/2019", 
          "Dead": "1", 
          "Description": "One man was killed and two others and a woman were injured in an early morning shooting.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "15/10/2019", 
          "Dead": "2", 
          "Description": "A man killed his 11-year-old daughter and wounded her mother and the mother's boyfriend before committing suicide.", 
          "Injured": "2", 
          "State": "Oklahoma", 
          "Total": "4"
        }, 
        {
          "Date": "15/10/2019", 
          "Dead": "0", 
          "Description": "Three teenagers and an adult male were injured while sitting on a porch.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "14/10/2019", 
          "Dead": "6", 
          "Description": "2019 R\ufffd\ufffdo Piedras shooting: Six people were killed in a shootout at a housing project.", 
          "Injured": "0", 
          "State": "Puerto Rico", 
          "Total": "6"
        }, 
        {
          "Date": "14/10/2019", 
          "Dead": "3", 
          "Description": "A woman killed her two children and her husband before attempting to commit suicide.", 
          "Injured": "1", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "13/10/2019", 
          "Dead": "0", 
          "Description": "One woman and three men were wounded outside a bar.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "13/10/2019", 
          "Dead": "0", 
          "Description": "A 14-year-old boy and five men were wounded while standing on the street.", 
          "Injured": "6", 
          "State": "Pennsylvania", 
          "Total": "6"
        }, 
        {
          "Date": "12/10/2019", 
          "Dead": "4", 
          "Description": "Four people were killed and three injured at a social club.", 
          "Injured": "3", 
          "State": "New York", 
          "Total": "7"
        }, 
        {
          "Date": "12/10/2019", 
          "Dead": "0", 
          "Description": "Four men were wounded after a brawl near a gas station.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "12/10/2019", 
          "Dead": "1", 
          "Description": "A man was killed and three others injured.", 
          "Injured": "3", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "12/10/2019", 
          "Dead": "5", 
          "Description": "Four people were killed and one injured after a neighbor entered their apartment and opened fire. The fifth victim died of her injuries later in hospital.", 
          "Injured": "0", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "12/10/2019", 
          "Dead": "1", 
          "Description": "One person was killed and five injured after an argument escalated in a local bar.", 
          "Injured": "5", 
          "State": "Michigan", 
          "Total": "6"
        }, 
        {
          "Date": "10/10/2019", 
          "Dead": "0", 
          "Description": "Five men were wounded after a driver was angered over a game of dice.", 
          "Injured": "5", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "10/10/2019", 
          "Dead": "1", 
          "Description": "A man was killed while another man and two children, ages 10 and 14, were wounded.", 
          "Injured": "3", 
          "State": "Wisconsin", 
          "Total": "4"
        }, 
        {
          "Date": "10/10/2019", 
          "Dead": "2", 
          "Description": "Two people were killed and two wounded at a mobile home.", 
          "Injured": "2", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "09/10/2019", 
          "Dead": "1", 
          "Description": "A man was killed and three other individuals, including a 15-year-old boy, were injured.", 
          "Injured": "3", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "07/10/2019", 
          "Dead": "5", 
          "Description": "A family of five, two adults and three children, were found shot to death in their home in an apparent murder-suicide.", 
          "Injured": "0", 
          "State": "Massachusetts", 
          "Total": "5"
        }, 
        {
          "Date": "06/10/2019", 
          "Dead": "0", 
          "Description": "An argument escalated during a large gathering outside a home, and four people were wounded.", 
          "Injured": "4", 
          "State": "Colorado", 
          "Total": "4"
        }, 
        {
          "Date": "06/10/2019", 
          "Dead": "4", 
          "Description": "Four people were killed and another five people wounded in a shooting at a bar.", 
          "Injured": "5", 
          "State": "Kansas", 
          "Total": "9"
        }, 
        {
          "Date": "06/10/2019", 
          "Dead": "0", 
          "Description": "An argument inside of an American Legion bar escalated, and five men were shot as they left the bar.", 
          "Injured": "5", 
          "State": "Indiana", 
          "Total": "5"
        }, 
        {
          "Date": "05/10/2019", 
          "Dead": "4", 
          "Description": "Two adults and two children were discovered dead in a home.", 
          "Injured": "0", 
          "State": "Oklahoma", 
          "Total": "4"
        }, 
        {
          "Date": "03/10/2019", 
          "Dead": "1", 
          "Description": "Three people were wounded and a fourth later died at the hospital in a shooting.", 
          "Injured": "3", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "03/10/2019", 
          "Dead": "1", 
          "Description": "A man was killed and three others wounded.", 
          "Injured": "3", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "01/10/2019", 
          "Dead": "0", 
          "Description": "Four men were wounded after two cars drove by a crowd of people and opened fire.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "29/09/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded after an individual fired a shotgun towards a group of people at a house party.", 
          "Injured": "4", 
          "State": "Kansas", 
          "Total": "4"
        }, 
        {
          "Date": "29/09/2019", 
          "Dead": "0", 
          "Description": "Four people were injured while attending a large party after an individual fired into the air.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "29/09/2019", 
          "Dead": "0", 
          "Description": "Four young women were injured after an individual fired into a home were a house party was being held.", 
          "Injured": "4", 
          "State": "Wisconsin", 
          "Total": "4"
        }, 
        {
          "Date": "29/09/2019", 
          "Dead": "1", 
          "Description": "A man was killed and three injured after unknown individuals attempted to crash a house party and began shooting.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "29/09/2019", 
          "Dead": "4", 
          "Description": "Four men were shot and killed at an apartment complex after a disturbance between roommates escalated.", 
          "Injured": "0", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "27/09/2019", 
          "Dead": "3", 
          "Description": "A man killed his mother then drove to a gas station where he attempted to kidnap a clerk then killed a man and injured the clerk before robbing another gas station and committing suicide.", 
          "Injured": "1", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "24/09/2019", 
          "Dead": "1", 
          "Description": "A 17-year-old boy was killed and three adults were injured in the Lower West Side.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "23/09/2019", 
          "Dead": "2", 
          "Description": "Two men were killed and a woman and man injured in an early morning shooting.", 
          "Injured": "2", 
          "State": "Indiana", 
          "Total": "4"
        }, 
        {
          "Date": "22/09/2019", 
          "Dead": "0", 
          "Description": "Five people were wounded at The SPOTT Lifestyle and Swingers Club.", 
          "Injured": "5", 
          "State": "Missouri", 
          "Total": "5"
        }, 
        {
          "Date": "21/09/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded after shot were fired into their car.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "21/09/2019", 
          "Dead": "0", 
          "Description": "Three adults and three juveniles were injured after a fight escalated.", 
          "Injured": "6", 
          "State": "Indiana", 
          "Total": "6"
        }, 
        {
          "Date": "21/09/2019", 
          "Dead": "2", 
          "Description": "Ten people were shot, two fatally, during a bar fight that escalated.", 
          "Injured": "8", 
          "State": "South Carolina", 
          "Total": "10"
        }, 
        {
          "Date": "21/09/2019", 
          "Dead": "1", 
          "Description": "A man was killed and three women injured in an early morning shooting.", 
          "Injured": "3", 
          "State": "Indiana", 
          "Total": "4"
        }, 
        {
          "Date": "20/09/2019", 
          "Dead": "1", 
          "Description": "Six people were shot, one fatally, at an intersection in the Mid-City Area.", 
          "Injured": "5", 
          "State": "Louisiana", 
          "Total": "6"
        }, 
        {
          "Date": "19/09/2019", 
          "Dead": "1", 
          "Description": "A man was killed, and four others and a woman injured, in a possible drive-by in the Columbia Heights District.", 
          "Injured": "5", 
          "State": "Washington, D.C.", 
          "Total": "6"
        }, 
        {
          "Date": "18/09/2019", 
          "Dead": "3", 
          "Description": "Three men were killed and one injured after an argument about cigarettes escalated outside a West Garfield Park convenience store.", 
          "Injured": "1", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "18/09/2019", 
          "Dead": "2", 
          "Description": "A man and woman were killed, and two other women injured, in the Wilmington neighborhood after an individual shot into a crowd of people.", 
          "Injured": "2", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "16/09/2019", 
          "Dead": "2", 
          "Description": "Two adults killed, two juveniles injured in east Cheyenne shooting.", 
          "Injured": "2", 
          "State": "Wyoming", 
          "Total": "4"
        }, 
        {
          "Date": "14/09/2019", 
          "Dead": "0", 
          "Description": "Four individuals were wounded after an individual opened fire.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "14/09/2019", 
          "Dead": "2", 
          "Description": "Responding police officers discovered a car covered in gunshots, and discovered a deceased male and two men and a female injured. One of the injured men later died.", 
          "Injured": "2", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "14/09/2019", 
          "Dead": "1", 
          "Description": "An argument escalated between two men outside a Laurel District bar, leading to a man killed and three men and a woman injured.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "13/09/2019", 
          "Dead": "0", 
          "Description": "A feud between two men led to four people being injured after it escalated in the North Fairmont neighborhood.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "12/09/2019", 
          "Dead": "1", 
          "Description": "One person was killed and three others injured at a local apartment complex.", 
          "Injured": "3", 
          "State": "New Mexico", 
          "Total": "4"
        }, 
        {
          "Date": "12/09/2019", 
          "Dead": "4", 
          "Description": "Two adults, a 16-year-old girl, and a 17-year-old boy were killed and two others injured in a mobile home park.", 
          "Injured": "2", 
          "State": "New Mexico", 
          "Total": "6"
        }, 
        {
          "Date": "10/09/2019", 
          "Dead": "0", 
          "Description": "Three young adult males and a 17-year-old boy were injured in the back of a house in the West Town neighborhood.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "08/09/2019", 
          "Dead": "1", 
          "Description": "A woman shot and killed one woman and injured three others after a continuation of an argument escalated.", 
          "Injured": "3", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "08/09/2019", 
          "Dead": "2", 
          "Description": "Two men were killed and three other individuals injured at a local convenience store, in the early morning.", 
          "Injured": "3", 
          "State": "South Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "07/09/2019", 
          "Dead": "3", 
          "Description": "A husband, wife and their five-year-old son were killed while the grandmother was injured in a targeted attack.", 
          "Injured": "1", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "04/09/2019", 
          "Dead": "2", 
          "Description": "A man and a seven-year-old girl were killed, and another man and a 11-year-old boy were injured after an argument apparently escalated.", 
          "Injured": "2", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "04/09/2019", 
          "Dead": "0", 
          "Description": "Three adults and a child were wounded in a shooting.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "02/09/2019", 
          "Dead": "5", 
          "Description": "A 14-year-old boy shot dead five family members \ufffdC two adults and three children \ufffdC in an Alabama residence. He confessed the crime to the police.", 
          "Injured": "0", 
          "State": "Alabama", 
          "Total": "5"
        }, 
        {
          "Date": "02/09/2019", 
          "Dead": "0", 
          "Description": "Four men were wounded in a drive-by shooting outside of a CTA Green Line station in Washington Park.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "02/09/2019", 
          "Dead": "2", 
          "Description": "Two men were killed and a woman and small child injured during a home invasion.", 
          "Injured": "2", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "01/09/2019", 
          "Dead": "0", 
          "Description": "Four people were shot at a private party at a Moose Lodge.", 
          "Injured": "4", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "01/09/2019", 
          "Dead": "0", 
          "Description": "Six adult males and a 15-year-old boy were wounded outside a kindergarten after an argument over a Lanett vs. Lafayette football game escalated.", 
          "Injured": "7", 
          "State": "Alabama", 
          "Total": "7"
        }, 
        {
          "Date": "01/09/2019", 
          "Dead": "0", 
          "Description": "Three men and a 17-year-old boy were wounded in a shooting.", 
          "Injured": "4", 
          "State": "Connecticut", 
          "Total": "4"
        }, 
        {
          "Date": "01/09/2019", 
          "Dead": "0", 
          "Description": "Four people were found shot in the early morning.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "31/08/2019", 
          "Dead": "8", 
          "Description": "Midland\ufffdCOdessa shooting: Eight people were killed, including the perpetrator, and 25 were wounded when a gunman opened fire on police and civilians after fleeing from a traffic stop.", 
          "Injured": "25", 
          "State": "Texas", 
          "Total": "33"
        }, 
        {
          "Date": "31/08/2019", 
          "Dead": "1", 
          "Description": "A man was killed and three others were injured at a University of North Carolina at Charlotte off-campus apartment complex.", 
          "Injured": "3", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "31/08/2019", 
          "Dead": "0", 
          "Description": "Four people were injured after an argument escalated.", 
          "Injured": "4", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "30/08/2019", 
          "Dead": "0", 
          "Description": "Ten people, ranging in age from 15 to 18, were injured at a high school football game after a fight escalated.", 
          "Injured": "10", 
          "State": "Alabama", 
          "Total": "10"
        }, 
        {
          "Date": "30/08/2019", 
          "Dead": "1", 
          "Description": "A woman was killed and three others were injured in a possible retaliation to a previous stabbing.", 
          "Injured": "3", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "29/08/2019", 
          "Dead": "1", 
          "Description": "A 16-year-old boy was killed, while two teen boys \ufffdC a 14-year-old and 15-year-old \ufffdC and an adult woman were injured.", 
          "Injured": "3", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "26/08/2019", 
          "Dead": "4", 
          "Description": "A man killed his wife, mother-in-law, and one of his three-year-old twin daughters before committing suicide.", 
          "Injured": "0", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "25/08/2019", 
          "Dead": "1", 
          "Description": "A 17-year-old boy was killed and three adults were wounded after a large group was fired upon.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "25/08/2019", 
          "Dead": "3", 
          "Description": "Police responded to a party due to a shots fired call and found three dead and four wounded.", 
          "Injured": "4", 
          "State": "New Mexico", 
          "Total": "7"
        }, 
        {
          "Date": "24/08/2019", 
          "Dead": "1", 
          "Description": "A man was killed and three were injured while attending a basketball tournament.", 
          "Injured": "3", 
          "State": "Massachusetts", 
          "Total": "4"
        }, 
        {
          "Date": "24/08/2019", 
          "Dead": "2", 
          "Description": "Two people were killed and three were injured, including a police officer, in a shooting. A suspect was apprehended.", 
          "Injured": "3", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "24/08/2019", 
          "Dead": "0", 
          "Description": "Seven people were wounded at a two-year-old's birthday party after a fight escalated.", 
          "Injured": "7", 
          "State": "Maryland", 
          "Total": "7"
        }, 
        {
          "Date": "23/08/2019", 
          "Dead": "1", 
          "Description": "An eight-year-old girl was killed and three others were wounded in a shooting near Soldan High School.", 
          "Injured": "3", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "23/08/2019", 
          "Dead": "2", 
          "Description": "Two men were killed and a man and woman were injured in a drive-by shooting.", 
          "Injured": "2", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "22/08/2019", 
          "Dead": "2", 
          "Description": "A man opened fire on patrons at a bar, killing two and wounding two others, after being kicked out.", 
          "Injured": "2", 
          "State": "South Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "22/08/2019", 
          "Dead": "0", 
          "Description": "Four people, including a social worker and a security guard were wounded in the Skid Row district.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "20/08/2019", 
          "Dead": "0", 
          "Description": "Four female students from Clark Atlanta University and Spelman College were wounded during a block party.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "18/08/2019", 
          "Dead": "0", 
          "Description": "Four teenagers were wounded after an argument escalated during a gathering in a hotel room.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "17/08/2019", 
          "Dead": "0", 
          "Description": "Seven people were injured in a shooting at a party.", 
          "Injured": "7", 
          "State": "Texas", 
          "Total": "7"
        }, 
        {
          "Date": "17/08/2019", 
          "Dead": "0", 
          "Description": "Police responded to a shooting call and discovered four people wounded.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "17/08/2019", 
          "Dead": "1", 
          "Description": "A woman was killed, and responding officers engaged with the suspect causing an officer, bystander and the suspect to be wounded.", 
          "Injured": "3", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "15/08/2019", 
          "Dead": "0", 
          "Description": "Four men and a teenage boy were wounded.", 
          "Injured": "5", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "15/08/2019", 
          "Dead": "2", 
          "Description": "Two people were killed and three wounded in a shooting near Alabama State University.", 
          "Injured": "3", 
          "State": "Alabama", 
          "Total": "5"
        }, 
        {
          "Date": "14/08/2019", 
          "Dead": "1", 
          "Description": "A man killed his girlfriend and injured five others and a dog before being wounded by police and arrested.", 
          "Injured": "5", 
          "State": "West Virginia", 
          "Total": "6"
        }, 
        {
          "Date": "14/08/2019", 
          "Dead": "0", 
          "Description": "Six Philadelphia Police officers were shot during an eight-hour standoff while attempting to serve a drug warrant.", 
          "Injured": "6", 
          "State": "Pennsylvania", 
          "Total": "6"
        }, 
        {
          "Date": "13/08/2019", 
          "Dead": "2", 
          "Description": "Police responded to calls of shots fired and found a deceased male and three women wounded. One died at the hospital from their injuries.", 
          "Injured": "3", 
          "State": "Washington", 
          "Total": "5"
        }, 
        {
          "Date": "13/08/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded in a shooting.", 
          "Injured": "4", 
          "State": "Mississippi", 
          "Total": "4"
        }, 
        {
          "Date": "12/08/2019", 
          "Dead": "2", 
          "Description": "A police officer was killed and two were wounded after a suspect opened fire during a traffic stop. The suspect was killed by police.", 
          "Injured": "2", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "12/08/2019", 
          "Dead": "3", 
          "Description": "A man shot and killed his estranged wife and a man, then wounded another man before committing suicide.", 
          "Injured": "1", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "11/08/2019", 
          "Dead": "0", 
          "Description": "Six people were injured when they were shot by a gunman in a car in Garfield Park.", 
          "Injured": "6", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "10/08/2019", 
          "Dead": "0", 
          "Description": "Four people were injured in an overnight shooting in the parking lot of a McDonald's restaurant.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "10/08/2019", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting.", 
          "Injured": "4", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "09/08/2019", 
          "Dead": "0", 
          "Description": "Four men were injured during a shoot-out at a convenience store.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "09/08/2019", 
          "Dead": "0", 
          "Description": "Four people were injured in a drive-by shooting in Marquette Park.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "08/08/2019", 
          "Dead": "1", 
          "Description": "A gunman wearing body armor killed another man and wounded three responding police officers before being arrested.", 
          "Injured": "3", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "07/08/2019", 
          "Dead": "2", 
          "Description": "Two people were killed and two were injured in a shooting that also involved a motor vehicle crash.", 
          "Injured": "2", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "06/08/2019", 
          "Dead": "4", 
          "Description": "A man killed two women and a man, before killing himself in a triple murder\ufffdCsuicide.", 
          "Injured": "0", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "06/08/2019", 
          "Dead": "0", 
          "Description": "Four people were shot and injured after a dispute.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "05/08/2019", 
          "Dead": "4", 
          "Description": "A man killed his uncle, grandmother and mother before he set the house on fire and committed suicide in a triple murder\ufffdCsuicide.", 
          "Injured": "0", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "05/08/2019", 
          "Dead": "1", 
          "Description": "One person was killed and three were wounded after a large fight broke out following a funeral service.", 
          "Injured": "3", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "05/08/2019", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting during a candlelight vigil in Crown Heights.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "04/08/2019", 
          "Dead": "1", 
          "Description": "One man was killed and three others were injured in an early morning shooting.", 
          "Injured": "3", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "04/08/2019", 
          "Dead": "0", 
          "Description": "Four people were discovered wounded in an overnight shooting.", 
          "Injured": "4", 
          "State": "Mississippi", 
          "Total": "4"
        }, 
        {
          "Date": "04/08/2019", 
          "Dead": "1", 
          "Description": "One person was killed and seven others were injured in a shooting in the Lawndale community.", 
          "Injured": "7", 
          "State": "Illinois", 
          "Total": "8"
        }, 
        {
          "Date": "04/08/2019", 
          "Dead": "0", 
          "Description": "Seven people were wounded in a drive-by shooting near Douglass Park.", 
          "Injured": "7", 
          "State": "Illinois", 
          "Total": "7"
        }, 
        {
          "Date": "04/08/2019", 
          "Dead": "10", 
          "Description": "2019 Dayton shooting: A gunman killed nine people and injured 27 outside of a bar after he was denied entry, before being killed by police.", 
          "Injured": "27", 
          "State": "Ohio", 
          "Total": "37"
        }, 
        {
          "Date": "03/08/2019", 
          "Dead": "23", 
          "Description": "2019 El Paso shooting: 23 people were killed and 23 were injured at a Walmart near the Cielo Vista Mall in a Hispanophobic massacre. The perpetrator was taken into custody.", 
          "Injured": "23", 
          "State": "Texas", 
          "Total": "46"
        }, 
        {
          "Date": "02/08/2019", 
          "Dead": "3", 
          "Description": "A man shot and killed his in-laws, and wounded an 11-year-old boy sitting in a relative's car before committing suicide.", 
          "Injured": "1", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "02/08/2019", 
          "Dead": "2", 
          "Description": "Two men were killed, and two women and a two-year-old were wounded at multiple crime scenes.", 
          "Injured": "3", 
          "State": "Virginia", 
          "Total": "5"
        }, 
        {
          "Date": "31/07/2019", 
          "Dead": "3", 
          "Description": "Police responding to shots fired at a senior living complex discovered a wounded woman, and two males and a woman deceased. It is believed one of the deceased males was the shooter.", 
          "Injured": "1", 
          "State": "Indiana", 
          "Total": "4"
        }, 
        {
          "Date": "30/07/2019", 
          "Dead": "2", 
          "Description": "At a Walmart store, a man killed two people then wounded a police officer before being shot by police and arrested.", 
          "Injured": "2", 
          "State": "Mississippi", 
          "Total": "4"
        }, 
        {
          "Date": "30/07/2019", 
          "Dead": "0", 
          "Description": "During an attempted home invasion, shots were fired and four people were wounded.", 
          "Injured": "4", 
          "State": "Oklahoma", 
          "Total": "4"
        }, 
        {
          "Date": "30/07/2019", 
          "Dead": "3", 
          "Description": "A man shot and killed his ex-girlfriends parents, and wounded her, before committing suicide in a murder\ufffdCsuicide.", 
          "Injured": "1", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "30/07/2019", 
          "Dead": "0", 
          "Description": "Five people were shot at a party at a home rented through Airbnb.", 
          "Injured": "5", 
          "State": "Ohio", 
          "Total": "5"
        }, 
        {
          "Date": "28/07/2019", 
          "Dead": "5", 
          "Description": "A gunman shot six people, four fatally, before killing himself.", 
          "Injured": "2", 
          "State": "Wisconsin", 
          "Total": "7"
        }, 
        {
          "Date": "28/07/2019", 
          "Dead": "4", 
          "Description": "Gilroy Garlic Festival shooting: Sixteen people were shot, four fatally, including a gunman and two children, at the Gilroy Garlic Festival.", 
          "Injured": "17", 
          "State": "California", 
          "Total": "21"
        }, 
        {
          "Date": "28/07/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded on two separate streets in connection with a large party.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "28/07/2019", 
          "Dead": "1", 
          "Description": "One man was killed and five were injured by an unknown perpetrator as the victims were preparing to shoot a rap video.", 
          "Injured": "5", 
          "State": "Pennsylvania", 
          "Total": "6"
        }, 
        {
          "Date": "28/07/2019", 
          "Dead": "0", 
          "Description": "One woman and three men were wounded in a drive-by shooting outside of a Lawndale gas station.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "28/07/2019", 
          "Dead": "0", 
          "Description": "Four people were shot and injured while standing outside of a bar/nightclub.", 
          "Injured": "4", 
          "State": "Washington, D.C.", 
          "Total": "4"
        }, 
        {
          "Date": "27/07/2019", 
          "Dead": "1", 
          "Description": "One man was killed and three were injured after an altercation at an apartment complex. The suspect was later arrested.", 
          "Injured": "3", 
          "State": "Kansas", 
          "Total": "4"
        }, 
        {
          "Date": "27/07/2019", 
          "Dead": "1", 
          "Description": "Thirteen people were shot, one fatally, at a playground in Brownsville.", 
          "Injured": "12", 
          "State": "New York", 
          "Total": "13"
        }, 
        {
          "Date": "25/07/2019", 
          "Dead": "3", 
          "Description": "Officers responded to a call at a residence and discovered three deceased victims, and one wounded male, resulting from a double murder\ufffdCsuicide.", 
          "Injured": "1", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "25/07/2019", 
          "Dead": "4", 
          "Description": "A man killed four people, including his father and brother, and wounded two more at a total of four different crime scenes across the San Fernando Valley. Two of the wounded later died, bringing the death toll to 4 people.", 
          "Injured": "2", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "23/07/2019", 
          "Dead": "2", 
          "Description": "Two men were killed and two others were wounded after an argument between a group escalated into a shooting.", 
          "Injured": "2", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "21/07/2019", 
          "Dead": "0", 
          "Description": "A gunman opened fire on a group of people, wounding four, as they congregated outside of a gas station.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "21/07/2019", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting, which was captured by surveillance video.", 
          "Injured": "4", 
          "State": "Washington, D.C.", 
          "Total": "4"
        }, 
        {
          "Date": "20/07/2019", 
          "Dead": "0", 
          "Description": "Six people were wounded in an overnight shooting.", 
          "Injured": "6", 
          "State": "New Jersey", 
          "Total": "6"
        }, 
        {
          "Date": "20/07/2019", 
          "Dead": "0", 
          "Description": "Four teenagers\ufffd\ufffdbetween the ages of 14 and 18\ufffd\ufffdwere wounded in a shooting at a graduation party.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "20/07/2019", 
          "Dead": "0", 
          "Description": "Seven people were wounded in a shooting in Lincoln Park, after an argument between two groups escalated.", 
          "Injured": "7", 
          "State": "Illinois", 
          "Total": "7"
        }, 
        {
          "Date": "18/07/2019", 
          "Dead": "1", 
          "Description": "One woman was killed and three people were injured on a porch at a home in Garfield Park in Chicago's West Side.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "17/07/2019", 
          "Dead": "1", 
          "Description": "Five men in a vehicle were targeted by a shooter who killed one and injured three others.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "16/07/2019", 
          "Dead": "0", 
          "Description": "A man opened fire on his co-workers at a moving company, injuring four, after a disagreement escalated. The suspect was later arrested.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "15/07/2019", 
          "Dead": "1", 
          "Description": "One person was killed and three were wounded in an apartment complex.", 
          "Injured": "3", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "15/07/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded in a shooting after a potential drug deal turns deadly.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "15/07/2019", 
          "Dead": "2", 
          "Description": "A man attempted to use a gun to demand methadone, then killed one and wounded two before being killed by police in a shootout.", 
          "Injured": "2", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "13/07/2019", 
          "Dead": "0", 
          "Description": "Seven people were wounded in a shooting during a neighborhood basketball game.", 
          "Injured": "7", 
          "State": "Pennsylvania", 
          "Total": "7"
        }, 
        {
          "Date": "13/07/2019", 
          "Dead": "1", 
          "Description": "One person was killed and four were wounded in a drive-by shooting in Chicago's South Side.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "11/07/2019", 
          "Dead": "0", 
          "Description": "Four suspects got into a gunfight, wounding four teenagers in a common area at an apartment complex.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "08/07/2019", 
          "Dead": "2", 
          "Description": "Two people were killed and two children\ufffd\ufffd16 and 10-years-old, were wounded after a domestic dispute escalated.", 
          "Injured": "2", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "08/07/2019", 
          "Dead": "0", 
          "Description": "Four perpetrators wounded four men in a shooting outside of a 7-Eleven store.", 
          "Injured": "4", 
          "State": "Washington, D.C.", 
          "Total": "4"
        }, 
        {
          "Date": "07/07/2019", 
          "Dead": "2", 
          "Description": "Six people were shot, two fatally, while in a car at a gas station. Police are looking for two suspects.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "6"
        }, 
        {
          "Date": "07/07/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded in a shooting after a potential argument escalated.", 
          "Injured": "4", 
          "State": "Kansas", 
          "Total": "4"
        }, 
        {
          "Date": "07/07/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded in an early morning shooting in Chicago's Englewood neighborhood.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "07/07/2019", 
          "Dead": "0", 
          "Description": "Four people were discovered wounded in a parking lot in the downtown area.", 
          "Injured": "4", 
          "State": "New Mexico", 
          "Total": "4"
        }, 
        {
          "Date": "06/07/2019", 
          "Dead": "0", 
          "Description": "Four people were discovered wounded by police, who responded to a shots fired call; the victims had driven away from the initial scene.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "06/07/2019", 
          "Dead": "2", 
          "Description": "After a dispute over fireworks, a man shot into a crowd and injured a 12-year-old child and a woman, then barricaded himself in his home. Police discovered him and a woman deceased in the home.", 
          "Injured": "2", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "06/07/2019", 
          "Dead": "0", 
          "Description": "Four people were shot in a McDonald's parking lot after a dispute involving a rideshare vehicle.", 
          "Injured": "4", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "05/07/2019", 
          "Dead": "0", 
          "Description": "A gunman opened fire \ufffd\ufffd injuring four people in the East New York neighborhood.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "05/07/2019", 
          "Dead": "0", 
          "Description": "Five people were wounded in a shooting in Chicago's Woodlawn community.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "05/07/2019", 
          "Dead": "1", 
          "Description": "One person died and three were wounded in a shooting.", 
          "Injured": "3", 
          "State": "Nevada", 
          "Total": "4"
        }, 
        {
          "Date": "05/07/2019", 
          "Dead": "4", 
          "Description": "Four people were found deceased at a home in an apparent murder\ufffdCsuicide. The deaths consisted of two young males, and one middle aged female, not including the perpetrator who killed himself afterwards.", 
          "Injured": "0", 
          "State": "Arkansas", 
          "Total": "4"
        }, 
        {
          "Date": "05/07/2019", 
          "Dead": "0", 
          "Description": "Six people were wounded in Boston's Roxbury neighborhood.", 
          "Injured": "6", 
          "State": "Massachusetts", 
          "Total": "6"
        }, 
        {
          "Date": "04/07/2019", 
          "Dead": "1", 
          "Description": "One man was killed and three were wounded, after a suspect opened fire from a vehicle.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "04/07/2019", 
          "Dead": "0", 
          "Description": "Four people, including a 15-year-old girl were wounded, after two perpetrators opened fire in the Historic South-Central neighborhood.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "04/07/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded after an argument escalated.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "04/07/2019", 
          "Dead": "1", 
          "Description": "One person was killed and three were injured after gunfire erupted at an Independence Day celebration.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "03/07/2019", 
          "Dead": "2", 
          "Description": "The perpetrator shot and killed his sister and three others at a housewarming party. He later died at a hospital.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "02/07/2019", 
          "Dead": "0", 
          "Description": "A 16-year-old, 12-year-old and an adult were injured when an argument over fireworks escalated. The perpetrator was shot by a by-stander.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "02/07/2019", 
          "Dead": "0", 
          "Description": "Four people were injured in a drive-by shooting just before midnight near a local food store.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "01/07/2019", 
          "Dead": "0", 
          "Description": "Four women were injured after a suspect opened fire on them, two were discovered by police, the others privately entered the hospital.", 
          "Injured": "4", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "30/06/2019", 
          "Dead": "0", 
          "Description": "A 12-year-old boy and two adults were injured in a shooting outside of an apartment complex.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "30/06/2019", 
          "Dead": "0", 
          "Description": "Five people were wounded after a fight escalated in a mobile home park after a BBQ.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "30/06/2019", 
          "Dead": "2", 
          "Description": "Two teenagers were killed and two were wounded in a drive-by shooting near a playground.", 
          "Injured": "2", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "30/06/2019", 
          "Dead": "0", 
          "Description": "Six people were shot at a house party.", 
          "Injured": "6", 
          "State": "New York", 
          "Total": "6"
        }, 
        {
          "Date": "29/06/2019", 
          "Dead": "0", 
          "Description": "Seven people were injured in a shooting outside of a night club after a fight escalated.", 
          "Injured": "7", 
          "State": "Louisiana", 
          "Total": "7"
        }, 
        {
          "Date": "29/06/2019", 
          "Dead": "0", 
          "Description": "Police discovered two people wounded, while an additional two were self-transported to area hospitals.", 
          "Injured": "4", 
          "State": "Connecticut", 
          "Total": "4"
        }, 
        {
          "Date": "29/06/2019", 
          "Dead": "0", 
          "Description": "Five people were wounded after gunfire broke out at a gathering in the Near West Side neighborhood.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "28/06/2019", 
          "Dead": "0", 
          "Description": "Seven people were wounded during a drive-by shooting involving two vehicles.", 
          "Injured": "7", 
          "State": "Georgia", 
          "Total": "7"
        }, 
        {
          "Date": "28/06/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded by gunfire that erupted on a street.", 
          "Injured": "4", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "28/06/2019", 
          "Dead": "0", 
          "Description": "Five people were wounded in a shooting, after police break up a house party.", 
          "Injured": "5", 
          "State": "Connecticut", 
          "Total": "5"
        }, 
        {
          "Date": "28/06/2019", 
          "Dead": "0", 
          "Description": "Five people were wounded in a shooting.", 
          "Injured": "5", 
          "State": "Minnesota", 
          "Total": "5"
        }, 
        {
          "Date": "27/06/2019", 
          "Dead": "0", 
          "Description": "Seven people were wounded, two critically, in a drive-by shooting in the Old Fourth Ward neighborhood.", 
          "Injured": "7", 
          "State": "Georgia", 
          "Total": "7"
        }, 
        {
          "Date": "26/06/2019", 
          "Dead": "1", 
          "Description": "One man was killed and three others, including a boy, were wounded in a home invasion.", 
          "Injured": "3", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "23/06/2019", 
          "Dead": "5", 
          "Description": "A four-hour standoff ends after a man kills four people then himself.", 
          "Injured": "0", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "23/06/2019", 
          "Dead": "3", 
          "Description": "Two people were killed and two were wounded in a shooting at an apartment complex. One of the victims later died at the hospital from their injuries.", 
          "Injured": "1", 
          "State": "South Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "23/06/2019", 
          "Dead": "0", 
          "Description": "Five people were wounded in a drive-by shooting outside of a local motorcycle club.", 
          "Injured": "5", 
          "State": "Ohio", 
          "Total": "5"
        }, 
        {
          "Date": "23/06/2019", 
          "Dead": "1", 
          "Description": "One person was killed and three others were injured after a drive-by shooting at a party.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "23/06/2019", 
          "Dead": "1", 
          "Description": "One person was killed and ten were injured after the perpetrator opened fire on a patrons at a local bar.", 
          "Injured": "10", 
          "State": "Indiana", 
          "Total": "11"
        }, 
        {
          "Date": "22/06/2019", 
          "Dead": "0", 
          "Description": "Four men were wounded by gunfire in an overnight shooting.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "22/06/2019", 
          "Dead": "0", 
          "Description": "Two adults and two children were injured in a shooting at Buckroe Beach.", 
          "Injured": "4", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "22/06/2019", 
          "Dead": "1", 
          "Description": "A gunman opened fire on a crowd, killing a 19-year-old man and wounding four others.", 
          "Injured": "4", 
          "State": "Maryland", 
          "Total": "5"
        }, 
        {
          "Date": "21/06/2019", 
          "Dead": "1", 
          "Description": "Four people were shot, one fatally, at a house on the city's west side.", 
          "Injured": "3", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "21/06/2019", 
          "Dead": "0", 
          "Description": "Five people were wounded in a drive-by shooting.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "21/06/2019", 
          "Dead": "0", 
          "Description": "Four people, including a pregnant woman, were wounded in a shooting outside of the Parkway Garden Homes apartment complex.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "20/06/2019", 
          "Dead": "0", 
          "Description": "Ten people were injured from gunfire outside of a nightclub.", 
          "Injured": "10", 
          "State": "Pennsylvania", 
          "Total": "10"
        }, 
        {
          "Date": "18/06/2019", 
          "Dead": "1", 
          "Description": "One man was killed and six others were injured after gunfire broke out in two separate locations in the downtown area.", 
          "Injured": "6", 
          "State": "New Jersey", 
          "Total": "7"
        }, 
        {
          "Date": "17/06/2019", 
          "Dead": "1", 
          "Description": "2019 Dallas courthouse shooting: One person was superficially injured and the perpetrator was killed in a shooting next to the Earle Cabell Federal Building.", 
          "Injured": "1", 
          "State": "Texas", 
          "Total": "2"
        }, 
        {
          "Date": "17/06/2019", 
          "Dead": "0", 
          "Description": "Four people were injured from gunfire, after getting into an altercation with another motorist.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "17/06/2019", 
          "Dead": "0", 
          "Description": "Five people were wounded in the parking lot of an apartment complex.", 
          "Injured": "5", 
          "State": "Tennessee", 
          "Total": "5"
        }, 
        {
          "Date": "16/06/2019", 
          "Dead": "1", 
          "Description": "One person was killed and seven were injured at a graduation party. All of the victims are between 15 and 17 years of age.", 
          "Injured": "7", 
          "State": "Pennsylvania", 
          "Total": "8"
        }, 
        {
          "Date": "16/06/2019", 
          "Dead": "1", 
          "Description": "Five men and two women were discovered shot near a liquor store by police. One of the men later died at the hospital.", 
          "Injured": "6", 
          "State": "Kentucky", 
          "Total": "7"
        }, 
        {
          "Date": "16/06/2019", 
          "Dead": "0", 
          "Description": "Six people were shot in a drive-by shooting while standing in the street after a party.", 
          "Injured": "6", 
          "State": "Iowa", 
          "Total": "6"
        }, 
        {
          "Date": "15/06/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded in a drive-by shooting outside of a nightclub.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "15/06/2019", 
          "Dead": "4", 
          "Description": "Three relatives, two children and two adults, were found dead from gunshot wounds in a house.", 
          "Injured": "0", 
          "State": "Iowa", 
          "Total": "4"
        }, 
        {
          "Date": "12/06/2019", 
          "Dead": "1", 
          "Description": "An adult male was killed at a party in a rented Airbnb; a teenager and two other adults were injured.", 
          "Injured": "3", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "11/06/2019", 
          "Dead": "2", 
          "Description": "Police responded to a scene and discovered two men deceased and two others injured.", 
          "Injured": "2", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "11/06/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded in an overnight shooting; the victims were self-transported to the hospital for treatment.", 
          "Injured": "4", 
          "State": "Colorado", 
          "Total": "4"
        }, 
        {
          "Date": "09/06/2019", 
          "Dead": "1", 
          "Description": "One was killed and three others were injured in a shooting at a nightclub.", 
          "Injured": "3", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "09/06/2019", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting after a dispute.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "09/06/2019", 
          "Dead": "1", 
          "Description": "One person was killed and three wounded, after the perpetrator opened fire on a crowd gathered in Kerruish Park.", 
          "Injured": "3", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "08/06/2019", 
          "Dead": "5", 
          "Description": "Five people were killed after the perpetrator opened fire on the Yakama Indian Reservation.", 
          "Injured": "0", 
          "State": "Washington", 
          "Total": "5"
        }, 
        {
          "Date": "08/06/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded in the Humbdolt neighborhood after an altercation with the suspect.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "07/06/2019", 
          "Dead": "0", 
          "Description": "Five people were taken to the hospital after the suspect fired shots at the ground, indirectly wounding them.", 
          "Injured": "5", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "06/06/2019", 
          "Dead": "1", 
          "Description": "One man was killed and three others wounded when a secondary vehicle pulled up next to vehicle and opened fire on Lake Shore Drive.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "05/06/2019", 
          "Dead": "0", 
          "Description": "A teenager opened fire at a soccer park, wounding an 11-year-old boy and three others.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "01/06/2019", 
          "Dead": "1", 
          "Description": "One person was killed and three were critically injured in an overnight shooting.", 
          "Injured": "3", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "01/06/2019", 
          "Dead": "0", 
          "Description": "An adult male and three teenagers were wounded in a shooting in the Austin community of Chicago.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "01/06/2019", 
          "Dead": "0", 
          "Description": "Four men were wounded in two separate locations near Northwestern University's Gold Coast campus.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "01/06/2019", 
          "Dead": "0", 
          "Description": "Police discovered three individuals wounded after responding to a shooting; an additional two were transported via personal vehicles to the hospital.", 
          "Injured": "5", 
          "State": "Georgia", 
          "Total": "5"
        }, 
        {
          "Date": "01/06/2019", 
          "Dead": "0", 
          "Description": "Three men and a woman were injured after a suspect opened fire at a block party.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "01/06/2019", 
          "Dead": "0", 
          "Description": "Five men were wounded in a shooting at a car wash.", 
          "Injured": "5", 
          "State": "South Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "31/05/2019", 
          "Dead": "13", 
          "Description": "2019 Virginia Beach shooting: A gunman killed 12 people and injured four others at a city public works building. The gunman died at the scene after being shot by police.", 
          "Injured": "4", 
          "State": "Virginia", 
          "Total": "17"
        }, 
        {
          "Date": "30/05/2019", 
          "Dead": "0", 
          "Description": "Five people were wounded after a vehicle pulled up to a large gathering and opened fire.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "29/05/2019", 
          "Dead": "2", 
          "Description": "A man shot three employees at a local plumbing company, killing one before exchanging gunfire with a sheriff's deputy, also injuring him before committing suicide.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "27/05/2019", 
          "Dead": "1", 
          "Description": "Police responded to a shooting on Walnut Avenue, and found one teenager deceased and five adults injured.", 
          "Injured": "5", 
          "State": "New Jersey", 
          "Total": "6"
        }, 
        {
          "Date": "27/05/2019", 
          "Dead": "0", 
          "Description": "A boy and four others were wounded in a shooting in the Barry Farm neighborhood.", 
          "Injured": "5", 
          "State": "Washington, D.C.", 
          "Total": "5"
        }, 
        {
          "Date": "26/05/2019", 
          "Dead": "1", 
          "Description": "Police discovered one person deceased and three injured after responding to reports of a shooting.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "26/05/2019", 
          "Dead": "0", 
          "Description": "Multiple shooters reportedly opened fire at a block party, injuring five people.", 
          "Injured": "5", 
          "State": "Virginia", 
          "Total": "5"
        }, 
        {
          "Date": "26/05/2019", 
          "Dead": "1", 
          "Description": "One teenager was killed and two women and a child were injured after being shot in a parking lot.", 
          "Injured": "3", 
          "State": "Washington, D.C.", 
          "Total": "4"
        }, 
        {
          "Date": "26/05/2019", 
          "Dead": "2", 
          "Description": "Several people were gathered outside of a party when a man opened fire, killing two and wounding three.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "25/05/2019", 
          "Dead": "0", 
          "Description": "Five people were wounded in a parking lot, after an SUV pulled up and its occupants began shooting.", 
          "Injured": "5", 
          "State": "Oklahoma", 
          "Total": "5"
        }, 
        {
          "Date": "25/05/2019", 
          "Dead": "0", 
          "Description": "Four people, including a teenager were found shot in McElderry Park.", 
          "Injured": "4", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "25/05/2019", 
          "Dead": "1", 
          "Description": "Police responded to a noise complaint at a large party, and discovered ten people with gunshot wounds. One later died from their injuries.", 
          "Injured": "9", 
          "State": "Virginia", 
          "Total": "10"
        }, 
        {
          "Date": "25/05/2019", 
          "Dead": "0", 
          "Description": "Ten people were wounded in a shooting at a bar.", 
          "Injured": "10", 
          "State": "New Jersey", 
          "Total": "10"
        }, 
        {
          "Date": "20/05/2019", 
          "Dead": "1", 
          "Description": "One teenager was killed and five were injured in a shooting.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "20/05/2019", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting in the Hilltop neighborhood.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "20/05/2019", 
          "Dead": "2", 
          "Description": "A man opened fire on a group of people, killing two and wounding two others at an apartment complex.", 
          "Injured": "2", 
          "State": "Oklahoma", 
          "Total": "4"
        }, 
        {
          "Date": "19/05/2019", 
          "Dead": "0", 
          "Description": "Five people were wounded after gunfire erupted at a warehouse party.", 
          "Injured": "5", 
          "State": "Oregon", 
          "Total": "5"
        }, 
        {
          "Date": "18/05/2019", 
          "Dead": "1", 
          "Description": "One person was killed and five were injured in a shooting during a family dispute.", 
          "Injured": "5", 
          "State": "Mississippi", 
          "Total": "6"
        }, 
        {
          "Date": "18/05/2019", 
          "Dead": "2", 
          "Description": "Two people were killed and two were wounded after an assailant shot into a vehicle outside of a tobacco store.", 
          "Injured": "2", 
          "State": "Iowa", 
          "Total": "4"
        }, 
        {
          "Date": "18/05/2019", 
          "Dead": "1", 
          "Description": "One person was killed and eight were wounded at a high school graduation party when a gunman opened fire during a fight.", 
          "Injured": "8", 
          "State": "Alabama", 
          "Total": "9"
        }, 
        {
          "Date": "18/05/2019", 
          "Dead": "1", 
          "Description": "A 57-year-old woman was killed and five others were wounded during a vigil at a local bar.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "18/05/2019", 
          "Dead": "1", 
          "Description": "One man was killed and five were wounded at an overnight block party.", 
          "Injured": "5", 
          "State": "North Carolina", 
          "Total": "6"
        }, 
        {
          "Date": "18/05/2019", 
          "Dead": "0", 
          "Description": "Seven people were wounded at a house party near the campus of Ball State University.", 
          "Injured": "7", 
          "State": "Indiana", 
          "Total": "7"
        }, 
        {
          "Date": "17/05/2019", 
          "Dead": "1", 
          "Description": "A woman and three others, including a 4-year-old boy were wounded in what police presume was a targeted shooting. One of the victims later died from their injuries.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "16/05/2019", 
          "Dead": "0", 
          "Description": "Four people, including two teenagers were wounded in a shooting.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "15/05/2019", 
          "Dead": "0", 
          "Description": "Four people, including two children were wounded during an altercation between two men in a strip mall parking lot.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "13/05/2019", 
          "Dead": "4", 
          "Description": "Three people were killed and two were critically injured in a shooting at a home. One victim died of their injuries days later, taking the death toll to four.", 
          "Injured": "1", 
          "State": "Missouri", 
          "Total": "5"
        }, 
        {
          "Date": "13/05/2019", 
          "Dead": "0", 
          "Description": "Three men and a teenager were wounded in a drive-by shooting in the Central City neighborhood.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "11/05/2019", 
          "Dead": "0", 
          "Description": "A person began shooting at an event that was originally reported to be a rap concert and subsequently described as a birthday party. Four people were injured by the gunfire, and a fifth person suffered a head injury after falling.", 
          "Injured": "4", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "11/05/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded in a shooting inside of a residence. The perpetrator was later arrested.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "10/05/2019", 
          "Dead": "0", 
          "Description": "A shooting was reported near Farragut Elementary School, where two men were discovered wounded, and an additional four were identified at the hospital.", 
          "Injured": "6", 
          "State": "Missouri", 
          "Total": "6"
        }, 
        {
          "Date": "10/05/2019", 
          "Dead": "0", 
          "Description": "A large group of adult men were ambushed by three teenagers who came out of a breezeway and shot and injured five of them.", 
          "Injured": "5", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "08/05/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded in a shooting near the northwest side of Indianapolis.", 
          "Injured": "4", 
          "State": "Indiana", 
          "Total": "4"
        }, 
        {
          "Date": "07/05/2019", 
          "Dead": "1", 
          "Description": "STEM School Highlands Ranch shooting: Authorities responded to the STEM School Highlands Ranch, at about 1:50?pm on a report of shots fired. One student was fatally shot and eight others were injured; two suspects were taken into custody by police.", 
          "Injured": "8", 
          "State": "Colorado", 
          "Total": "9"
        }, 
        {
          "Date": "05/05/2019", 
          "Dead": "1", 
          "Description": "Just before 4?am, officers discovered one person deceased and four people wounded, after a fight potentially escalated.", 
          "Injured": "4", 
          "State": "New Jersey", 
          "Total": "5"
        }, 
        {
          "Date": "05/05/2019", 
          "Dead": "0", 
          "Description": "Officers responded to a call and discovered six individuals wounded by gunfire; the victims were transported to local hospitals for treatment.", 
          "Injured": "6", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "04/05/2019", 
          "Dead": "1", 
          "Description": "Five people were shot inside of a vehicle; the incident resulted in one death and four injuries.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "5"
        }, 
        {
          "Date": "04/05/2019", 
          "Dead": "0", 
          "Description": "Three teens and one man were injured after a fight involving between 20 and 30 individuals.", 
          "Injured": "4", 
          "State": "Indiana", 
          "Total": "4"
        }, 
        {
          "Date": "04/05/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded in a shooting at West 27th and Tatnall Streets.", 
          "Injured": "4", 
          "State": "Delaware", 
          "Total": "4"
        }, 
        {
          "Date": "03/05/2019", 
          "Dead": "0", 
          "Description": "Four people were injured and discovered after a Shot Spotter gunfire alert notified police to the location.", 
          "Injured": "4", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "03/05/2019", 
          "Dead": "0", 
          "Description": "Emergency responders discovered a female and two young children injured, and two men were later identified as being wounded in the same incident.", 
          "Injured": "5", 
          "State": "Maryland", 
          "Total": "5"
        }, 
        {
          "Date": "03/05/2019", 
          "Dead": "1", 
          "Description": "Four men were discovered shot at Cherrywood Park after a drive-by shooting; one of the victims died from their injuries.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "01/05/2019", 
          "Dead": "1", 
          "Description": "One person was killed and three were wounded while sitting in a parked car in Boston's Dorchester neighborhood.", 
          "Injured": "3", 
          "State": "Massachusetts", 
          "Total": "4"
        }, 
        {
          "Date": "30/04/2019", 
          "Dead": "2", 
          "Description": "University of North Carolina at Charlotte shooting: Six people were shot, two fatally, on the last day of classes at the University of North Carolina at Charlotte. The student gunman was taken into custody after he was tackled by one of the students in the classroom. He had several more loaded magazines in a backpack.", 
          "Injured": "4", 
          "State": "North Carolina", 
          "Total": "6"
        }, 
        {
          "Date": "28/04/2019", 
          "Dead": "4", 
          "Description": "Four family members, three women and one man, were found shot to death in an apartment. The suspect remains at large.", 
          "Injured": "0", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "28/04/2019", 
          "Dead": "0", 
          "Description": "Two men got into an altercation at a party and exchanged gunfire; seven people were wounded in the crossfire.", 
          "Injured": "7", 
          "State": "Tennessee", 
          "Total": "7"
        }, 
        {
          "Date": "28/04/2019", 
          "Dead": "0", 
          "Description": "A suspect in a vehicle opened fire on patrons outside of a nightclub, injuring four.", 
          "Injured": "4", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "28/04/2019", 
          "Dead": "1", 
          "Description": "One person was killed and seven were wounded when a gunman opened fire on two cookouts at an intersection.", 
          "Injured": "7", 
          "State": "Maryland", 
          "Total": "8"
        }, 
        {
          "Date": "27/04/2019", 
          "Dead": "1", 
          "Description": "One person was killed and three were injured in a shooting in south Jackson.", 
          "Injured": "3", 
          "State": "Mississippi", 
          "Total": "4"
        }, 
        {
          "Date": "27/04/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded in an overnight shooting.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "27/04/2019", 
          "Dead": "1", 
          "Description": "Poway synagogue shooting: One person was killed and at least three were wounded by a shooter at the Chabad of Poway synagogue.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "26/04/2019", 
          "Dead": "0", 
          "Description": "Investigators attempted to make contact with the suspect in relation to another crime, he then began to open fire, injuring three children and himself.", 
          "Injured": "4", 
          "State": "Oklahoma", 
          "Total": "4"
        }, 
        {
          "Date": "21/04/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded in the Grays Ferry Section of the city.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "21/04/2019", 
          "Dead": "0", 
          "Description": "Four seniors were wounded by gunfire after a suspect opened fire in the vehicle behind them.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "20/04/2019", 
          "Dead": "0", 
          "Description": "Seven people were wounded in a shooting that police believe occurred after a large fight.", 
          "Injured": "7", 
          "State": "Tennessee", 
          "Total": "7"
        }, 
        {
          "Date": "20/04/2019", 
          "Dead": "0", 
          "Description": "A disturbance in a neighborhood escalated into a shooting; four men were wounded.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "19/04/2019", 
          "Dead": "0", 
          "Description": "Two suspects fired multiple shots at people attending a party, injuring four.", 
          "Injured": "4", 
          "State": "Kansas", 
          "Total": "4"
        }, 
        {
          "Date": "18/04/2019", 
          "Dead": "0", 
          "Description": "Four people in a vehicle were wounded when they were shot at by at least one person in another car.", 
          "Injured": "4", 
          "State": "Kentucky", 
          "Total": "4"
        }, 
        {
          "Date": "16/04/2019", 
          "Dead": "1", 
          "Description": "A drive-by shooting killed an 18-year-old male and wounded three other men in a cul-de-sac.", 
          "Injured": "3", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "14/04/2019", 
          "Dead": "0", 
          "Description": "A man opened fire inside of a bar following a disturbance, wounding four patrons.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "14/04/2019", 
          "Dead": "1", 
          "Description": "One man was killed and three were injured in an early morning shooting.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "14/04/2019", 
          "Dead": "2", 
          "Description": "Two women were killed and another man and woman were wounded in a drive-by shooting outside of Miami's Liberty City neighborhood.", 
          "Injured": "2", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "12/04/2019", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting outside of a restaurant and bar.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "11/04/2019", 
          "Dead": "3", 
          "Description": "A man killed his wife, two of his daughters, and another man, and injured two people who came to try to help one of the victims. All of the victims were shot, with the exception of one of his daughters who was killed by blunt force trauma.", 
          "Injured": "2", 
          "State": "Arizona", 
          "Total": "5"
        }, 
        {
          "Date": "11/04/2019", 
          "Dead": "1", 
          "Description": "One person was killed and four were wounded when suspects fired at them from a car in the Watts neighborhood of Los Angeles.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "11/04/2019", 
          "Dead": "0", 
          "Description": "Four men were wounded in a shooting near Druid Hill Park.", 
          "Injured": "4", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "09/04/2019", 
          "Dead": "0", 
          "Description": "Police found four people with gunshot wounds in front of a residence.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "07/04/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded in a shooting at a mobile home park.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "07/04/2019", 
          "Dead": "2", 
          "Description": "Two people were killed and three were wounded in a shooting at a motorcycle club hangout.", 
          "Injured": "3", 
          "State": "Indiana", 
          "Total": "5"
        }, 
        {
          "Date": "07/04/2019", 
          "Dead": "0", 
          "Description": "Six people were wounded in a shooting outside of a local bar.", 
          "Injured": "6", 
          "State": "North Carolina", 
          "Total": "6"
        }, 
        {
          "Date": "07/04/2019", 
          "Dead": "0", 
          "Description": "Six young men were wounded in a shooting in the city's East Side district.", 
          "Injured": "6", 
          "State": "Delaware", 
          "Total": "6"
        }, 
        {
          "Date": "06/04/2019", 
          "Dead": "0", 
          "Description": "At least six people were injured in a shooting at a baby shower.", 
          "Injured": "6", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "06/04/2019", 
          "Dead": "0", 
          "Description": "Four Florida A&M University students were injured in a shooting following an argument at a house party.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "04/04/2019", 
          "Dead": "1", 
          "Description": "One person was killed and three were found with gunshot injuries in Panama City.", 
          "Injured": "3", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "04/04/2019", 
          "Dead": "3", 
          "Description": "Two officers responding to a suspected hostage situation were wounded and three individuals were later found deceased in a murder\ufffdCsuicide.", 
          "Injured": "2", 
          "State": "Georgia", 
          "Total": "5"
        }, 
        {
          "Date": "02/04/2019", 
          "Dead": "0", 
          "Description": "A man shot four people in a drive-by shooting outside of a convenience store.", 
          "Injured": "4", 
          "State": "Mississippi", 
          "Total": "4"
        }, 
        {
          "Date": "02/04/2019", 
          "Dead": "0", 
          "Description": "Five people were wounded in a drive-by shooting at an intersection.", 
          "Injured": "5", 
          "State": "Kentucky", 
          "Total": "5"
        }, 
        {
          "Date": "31/03/2019", 
          "Dead": "1", 
          "Description": "One person was killed and four people were wounded in a shooting in East Garfield Park.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "31/03/2019", 
          "Dead": "1", 
          "Description": "One person was killed and four were wounded during a house party.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "5"
        }, 
        {
          "Date": "31/03/2019", 
          "Dead": "0", 
          "Description": "Seven people were wounded in a shooting at an overnight house party.", 
          "Injured": "7", 
          "State": "South Carolina", 
          "Total": "7"
        }, 
        {
          "Date": "28/03/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded in a shooting near a playground.", 
          "Injured": "4", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "25/03/2019", 
          "Dead": "0", 
          "Description": "An after-school fight led to a shooting in a neighborhood; five teenagers were wounded.", 
          "Injured": "5", 
          "State": "Nevada", 
          "Total": "5"
        }, 
        {
          "Date": "24/03/2019", 
          "Dead": "1", 
          "Description": "A shooting occurred near the Fillmore Heritage Center around 8:40?pm local time; one person was killed and five others were injured.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "24/03/2019", 
          "Dead": "0", 
          "Description": "During a warehouse party, a fight broke out and escalated into a shooting; seven people were wounded.", 
          "Injured": "7", 
          "State": "Arizona", 
          "Total": "7"
        }, 
        {
          "Date": "19/03/2019", 
          "Dead": "2", 
          "Description": "An argument at a house party ended in a shooting when the perpetrator returned to the party and killed two and wounded four before fleeing.", 
          "Injured": "4", 
          "State": "Arizona", 
          "Total": "6"
        }, 
        {
          "Date": "17/03/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded after an argument, although the shooter claims that it was in self-defense to being randomly attacked.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "17/03/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded at the El Cortez Hotel and Casino in an early morning shooting. The suspect was later arrested.", 
          "Injured": "4", 
          "State": "Nevada", 
          "Total": "4"
        }, 
        {
          "Date": "17/03/2019", 
          "Dead": "1", 
          "Description": "In the early morning, two groups were involved in a dispute, which ended with one person killed and three people wounded.", 
          "Injured": "3", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "16/03/2019", 
          "Dead": "1", 
          "Description": "One man was killed and three others were wounded following a shooting at a \"residential speakeasy\".", 
          "Injured": "3", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "15/03/2019", 
          "Dead": "2", 
          "Description": "Two men were killed and three others were wounded in an overnight shooting behind a home. The suspect was arrested the next day.", 
          "Injured": "3", 
          "State": "Alabama", 
          "Total": "5"
        }, 
        {
          "Date": "14/03/2019", 
          "Dead": "1", 
          "Description": "One person was fatally shot and three others were wounded, including a Montana Highway Patrol trooper following a road rage incident.", 
          "Injured": "3", 
          "State": "Montana", 
          "Total": "4"
        }, 
        {
          "Date": "13/03/2019", 
          "Dead": "1", 
          "Description": "One person was killed and three were wounded after gunfire erupted in a nightclub.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "11/03/2019", 
          "Dead": "0", 
          "Description": "Four men were wounded in a shooting inside of a local liquor store.", 
          "Injured": "4", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "10/03/2019", 
          "Dead": "1", 
          "Description": "A conflict between two individuals escalated into a shooting; one man was killed, and four others were injured.", 
          "Injured": "4", 
          "State": "Colorado", 
          "Total": "5"
        }, 
        {
          "Date": "10/03/2019", 
          "Dead": "0", 
          "Description": "Three children and one adult were wounded in a drive-by shooting.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "03/03/2019", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting at a sports bar following a fight.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "03/03/2019", 
          "Dead": "0", 
          "Description": "Six people were injured in a shooting at a bar following a fight.", 
          "Injured": "6", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "02/03/2019", 
          "Dead": "1", 
          "Description": "One person was killed and four other were wounded at a party when shots were fired into a home.", 
          "Injured": "4", 
          "State": "Arkansas", 
          "Total": "5"
        }, 
        {
          "Date": "28/02/2019", 
          "Dead": "4", 
          "Description": "Two adults and their 6 and 1-year-old children were killed in an apparent murder suicide.", 
          "Injured": "0", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "28/02/2019", 
          "Dead": "1", 
          "Description": "One person was killed and four others were wounded in a shooting near a gas station.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "22/02/2019", 
          "Dead": "2", 
          "Description": "Two people were killed and two were injured in a shooting at a party in a home.", 
          "Injured": "2", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "21/02/2019", 
          "Dead": "2", 
          "Description": "Two people were killed and two others were found wounded in two separate shootings believed to be perpetrated by the same man.", 
          "Injured": "2", 
          "State": "Kentucky", 
          "Total": "4"
        }, 
        {
          "Date": "21/02/2019", 
          "Dead": "1", 
          "Description": "Officers on patrol responded to gunshots, and upon investigation discovered a deceased male and four wounded victims.", 
          "Injured": "4", 
          "State": "Maryland", 
          "Total": "5"
        }, 
        {
          "Date": "21/02/2019", 
          "Dead": "2", 
          "Description": "A gunman perched on the roof of a home killed two and wounded two after an argument led to the incident.", 
          "Injured": "2", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "20/02/2019", 
          "Dead": "0", 
          "Description": "Three adults and a teenager were injured inside a home in a presumed targeted shooting.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "18/02/2019", 
          "Dead": "4", 
          "Description": "A 28-year-old woman killed her three children, ages 8, 6 and 2, before killing herself.", 
          "Injured": "0", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "17/02/2019", 
          "Dead": "0", 
          "Description": "Five people were wounded after shots were fired outside of a bar. Two suspects were taken into custody by police.", 
          "Injured": "5", 
          "State": "Indiana", 
          "Total": "5"
        }, 
        {
          "Date": "17/02/2019", 
          "Dead": "2", 
          "Description": "Two people were wounded and two were killed in a shooting at an apartment complex. The suspect was later arrested in Bienville Parish, Louisiana.", 
          "Injured": "2", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "17/02/2019", 
          "Dead": "1", 
          "Description": "After police attempted to arrest a suspect, a gunfight broke out, and led to one person being killed and five being wounded.", 
          "Injured": "5", 
          "State": "Louisiana", 
          "Total": "6"
        }, 
        {
          "Date": "16/02/2019", 
          "Dead": "4", 
          "Description": "Police responded to a domestic dispute at a residence; upon arrival, the suspect fired shots at officers leading to a 12-hour hostage standoff. Four people were killed, and the suspect was taken into custody and later died.", 
          "Injured": "0", 
          "State": "Mississippi", 
          "Total": "5"
        }, 
        {
          "Date": "15/02/2019", 
          "Dead": "6", 
          "Description": "Aurora, Illinois shooting: A man opened fire in his workplace, killing five employees, and injuring five police officers and a civilian before being killed by police.", 
          "Injured": "6", 
          "State": "Illinois", 
          "Total": "12"
        }, 
        {
          "Date": "14/02/2019", 
          "Dead": "2", 
          "Description": "After a fight broke out near a basketball court at a park, multiple people started shooting at each other. Two people were killed, and two were wounded.", 
          "Injured": "2", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "11/02/2019", 
          "Dead": "5", 
          "Description": "A family member heard sounds of gunfire, and upon investigation, found four adults and one toddler deceased.", 
          "Injured": "0", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "09/02/2019", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting outside of an apartment complex.", 
          "Injured": "4", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "06/02/2019", 
          "Dead": "1", 
          "Description": "A man was killed and three others were injured after a shooting in the lobby of an apartment building around 10:30?pm ET.", 
          "Injured": "3", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "06/02/2019", 
          "Dead": "1", 
          "Description": "One man was killed and three others were injured after a shooting broke out in Cleveland's Clark\ufffdCFulton neighborhood.", 
          "Injured": "3", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "05/02/2019", 
          "Dead": "2", 
          "Description": "A man and woman were killed and two others injured after the shooter kicked open an apartment door and shot inside, before fleeing.", 
          "Injured": "2", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "04/02/2019", 
          "Dead": "0", 
          "Description": "Four men and an elementary-school-age girl were injured in a shooting at a bus stop.", 
          "Injured": "5", 
          "State": "Washington, D.C.", 
          "Total": "5"
        }, 
        {
          "Date": "04/02/2019", 
          "Dead": "0", 
          "Description": "Four people were wounded in an early morning shooting.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "03/02/2019", 
          "Dead": "2", 
          "Description": "Around 2?am local time, two people were killed and five people were wounded in a drive-by shooting after a fight outside of a club.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "7"
        }, 
        {
          "Date": "01/02/2019", 
          "Dead": "0", 
          "Description": "A fight broke out at a house party and shots were fired; four people were wounded.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "28/01/2019", 
          "Dead": "2", 
          "Description": "Pecan Park Raid: Four police officers were shot while serving a warrant in southeast Houston. The two homeowners were killed.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "6"
        }, 
        {
          "Date": "27/01/2019", 
          "Dead": "0", 
          "Description": "Police responded to a call and discovered five people with gunshot wounds, along with two of the victims sustaining life-threatening injuries.", 
          "Injured": "5", 
          "State": "Alabama", 
          "Total": "5"
        }, 
        {
          "Date": "26/01/2019", 
          "Dead": "1", 
          "Description": "A gunman opened fire on individuals attending a candlelight vigil, killing one, and wounding three others.", 
          "Injured": "3", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "26/01/2019", 
          "Dead": "0", 
          "Description": "A man was asked to leave a bar; shortly after, he came back and shot five people, critically wounding two.", 
          "Injured": "5", 
          "State": "Indiana", 
          "Total": "5"
        }, 
        {
          "Date": "26/01/2019", 
          "Dead": "0", 
          "Description": "Two people were found with bullet wounds in front of a residence, and two more arrived at a hospital with gunshot injuries from the same shooting.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "26/01/2019", 
          "Dead": "5", 
          "Description": "January 2019 Louisiana shootings: A 21-year-old man killed five people, including his parents, in two parishes in Louisiana. The suspect fled to Virginia and was arrested the next day.", 
          "Injured": "0", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "24/01/2019", 
          "Dead": "4", 
          "Description": "A man killed two people and injured one inside a local bar, then drove away and broke into a home and killed the homeowner before killing himself.", 
          "Injured": "1", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "24/01/2019", 
          "Dead": "4", 
          "Description": "A man killed four individuals and injured another in two separate shootings.", 
          "Injured": "1", 
          "State": "Georgia", 
          "Total": "5"
        }, 
        {
          "Date": "23/01/2019", 
          "Dead": "5", 
          "Description": "2019 Sebring shooting: At least five people were killed in a hostage incident and shooting at a bank. The suspect was taken into custody by police.", 
          "Injured": "0", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "20/01/2019", 
          "Dead": "0", 
          "Description": "Three adults and a child were wounded in a shooting while attending a block party.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "19/01/2019", 
          "Dead": "1", 
          "Description": "One person was killed and four others were wounded in a shooting at a nightclub.", 
          "Injured": "4", 
          "State": "South Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "19/01/2019", 
          "Dead": "3", 
          "Description": "A man killed two people and injured two more before killing himself.", 
          "Injured": "2", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "19/01/2019", 
          "Dead": "0", 
          "Description": "In an apparent targeted shooting, four individuals were discovered shot in a building.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "19/01/2019", 
          "Dead": "0", 
          "Description": "Early in the morning, three women and a man were involved in a fight and were injured in the ensuing shooting.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "19/01/2019", 
          "Dead": "3", 
          "Description": "Three people were killed and two more were injured by a homeowner in a possible attempted home invasion.", 
          "Injured": "2", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "17/01/2019", 
          "Dead": "3", 
          "Description": "Three people were killed and another person was wounded in a shooting at a home. Two men were arrested in relation to the shooting.", 
          "Injured": "1", 
          "State": "Kentucky", 
          "Total": "4"
        }, 
        {
          "Date": "16/01/2019", 
          "Dead": "1", 
          "Description": "A man was killed and five other people were injured in a shooting. The Mayor of Jacksonville described the shooting as gang-related, although this characterization has been disputed by the sister of the deceased man.", 
          "Injured": "5", 
          "State": "Florida", 
          "Total": "6"
        }, 
        {
          "Date": "16/01/2019", 
          "Dead": "3", 
          "Description": "Three people were killed and another one was wounded in a shooting.", 
          "Injured": "1", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "15/01/2019", 
          "Dead": "1", 
          "Description": "An argument over a gun inside a local ice cream shop led to a shooting. One man was killed and four others, including the suspected shooter, were injured.", 
          "Injured": "4", 
          "State": "Arkansas", 
          "Total": "5"
        }, 
        {
          "Date": "13/01/2019", 
          "Dead": "1", 
          "Description": "An argument at a motel escalated into a shooting. One person was killed, and five others were injured.", 
          "Injured": "5", 
          "State": "Arizona", 
          "Total": "6"
        }, 
        {
          "Date": "06/01/2019", 
          "Dead": "0", 
          "Description": "A man injured four people in a shooting following an argument at a party. He was arrested the same day.", 
          "Injured": "4", 
          "State": "New Mexico", 
          "Total": "4"
        }, 
        {
          "Date": "04/01/2019", 
          "Dead": "3", 
          "Description": "A man killed his wife and son in their home and injured two people who were inside a vehicle before killing himself.", 
          "Injured": "2", 
          "State": "Virginia", 
          "Total": "5"
        }, 
        {
          "Date": "04/01/2019", 
          "Dead": "1", 
          "Description": "A man injured his brother and two friends before being killed by a police officer.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "04/01/2019", 
          "Dead": "3", 
          "Description": "An argument at the Torrance bowling alley escalated into a fight and three people were killed by gunshots, at least four others were wounded.  A suspect who was out of prison on parole has been arrested.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "7"
        }, 
        {
          "Date": "03/01/2019", 
          "Dead": "3", 
          "Description": "Three children under the age of six were found deceased along with a wounded woman in an apparent home invasion.", 
          "Injured": "1", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "02/01/2019", 
          "Dead": "1", 
          "Description": "A 16-year-old boy was killed and three others were wounded during a home invasion.", 
          "Injured": "3", 
          "State": "Arkansas", 
          "Total": "4"
        }, 
        {
          "Date": "01/01/2019", 
          "Dead": "0", 
          "Description": "Five people were shot and wounded outside of a nightclub around 6am local time.", 
          "Injured": "5", 
          "State": "South Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "01/01/2019", 
          "Dead": "0", 
          "Description": "Five people were shot and wounded around 3am local time at the University Village Shopping Center.", 
          "Injured": "5", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "31/12/2020", 
          "Dead": "1", 
          "Description": "A shooting unfolded outside a nightclub on New Year's Eve that killed a man and sent three others to the hospital.", 
          "Injured": "3", 
          "State": "Indiana", 
          "Total": "4"
        }, 
        {
          "Date": "31/12/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded after a shooting at a party. All four are expected to survive.", 
          "Injured": "4", 
          "State": "Oregon", 
          "Total": "4"
        }, 
        {
          "Date": "27/12/2020", 
          "Dead": "0", 
          "Description": "Four men were wounded after a shooting near a restaurant.", 
          "Injured": "4", 
          "State": "United States Virgin Islands", 
          "Total": "4"
        }, 
        {
          "Date": "26/12/2020", 
          "Dead": "1", 
          "Description": "Six people were wounded in an evening shooting. One of the victims later died at the hospital.", 
          "Injured": "5", 
          "State": "Massachusetts", 
          "Total": "6"
        }, 
        {
          "Date": "26/12/2020", 
          "Dead": "3", 
          "Description": "Don Carter Lanes shooting: Three people are killed and three others injured in a shooting at a bowling alley. The shooter is believed to have selected his victims at random. A person of interest has been taken into custody by authorities.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "26/12/2020", 
          "Dead": "2", 
          "Description": "Two men were killed and two injured in an early morning targeted shooting in Ybor City.", 
          "Injured": "2", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "26/12/2020", 
          "Dead": "1", 
          "Description": "Three adults and a juvenile were wounded in an afternoon drive-by shooting. One of the wounded later died at the hospital.", 
          "Injured": "3", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "25/12/2020", 
          "Dead": "1", 
          "Description": "Four people were injured and one was killed after a shooting on Christmas Day.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "25/12/2020", 
          "Dead": "5", 
          "Description": "Five females aged between eight and fifty; three were children, were found killed by a family member. Police believe it was domestic related.", 
          "Injured": "0", 
          "State": "Arkansas", 
          "Total": "5"
        }, 
        {
          "Date": "24/12/2020", 
          "Dead": "1", 
          "Description": "After a teenager got into a conflict with another group, four people were injured and one was killed after a shooting at the teenager's home.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "22/12/2020", 
          "Dead": "5", 
          "Description": "Four individuals were discovered killed in three separate homes after wellness checks were called for them. The perpetrator died of a self inflicted gunshot wound.", 
          "Injured": "0", 
          "State": "Mississippi", 
          "Total": "5"
        }, 
        {
          "Date": "20/12/2020", 
          "Dead": "4", 
          "Description": "A wife, husband, and two children were fatally shot inside of their home.", 
          "Injured": "0", 
          "State": "Kentucky", 
          "Total": "4"
        }, 
        {
          "Date": "20/12/2020", 
          "Dead": "2", 
          "Description": "Two men were killed at a sports bar in an apparent targeted shooting. Two innocent bystanders were wounded.", 
          "Injured": "2", 
          "State": "Connecticut", 
          "Total": "4"
        }, 
        {
          "Date": "19/12/2020", 
          "Dead": "0", 
          "Description": "Six people were wounded after someone walked into and opened fire inside a South Side beauty salon in the Burnside neighborhood, shortly after midnight. The salon was hosting an after hours party.", 
          "Injured": "6", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "18/12/2020", 
          "Dead": "0", 
          "Description": "Three men and a woman were shot in the Kingsessing neighborhood.  Cocaine and firearms were recovered on the scene.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "14/12/2020", 
          "Dead": "0", 
          "Description": "Following a dispute outside of a restaurant four were people shot.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "13/12/2020", 
          "Dead": "4", 
          "Description": "A family member discovered two parents and two children, aged 12 and 13-years-old, killed in their home. The killer was reportedly a third teenaged child of the family.", 
          "Injured": "0", 
          "State": "West Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "12/12/2020", 
          "Dead": "1", 
          "Description": "A man was killed and three others wounded in an early morning shooting.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "12/12/2020", 
          "Dead": "1", 
          "Description": "A man was killed and three others were wounded inside a deli.", 
          "Injured": "3", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "12/12/2020", 
          "Dead": "0", 
          "Description": "Four men were wounded in an afternoon shooting in the Boerum Hill neighborhood of Brooklyn.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "12/12/2020", 
          "Dead": "1", 
          "Description": "A man was killed and three others wounded at a large early morning gathering.", 
          "Injured": "3", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "10/12/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded near the Charles Spencer Elementary School during school hours. No students were harmed or in danger.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "10/12/2020", 
          "Dead": "0", 
          "Description": "Five men were wounded in a late night shooting. They were playing dice outside an apartment complex when a man drove up and started shooting. The man chased them through the complex before fleeing.", 
          "Injured": "5", 
          "State": "Mississippi", 
          "Total": "5"
        }, 
        {
          "Date": "10/12/2020", 
          "Dead": "2", 
          "Description": "Two people were killed and two wounded in a parking lot after an SUV pulled into it.", 
          "Injured": "2", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "08/12/2020", 
          "Dead": "2", 
          "Description": "A group of four men attempted to rob a home at gun point. The home owner opened fire in defense and killed two of the robbers and wounded the other two. The homeowner's four-year-old child was also wounded.", 
          "Injured": "3", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "06/12/2020", 
          "Dead": "0", 
          "Description": "Six people were wounded at a rodeo outdoor live music venue, with one to two thousand attendees present. Police had been called to the venue three times prior to the shooting, due to fights.", 
          "Injured": "6", 
          "State": "Texas", 
          "Total": "6"
        }, 
        {
          "Date": "05/12/2020", 
          "Dead": "1", 
          "Description": "Officers responding to reports of a shooting shortly after midnight found a woman dead and three other individuals injured.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "05/12/2020", 
          "Dead": "0", 
          "Description": "Shortly before midnight an argument between two men at a bonfire escalated. Six people were wounded.", 
          "Injured": "6", 
          "State": "North Carolina", 
          "Total": "6"
        }, 
        {
          "Date": "04/12/2020", 
          "Dead": "0", 
          "Description": "Three men and a seventeen-year-old girl were injured after someone shot at them from across the street. The group was standing outside a home in West Garfield Park.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "01/12/2020", 
          "Dead": "1", 
          "Description": "An eighteen-year-old was killed and three other teenagers were injured after a dispute between two groups escalated.", 
          "Injured": "3", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "30/11/2020", 
          "Dead": "4", 
          "Description": "A man was killed, and shortly later a woman and two children; aged 10 and 7-years-old were killed at a home. An additional child was found uninjured in the home.", 
          "Injured": "0", 
          "State": "Alaska", 
          "Total": "4"
        }, 
        {
          "Date": "29/11/2020", 
          "Dead": "0", 
          "Description": "Eleven people were shot at a motorcycle club. The injured were treated at nearby hospitals and no arrests have been made.", 
          "Injured": "11", 
          "State": "Mississippi", 
          "Total": "11"
        }, 
        {
          "Date": "29/11/2020", 
          "Dead": "2", 
          "Description": "Two people were killed and two wounded in an apartment complex near Memphis International Airport.", 
          "Injured": "2", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "28/11/2020", 
          "Dead": "0", 
          "Description": "Four people were shot in the evening, in New Orleans East.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "28/11/2020", 
          "Dead": "1", 
          "Description": "A man was killed and fourteen other people were injured shortly after midnight at a nightclub. At least three men fled in a vehicle and continued to fire from the vehicle.", 
          "Injured": "14", 
          "State": "South Carolina", 
          "Total": "15"
        }, 
        {
          "Date": "27/11/2020", 
          "Dead": "1", 
          "Description": "A woman was killed and five people wounded by gunfire and two stabbed outside a nightclub after an early morning argument.", 
          "Injured": "5", 
          "State": "Georgia", 
          "Total": "6"
        }, 
        {
          "Date": "27/11/2020", 
          "Dead": "0", 
          "Description": "Five people were wounded while leaving a club in the early morning. A sixth person was wounded by a stray bullet while at home.", 
          "Injured": "6", 
          "State": "Ohio", 
          "Total": "6"
        }, 
        {
          "Date": "26/11/2020", 
          "Dead": "1", 
          "Description": "One person was killed and four injured in a shooting outside a 7-Eleven store. The possible suspects were arrested on other charges in nearby Parker, Arizona.", 
          "Injured": "4", 
          "State": "Nevada", 
          "Total": "5"
        }, 
        {
          "Date": "22/11/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in an evening shooting in the Stuyvesant area.", 
          "Injured": "4", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "22/11/2020", 
          "Dead": "1", 
          "Description": "A woman was killed and six others were injured at a party in the Bedford\ufffdCStuyvesant neighborhood of Brooklyn.", 
          "Injured": "6", 
          "State": "New York", 
          "Total": "7"
        }, 
        {
          "Date": "21/11/2020", 
          "Dead": "0", 
          "Description": "Six people were wounded in an early morning shooting in Gresham on the South Side after a man opened fire on them from the sidewalk.", 
          "Injured": "6", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "21/11/2020", 
          "Dead": "1", 
          "Description": "A woman was killed and three adults and a teenager were wounded at an illegal warehouse party.", 
          "Injured": "4", 
          "State": "Arizona", 
          "Total": "5"
        }, 
        {
          "Date": "21/11/2020", 
          "Dead": "2", 
          "Description": "Two people were killed and two others wounded at a Sonic Drive-In after police responded to a call of a bomb inside a truck. A suspect has been arrested.", 
          "Injured": "2", 
          "State": "Nebraska", 
          "Total": "4"
        }, 
        {
          "Date": "20/11/2020", 
          "Dead": "3", 
          "Description": "A family of four, a husband and wife and their two adult sons, were shot in their home. The husband is in critical condition at a local hospital. A recently discharged gun was found at the scene and police do not believe there is a suspect at large.", 
          "Injured": "1", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "20/11/2020", 
          "Dead": "0", 
          "Description": "Mayfair Mall shooting: Eight people were hospitalized with non-life-threatening injuries after a person opened fire at the Mayfair Mall. Several people, including a 15-year-old boy from Milwaukee, have been arrested in the case.", 
          "Injured": "8", 
          "State": "Wisconsin", 
          "Total": "8"
        }, 
        {
          "Date": "19/11/2020", 
          "Dead": "1", 
          "Description": "One person was killed and three injured in a drive-by shooting while standing under a carport.", 
          "Injured": "3", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "18/11/2020", 
          "Dead": "3", 
          "Description": "A man shot and killed his uncle and cousin and wounded his wife and aunt before committing suicide. His uninjured infant daughter was also in the home.", 
          "Injured": "2", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "18/11/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in an evening shooting.", 
          "Injured": "4", 
          "State": "South Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "17/11/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded at a home that had been the site of a break in back in January 2020.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "16/11/2020", 
          "Dead": "0", 
          "Description": "Two adults and two children under the age of seven were wounded in a drive-by shooting. They were standing outside a home in Golden Glades.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "16/11/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in a drive-by shooting while walking down a road on the West Side. Two of the wounded were teenage girls.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "16/11/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded at the Dearborn homes after another group began an argument which escalated.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "15/11/2020", 
          "Dead": "0", 
          "Description": "Five people were shot shortly after midnight while attending a street gathering.", 
          "Injured": "5", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "15/11/2020", 
          "Dead": "2", 
          "Description": "Two men were killed and two injured at a trailer park in a late night shooting.", 
          "Injured": "2", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "14/11/2020", 
          "Dead": "3", 
          "Description": "Shortly before midnight, three people were killed and a pregnant woman wounded in a home.", 
          "Injured": "1", 
          "State": "South Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "14/11/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in a late night shooting at an event center. The center had been rented out for a birthday party prior to the shooting.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "14/11/2020", 
          "Dead": "0", 
          "Description": "Four teenagers, aged between twelve and fifteen, were wounded in an evening drive by shooting in the Winton Hills area.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "14/11/2020", 
          "Dead": "2", 
          "Description": "Officers responding to an assault with a deadly weapon call found two men who later died at a hospital. Three additional wounded individuals were identified at a hospital.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "12/11/2020", 
          "Dead": "2", 
          "Description": "Officers responding to reports of multiple gunshots found two men dead and four wounded in an evening shooting.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "6"
        }, 
        {
          "Date": "12/11/2020", 
          "Dead": "0", 
          "Description": "Six people were shot, including two police officers, when an argument inside a nightclub escalated.", 
          "Injured": "6", 
          "State": "North Carolina", 
          "Total": "6"
        }, 
        {
          "Date": "10/11/2020", 
          "Dead": "1", 
          "Description": "A man was killed and seven other men and teenagers were wounded in a drive-by shooting. A car opened fire on a group gathered at a basketball court next to a Boys & Girls Club.", 
          "Injured": "7", 
          "State": "Florida", 
          "Total": "8"
        }, 
        {
          "Date": "09/11/2020", 
          "Dead": "0", 
          "Description": "Two adults and two children were wounded in an afternoon shooting at a local food mart. Police are investigating it as possible gang activity.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "08/11/2020", 
          "Dead": "0", 
          "Description": "Two adults and two children under the age of twelve were wounded in a gated apartment complex.", 
          "Injured": "4", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "08/11/2020", 
          "Dead": "0", 
          "Description": "Eight people and a dog were injured in a shooting on Commerce Street in the early hours of the morning.", 
          "Injured": "8", 
          "State": "Tennessee", 
          "Total": "8"
        }, 
        {
          "Date": "07/11/2020", 
          "Dead": "0", 
          "Description": "Four men were wounded outside a local bar shortly before midnight.", 
          "Injured": "4", 
          "State": "Kansas", 
          "Total": "4"
        }, 
        {
          "Date": "07/11/2020", 
          "Dead": "1", 
          "Description": "One individual was killed and three injured inside a local bar shortly after midnight.", 
          "Injured": "3", 
          "State": "South Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "06/11/2020", 
          "Dead": "2", 
          "Description": "Two people were wounded and two killed in the Hollygrove section of the city. One of those killed may have been the target of the shooting.", 
          "Injured": "2", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "05/11/2020", 
          "Dead": "3", 
          "Description": "Three people were killed and one injured near an apartment complex. The shooting is believed to be connected to a hit and run accident just down the road.", 
          "Injured": "1", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "04/11/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in a shooting in a parking lot at a local sporting complex and gym located near the Jefferson City High School.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "03/11/2020", 
          "Dead": "4", 
          "Description": "A man shot and killed three people at an apartment complex before being shot dead by police. A fifth person was taken to a hospital with gunshot wounds but the condition of the person was not yet known.", 
          "Injured": "1", 
          "State": "Nevada", 
          "Total": "5"
        }, 
        {
          "Date": "01/11/2020", 
          "Dead": "1", 
          "Description": "A man was killed and three wounded near a local bar that was hosting a Halloween party in the early morning.", 
          "Injured": "3", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "01/11/2020", 
          "Dead": "0", 
          "Description": "Six people were wounded in an early morning shooting at a party in an abandoned house.", 
          "Injured": "6", 
          "State": "South Carolina", 
          "Total": "6"
        }, 
        {
          "Date": "01/11/2020", 
          "Dead": "1", 
          "Description": "A man was killed and three others wounded shortly after midnight. A suspect was arrested shortly after.", 
          "Injured": "3", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "01/11/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded outside of a bar after an early morning argument escalated in a large crowd. The bar was the scene of a similar shooting in February 2019.", 
          "Injured": "4", 
          "State": "Indiana", 
          "Total": "4"
        }, 
        {
          "Date": "01/11/2020", 
          "Dead": "1", 
          "Description": "A man was killed and three others injured after someone fired into an event center.", 
          "Injured": "3", 
          "State": "Oklahoma", 
          "Total": "4"
        }, 
        {
          "Date": "01/11/2020", 
          "Dead": "2", 
          "Description": "Two men were killed and two wounded outside an apartment building that was hosting a Halloween party, in the early morning.", 
          "Injured": "2", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "01/11/2020", 
          "Dead": "2", 
          "Description": "Two men were killed and two wounded in the desert near Tucson International Airport in the early morning.", 
          "Injured": "2", 
          "State": "Arizona", 
          "Total": "4"
        }, 
        {
          "Date": "31/10/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in a drive-by shooting in the Natomas area. Those wounded had gathered at a home there.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "31/10/2020", 
          "Dead": "0", 
          "Description": "Five people were wounded after an argument escalated outside of a house party, shortly after midnight.", 
          "Injured": "5", 
          "State": "Washington", 
          "Total": "5"
        }, 
        {
          "Date": "31/10/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in an early morning shooting at a strip club. The shooter pulled up outside the club and opened fire.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "31/10/2020", 
          "Dead": "0", 
          "Description": "Seven people were wounded at a party held in a hotel room at the University of Maryland.", 
          "Injured": "7", 
          "State": "Maryland", 
          "Total": "7"
        }, 
        {
          "Date": "31/10/2020", 
          "Dead": "0", 
          "Description": "Four people were shot in a neighborhood, at a believed house party after a dispute escalated. The wounded are believed to be teenagers.", 
          "Injured": "4", 
          "State": "Nevada", 
          "Total": "4"
        }, 
        {
          "Date": "30/10/2020", 
          "Dead": "1", 
          "Description": "Two groups of men got into a dispute inside a cigar and hookah lounge and the argument escalated. One man was killed and three injured.", 
          "Injured": "3", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "30/10/2020", 
          "Dead": "1", 
          "Description": "A man was killed and two adults and a sixteen-year-old were injured after a man entered a home in Morgan Park and opened fire. Police believe the shooting was drug related.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "29/10/2020", 
          "Dead": "0", 
          "Description": "A patrol officer discovered four people wounded after an argument escalated late at night. One of the victims has a concealed weapons permit, but officers are unsure who actually fired.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "28/10/2020", 
          "Dead": "1", 
          "Description": "One individual was killed and three others wounded after a heated argument escalated.", 
          "Injured": "3", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "28/10/2020", 
          "Dead": "0", 
          "Description": "Officers responded to a report of multiple shots fired and found four individuals wounded in a home.", 
          "Injured": "4", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "26/10/2020", 
          "Dead": "1", 
          "Description": "An eighteen-year-old was killed and three other teens were wounded in a house during the evening.", 
          "Injured": "3", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "25/10/2020", 
          "Dead": "2", 
          "Description": "A fight broke out at an early morning house party and escalated. Two men were killed and three others wounded.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "25/10/2020", 
          "Dead": "0", 
          "Description": "A dispute potentially near I-35 escalated and four people within a car were shot. The car crashed a short time later. Three adults and a thirteen-year-old were wounded and three additional children were not injured.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "25/10/2020", 
          "Dead": "1", 
          "Description": "Four men were shot in the early morning. Two men were later arrested for the shooting and a wounded man died later at the hospital.", 
          "Injured": "3", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "24/10/2020", 
          "Dead": "2", 
          "Description": "A gunman walked into a family's front yard and opened fire on a family gathering shortly before midnight. The family had gathered for a funeral and two were killed and eight wounded.", 
          "Injured": "8", 
          "State": "Mississippi", 
          "Total": "10"
        }, 
        {
          "Date": "22/10/2020", 
          "Dead": "1", 
          "Description": "Shortly before midnight someone opened fire in a Miami neighborhood. A man was killed and two adults and an infant girl were wounded.", 
          "Injured": "3", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "22/10/2020", 
          "Dead": "0", 
          "Description": "Officers responded to a gunfire locator alert and multiple 911 calls and found two individuals wounded. An additional two transported themselves to the hospital.", 
          "Injured": "4", 
          "State": "Massachusetts", 
          "Total": "4"
        }, 
        {
          "Date": "22/10/2020", 
          "Dead": "0", 
          "Description": "Three men and a woman were wounded in a shooting shortly after midnight.", 
          "Injured": "4", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "22/10/2020", 
          "Dead": "0", 
          "Description": "A vehicle with six passengers \ufffdC two adults and four juveniles \ufffdC  was traveling on I-10 when a car next to them opened fire. Five people in the car were wounded.", 
          "Injured": "5", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "21/10/2020", 
          "Dead": "1", 
          "Description": "A man was killed and five other people were wounded in a drive-by shooting in Prospect Lefferts Gardens in Brooklyn.", 
          "Injured": "5", 
          "State": "New York", 
          "Total": "6"
        }, 
        {
          "Date": "21/10/2020", 
          "Dead": "1", 
          "Description": "A gunman ambushed four people waiting in a car at a McDonald's drive through. One person in the car was killed and two adults and a thirteen-year-old were injured.", 
          "Injured": "3", 
          "State": "Mississippi", 
          "Total": "4"
        }, 
        {
          "Date": "20/10/2020", 
          "Dead": "3", 
          "Description": "An argument at a local open-mike night for rappers at a club escalated when at least two people opened fire. Three men were killed and one injured.", 
          "Injured": "1", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "19/10/2020", 
          "Dead": "0", 
          "Description": "Five people were wounded in a drive-by-shooting while standing outside a house during a party. A seventeen-year-old and four adults were among the injured.", 
          "Injured": "5", 
          "State": "Ohio", 
          "Total": "5"
        }, 
        {
          "Date": "19/10/2020", 
          "Dead": "1", 
          "Description": "A man was killed and three others wounded after gunfire erupted in front of a convenience store.", 
          "Injured": "3", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "18/10/2020", 
          "Dead": "1", 
          "Description": "An argument at an early morning house party escalated and one man was killed. Another adult and two seventeen-year-old girls were wounded.", 
          "Injured": "3", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "18/10/2020", 
          "Dead": "1", 
          "Description": "A gunman walked into an East Garfield Park home and opened fire. He killed one man and wounded four others.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "18/10/2020", 
          "Dead": "0", 
          "Description": "Two men were discovered wounded at a home near Belmont University, and two others arrived at local hospitals later.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "17/10/2020", 
          "Dead": "1", 
          "Description": "Shortly after midnight two men approached a home hosting a Halloween themed house party opened fire on the closed garage door. A 21-year-old college student was killed and five others were wounded.", 
          "Injured": "5", 
          "State": "New York", 
          "Total": "6"
        }, 
        {
          "Date": "17/10/2020", 
          "Dead": "0", 
          "Description": "A patrol officer heard gunfire near a local lounge in the early morning, and found a wounded man. Four others were transported by private vehicles to local hospitals.", 
          "Injured": "5", 
          "State": "South Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "16/10/2020", 
          "Dead": "2", 
          "Description": "Shortly before midnight two men were killed and four injured at a local restaurant.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "16/10/2020", 
          "Dead": "3", 
          "Description": "Three people were killed and one wounded after an argument occurred in the early morning at a private motorcycle club over a motorcycle. The wounded victim is refusing to cooperate with police.", 
          "Injured": "1", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "16/10/2020", 
          "Dead": "1", 
          "Description": "Six people were injured in a drive-by shooting and one was killed. Three of the injured were children and three were adults. The victim killed was one year old.", 
          "Injured": "6", 
          "State": "Arizona", 
          "Total": "7"
        }, 
        {
          "Date": "16/10/2020", 
          "Dead": "1", 
          "Description": "A man was killed and another and two women were injured in an evening shooting.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "15/10/2020", 
          "Dead": "0", 
          "Description": "Seven people were wounded in an evening shooting in Southwest Baltimore. Two people were discovered at the scene and five were later discovered at area hospitals.", 
          "Injured": "7", 
          "State": "Maryland", 
          "Total": "7"
        }, 
        {
          "Date": "15/10/2020", 
          "Dead": "2", 
          "Description": "A party after a University of Louisiana football game in Moore Park led to an early morning shooting after an argument escalated. Two people were wounded and two killed.", 
          "Injured": "2", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "14/10/2020", 
          "Dead": "0", 
          "Description": "Four men were injured at a gas station in an evening shooting in Southwest Philadelphia.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "12/10/2020", 
          "Dead": "2", 
          "Description": "A man was killed and four others were injured at a local grocery store early in the morning. One of the injured died three days later.", 
          "Injured": "3", 
          "State": "South Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "11/10/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in an evening shooting at a downtown hotel. Additional guns and pills were discovered at the scene of the shooting.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "10/10/2020", 
          "Dead": "1", 
          "Description": "Four people were inside a vehicle when they were hit by gunfire near the West Garfield Park on the West Side. A man died and two adults and a seventeen-year-old girl were wounded.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "10/10/2020", 
          "Dead": "0", 
          "Description": "A man opened fire after he was ejected from a nightclub by firing into the club while standing in the road. Three people were discovered in the club and five were taken to the hospital in private vehicles.", 
          "Injured": "8", 
          "State": "South Carolina", 
          "Total": "8"
        }, 
        {
          "Date": "10/10/2020", 
          "Dead": "2", 
          "Description": "A woman and her six-year-old daughter were killed and her other daughters aged sixteen and ten-years-old were wounded. The woman's boyfriend was arrested as a person of interest.", 
          "Injured": "2", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "08/10/2020", 
          "Dead": "1", 
          "Description": "At least two gunmen opened fire on a group of people in the city's Frankford neighborhood. One man was killed and six others wounded.", 
          "Injured": "6", 
          "State": "Pennsylvania", 
          "Total": "7"
        }, 
        {
          "Date": "07/10/2020", 
          "Dead": "1", 
          "Description": "A man was killed and one man and three women were injured in an early morning shooting at a house party. Two teenagers were arrested and charged for the shooting.", 
          "Injured": "4", 
          "State": "Alaska", 
          "Total": "5"
        }, 
        {
          "Date": "07/10/2020", 
          "Dead": "1", 
          "Description": "One man was killed and three injured in an evening shooting at a Brooklyn building. Neighbors claim that the building was a local gambling den.", 
          "Injured": "3", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "05/10/2020", 
          "Dead": "0", 
          "Description": "Two men and two women were shot in an evening shooting, with one victim in critical condition.", 
          "Injured": "4", 
          "State": "Washington, D.C.", 
          "Total": "4"
        }, 
        {
          "Date": "04/10/2020", 
          "Dead": "3", 
          "Description": "Police responding to reports of an early morning shooting found three men dead outside an establishment. Four additional wounded were identified at the hospital after transporting themselves.", 
          "Injured": "4", 
          "State": "Indiana", 
          "Total": "7"
        }, 
        {
          "Date": "04/10/2020", 
          "Dead": "1", 
          "Description": "A fight broke out between two women inside a store and shortly after three men arrived with guns and entered the store. The men opened fire, and customers returned fire, with one man killed and three adults and two juveniles injured.", 
          "Injured": "5", 
          "State": "Georgia", 
          "Total": "6"
        }, 
        {
          "Date": "03/10/2020", 
          "Dead": "1", 
          "Description": "A nine-year-old girl was killed and two adults and a six-year-old girl were wounded at a Del Paso Heights park. They were part of a family gathering when a gunman drove up and opened fire.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "03/10/2020", 
          "Dead": "0", 
          "Description": "At least five people were wounded in an early morning shooting at a house party. An argument had broken out and escalated into gun fire.", 
          "Injured": "5", 
          "State": "Tennessee", 
          "Total": "5"
        }, 
        {
          "Date": "02/10/2020", 
          "Dead": "0", 
          "Description": "A seventeen-year-old girl and three others were wounded in an evening shooting in Rainier Valley.", 
          "Injured": "4", 
          "State": "Washington", 
          "Total": "4"
        }, 
        {
          "Date": "02/10/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in a shooting in the Central Business District. Victims ran away from the original scene causing officers to believe there were more shootings than actual.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "01/10/2020", 
          "Dead": "0", 
          "Description": "Two women and three men were wounded in a shooting shortly before midnight in a rental hall.", 
          "Injured": "5", 
          "State": "Michigan", 
          "Total": "5"
        }, 
        {
          "Date": "30/09/2020", 
          "Dead": "0", 
          "Description": "Four North Carolina A&T State University students were wounded in an off-campus apartment complex.", 
          "Injured": "4", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "30/09/2020", 
          "Dead": "0", 
          "Description": "Seven people were shot at a funeral home.", 
          "Injured": "7", 
          "State": "Wisconsin", 
          "Total": "7"
        }, 
        {
          "Date": "30/09/2020", 
          "Dead": "0", 
          "Description": "Two men and two women were wounded inside an apartment with no signs of a break-in.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "29/09/2020", 
          "Dead": "0", 
          "Description": "Five men were wounded shortly before midnight while standing on a porch in the Logan section of the city.", 
          "Injured": "5", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "29/09/2020", 
          "Dead": "2", 
          "Description": "Two men were killed and two wounded in an afternoon shooting. The men were recording a music video and got into an argument with another group which escalated.", 
          "Injured": "2", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "28/09/2020", 
          "Dead": "0", 
          "Description": "Four men and two women were injured in an early morning shooting after a large crowd had congregated outside a Gentleman's club in the city's southwest side.", 
          "Injured": "6", 
          "State": "Michigan", 
          "Total": "6"
        }, 
        {
          "Date": "27/09/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded near an intersection in the afternoon after an argument escalated. The gunman walked away to his vehicle, retrieved a pistol, opened fire, and drove away.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "27/09/2020", 
          "Dead": "0", 
          "Description": "A man shot and wounded four people shortly before midnight, with one victim discovered in a vehicle by police.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "27/09/2020", 
          "Dead": "1", 
          "Description": "A nineteen-year-old was killed and three others injured in an evening shooting.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "26/09/2020", 
          "Dead": "0", 
          "Description": "Two teens, aged fifteen and sixteen-years-old and two adults were wounded just before midnight at a block party in West Philadelphia. The teens and one adult had been leaving the party when the gunman opened fire.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "26/09/2020", 
          "Dead": "1", 
          "Description": "One man died and three others injured after someone opened fire on an early morning party in an apartment complex parking lot.", 
          "Injured": "3", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "26/09/2020", 
          "Dead": "2", 
          "Description": "Two people were killed and six injured in a shooting at a motorcycle club where over 100 people had gathered. Four others suffered injuries from broken glass and debris while fleeing from the gunfire.", 
          "Injured": "6", 
          "State": "Iowa", 
          "Total": "8"
        }, 
        {
          "Date": "26/09/2020", 
          "Dead": "0", 
          "Description": "Two men and two women were injured in an early morning drive-by shooting in Marquette Park on the Southwest Side.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "25/09/2020", 
          "Dead": "0", 
          "Description": "Four teenagers aged between seventeen and nineteen-years-old were injured in a late night shooting in the Frankford section of the city.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "23/09/2020", 
          "Dead": "1", 
          "Description": "A woman was killed and her mother and young child were injured when a man entered the home and shot. He shot and injured an additional woman while carjacking her in an attempt to flee.", 
          "Injured": "3", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "23/09/2020", 
          "Dead": "0", 
          "Description": "Three men and two women were injured outside a bar early in the morning after an argument escalated. The bar was the scene of another mass shooting in June were a man died and six were injured.", 
          "Injured": "5", 
          "State": "Minnesota", 
          "Total": "5"
        }, 
        {
          "Date": "21/09/2020", 
          "Dead": "1", 
          "Description": "A man barged into a home in the early morning and opened fire, wounding four adults and killing a four-year-old child. The child reportedly was held by his mother when the man opened fire and was struck and killed in her arms.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "5"
        }, 
        {
          "Date": "20/09/2020", 
          "Dead": "0", 
          "Description": "Two women were discovered wounded in front of a house in Queens by police. Two men arrived at the hospital by private vehicles at a later time.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "20/09/2020", 
          "Dead": "1", 
          "Description": "A woman was killed and three others injured in a housing complex parking lot shortly after midnight. A large crowd had gathered and someone opened fire.", 
          "Injured": "3", 
          "State": "Connecticut", 
          "Total": "4"
        }, 
        {
          "Date": "19/09/2020", 
          "Dead": "1", 
          "Description": "A woman was killed and four other people were injured in an early morning shooting at a street party.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "5"
        }, 
        {
          "Date": "19/09/2020", 
          "Dead": "2", 
          "Description": "Rochester shooting: Two people were killed and 14 others were injured in Rochester at a backyard party on Pennsylvania Avenue.", 
          "Injured": "14", 
          "State": "New York", 
          "Total": "16"
        }, 
        {
          "Date": "19/09/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in West Pullman less than an hour after the shooting in West Englewood. Two sedans pulled up to a group outside and opened fire towards people on the sidewalk, home porch and inside the home.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "19/09/2020", 
          "Dead": "0", 
          "Description": "Four men were wounded in West Englewood while standing outside when someone opened fire.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "19/09/2020", 
          "Dead": "0", 
          "Description": "Police officers responded to a shooting after a ShotShopper alert and found four people wounded.", 
          "Injured": "4", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "19/09/2020", 
          "Dead": "0", 
          "Description": "Five people were shot in an evening shooting.", 
          "Injured": "5", 
          "State": "Arkansas", 
          "Total": "5"
        }, 
        {
          "Date": "18/09/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in a drive-by afternoon shooting, near I-630.", 
          "Injured": "4", 
          "State": "Arkansas", 
          "Total": "4"
        }, 
        {
          "Date": "16/09/2020", 
          "Dead": "2", 
          "Description": "Two men were killed and three wounded while playing basketball at the Roberto Clemente Playground in Spring Garden. Police believe the men were targeted as the three shooters chased them down, after the first confrontation.", 
          "Injured": "3", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "15/09/2020", 
          "Dead": "2", 
          "Description": "Two people were killed and three others injured in a quintuple shooting near San Jose State University.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "15/09/2020", 
          "Dead": "0", 
          "Description": "Five people, including three teenagers, were wounded in a drive by shooting. The group were outside celebrating Mexican Independence.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "14/09/2020", 
          "Dead": "0", 
          "Description": "Three people were wounded in a vehicle and a fourth while walking down the street, after a drug deal turned into a robbery. One of the wounded was an eight-year-old girl.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "14/09/2020", 
          "Dead": "2", 
          "Description": "Two people died and six others were injured in an overnight shooting near Rutgers University.", 
          "Injured": "6", 
          "State": "New Jersey", 
          "Total": "8"
        }, 
        {
          "Date": "13/09/2020", 
          "Dead": "0", 
          "Description": "Seven people were wounded in a late night shooting outside a business in the city's southeast side. One victim's injuries were considered life-threatening.", 
          "Injured": "7", 
          "State": "Michigan", 
          "Total": "7"
        }, 
        {
          "Date": "13/09/2020", 
          "Dead": "3", 
          "Description": "A man opened fire inside a vehicle on I-24 and killed one person in his vehicle and wounded another. He attempted to carjack three vehicles and wounded two people, before taking two hostages. At the end of the hostage taking a hostage and the gunman were dead and the other hostage released.", 
          "Injured": "3", 
          "State": "Tennessee", 
          "Total": "6"
        }, 
        {
          "Date": "13/09/2020", 
          "Dead": "0", 
          "Description": "A security guard and three club goers were wounded after an individual opened fire from a car shortly after midnight.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "13/09/2020", 
          "Dead": "1", 
          "Description": "A man was killed and two adults and a seventeen-year-old boy were wounded while sitting on a homes porch in Englewood, after two men exited a vehicle and opened fire.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "12/09/2020", 
          "Dead": "2", 
          "Description": "A man opened fire at an early morning house party after an argument escalated in the Austin neighborhood. Another individual returned fire causing the first shooter and three others to be wounded and two others killed.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "12/09/2020", 
          "Dead": "0", 
          "Description": "Four adults and a teenager were wounded after a verbal altercation at a house party escalated.", 
          "Injured": "5", 
          "State": "North Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "11/09/2020", 
          "Dead": "0", 
          "Description": "Five people were wounded at a large party, with one aged sixteen-years-old.", 
          "Injured": "5", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "10/09/2020", 
          "Dead": "3", 
          "Description": "Four minutes after a shooting, police were alerted to a second in which three men died, and one wounded.", 
          "Injured": "1", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "09/09/2020", 
          "Dead": "1", 
          "Description": "A man was killed and three others wounded in the Wellston neighborhood.", 
          "Injured": "3", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "08/09/2020", 
          "Dead": "0", 
          "Description": "Five people including a seventeen-year-old were injured while playing a dice game when a vehicle pulled up and opened fire.", 
          "Injured": "5", 
          "State": "Maryland", 
          "Total": "5"
        }, 
        {
          "Date": "07/09/2020", 
          "Dead": "0", 
          "Description": "Four people including a fourteen-year-old boy were injured in Central City.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "07/09/2020", 
          "Dead": "0", 
          "Description": "A fifteen-year-old shooter opened fire at a group of people in a drive-by shooting, including a six-year-old in Brooklyn. Police believe the shooting to be gang related.", 
          "Injured": "5", 
          "State": "New York", 
          "Total": "5"
        }, 
        {
          "Date": "07/09/2020", 
          "Dead": "1", 
          "Description": "An eighteen-year-old was killed and four others injured after a fight broke out during a party in the Butler-Tarkington neighborhood over a broken table.", 
          "Injured": "4", 
          "State": "Indiana", 
          "Total": "5"
        }, 
        {
          "Date": "07/09/2020", 
          "Dead": "7", 
          "Description": "A shooting at a large marijuana grow house left seven people dead.", 
          "Injured": "0", 
          "State": "California", 
          "Total": "7"
        }, 
        {
          "Date": "07/09/2020", 
          "Dead": "1", 
          "Description": "An eight-year-old girl was killed and three others injured when another vehicle opened fire on them while they were sitting in another car in the Canaryville neighborhood.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "06/09/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in the South Shore neighborhood in a drive-by shooting. Three adults and a seventeen-year-old were injured.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "06/09/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded at a large house party after a fight broke out in the early morning.", 
          "Injured": "4", 
          "State": "Colorado", 
          "Total": "4"
        }, 
        {
          "Date": "06/09/2020", 
          "Dead": "0", 
          "Description": "Two people opened fire in an apartment and wounded three adults and a five-year-old child.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "06/09/2020", 
          "Dead": "0", 
          "Description": "Responding officers found a wounded man and three other wounded individuals transported themselves to the hospital.", 
          "Injured": "4", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "06/09/2020", 
          "Dead": "0", 
          "Description": "Six people were wounded in Swope Park where a large crowd had gathered to watch cars do burnouts and donuts.", 
          "Injured": "6", 
          "State": "Missouri", 
          "Total": "6"
        }, 
        {
          "Date": "06/09/2020", 
          "Dead": "1", 
          "Description": "One woman was killed and three others injured in the Hamilton Heights neighborhood.", 
          "Injured": "3", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "06/09/2020", 
          "Dead": "1", 
          "Description": "Responding officers found a man dead and two wounded at an early morning birthday party. Four other wounded were identified at the hospital.", 
          "Injured": "6", 
          "State": "Georgia", 
          "Total": "7"
        }, 
        {
          "Date": "06/09/2020", 
          "Dead": "0", 
          "Description": "Five people were wounded at a night club, and separate charges were filed against the club owner for operating during COVID-19 restrictions.", 
          "Injured": "5", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "05/09/2020", 
          "Dead": "0", 
          "Description": "A woman and three men were wounded after a party with multiple motorcycle clubs, had a large fight in the parking lot with multiple shooters.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "05/09/2020", 
          "Dead": "0", 
          "Description": "A man was found wounded at the River Market district, with witnesses stating the shooter opened fire after pulling a gun from his fanny pack. Three children aged, seventeen, sixteen and twelve-years-old were also wounded.", 
          "Injured": "4", 
          "State": "Arkansas", 
          "Total": "4"
        }, 
        {
          "Date": "05/09/2020", 
          "Dead": "1", 
          "Description": "Two men were discovered wounded by responding officers, one of whom later died at the hospital. Two more wounded were identified after transporting themselves to the hospital.", 
          "Injured": "3", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "05/09/2020", 
          "Dead": "0", 
          "Description": "Six people were wounded in an early morning shooting at a block party/protest that was organized by a man to protest \"inequitable narratives.\"", 
          "Injured": "6", 
          "State": "Florida", 
          "Total": "6"
        }, 
        {
          "Date": "03/09/2020", 
          "Dead": "0", 
          "Description": "Four men were wounded in a drive-by shooting shortly before midnight.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "03/09/2020", 
          "Dead": "0", 
          "Description": "Five men aged eighteen to twenty-six-years-old were found wounded in an east Germantown street shortly before midnight. A sixth man was found wounded in his apartment building from a stray bullet a half-block away.", 
          "Injured": "6", 
          "State": "Pennsylvania", 
          "Total": "6"
        }, 
        {
          "Date": "03/09/2020", 
          "Dead": "0", 
          "Description": "Two bystanders including a seventeen-year-old were wounded shortly before midnight at an apartment complex. Two additional wounded were discovered later by police, who stated the shooting occurred after the individuals they had met to purchase guns from, turned on them and opened fire.", 
          "Injured": "4", 
          "State": "Arkansas", 
          "Total": "4"
        }, 
        {
          "Date": "03/09/2020", 
          "Dead": "1", 
          "Description": "A nineteen-year-old was killed and two nineteen-year-old and an eighteen-year-old were injured, when a car pulled up alongside their vehicle and opened fire on I-530.", 
          "Injured": "3", 
          "State": "Arkansas", 
          "Total": "4"
        }, 
        {
          "Date": "02/09/2020", 
          "Dead": "2", 
          "Description": "Two seventeen-year-olds were killed and a seventeen and eighteen year old wounded in a shooting in Point Breeze.", 
          "Injured": "2", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "02/09/2020", 
          "Dead": "1", 
          "Description": "One man was killed and two other adults and a sixteen-year-old were wounded while playing cards in an early morning drive-by shooting.", 
          "Injured": "3", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "02/09/2020", 
          "Dead": "0", 
          "Description": "Three teenagers, two fifteen-year-olds and a seventeen-year-old, and an adult were wounded in the Brookfield Village neighborhood in East Oakland. Police believe it to be a targeted shooting.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "31/08/2020", 
          "Dead": "0", 
          "Description": "Police responding to a call of several people shot, found two adults and two teenagers aged thirteen and seventeen-years-old wounded in a townhouse complex.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "30/08/2020", 
          "Dead": "2", 
          "Description": "A nineteen and seventeen-year-old were killed and two other teenagers were wounded, when a vehicle pulled up to the car that they were in and opened fire. Officers believe at least one person in the vehicle was the intended target.", 
          "Injured": "2", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "30/08/2020", 
          "Dead": "0", 
          "Description": "Seven people were wounded at a community gathering at a local community center. Eyewitnesses were split on how the shooting occurred.", 
          "Injured": "7", 
          "State": "Kentucky", 
          "Total": "7"
        }, 
        {
          "Date": "30/08/2020", 
          "Dead": "1", 
          "Description": "Five people were wounded in an early morning shooting, with one later dying at a hospital.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "5"
        }, 
        {
          "Date": "30/08/2020", 
          "Dead": "1", 
          "Description": "Five people were shot, one fatally, at a restaurant in Morgan Park.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "30/08/2020", 
          "Dead": "0", 
          "Description": "Four adults and a fourteen-year-old girl were injured at a block party when an unknown individual opened fire early in the morning.", 
          "Injured": "5", 
          "State": "Kentucky", 
          "Total": "5"
        }, 
        {
          "Date": "30/08/2020", 
          "Dead": "0", 
          "Description": "A drive by shooting injured three adults standing outside early in the morning. An eight-year-old boy was injured when a bullet entered his bedroom through a wall.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "29/08/2020", 
          "Dead": "2", 
          "Description": "Shortly before midnight a group was walking down an alley toward a store, when they were approached by three men. One opened fire and killed two of the group and injured two others.", 
          "Injured": "2", 
          "State": "Nevada", 
          "Total": "4"
        }, 
        {
          "Date": "29/08/2020", 
          "Dead": "1", 
          "Description": "A man was killed and five others injured in an early morning shooting near a local pub.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "28/08/2020", 
          "Dead": "0", 
          "Description": "Four adults and a fifteen-year-old boy were wounded in a late night shooting in the Deep Ellum district.", 
          "Injured": "5", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "28/08/2020", 
          "Dead": "0", 
          "Description": "Four men were wounded by multiple shooters who fled the scene in the car they shot from.", 
          "Injured": "4", 
          "State": "Minnesota", 
          "Total": "4"
        }, 
        {
          "Date": "27/08/2020", 
          "Dead": "1", 
          "Description": "A sixteen-year-old boy was killed and three other juveniles were wounded in Gateway Discovery Park.", 
          "Injured": "3", 
          "State": "Oregon", 
          "Total": "4"
        }, 
        {
          "Date": "26/08/2020", 
          "Dead": "3", 
          "Description": "A man engaged in a year-long dispute with neighbors, shot four of them as they sat on his porch. Three died and one was wounded, with the shooter later turning himself in.", 
          "Injured": "1", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "26/08/2020", 
          "Dead": "0", 
          "Description": "Three men and a woman were injured in a late night shooting, while in a large gathering.", 
          "Injured": "4", 
          "State": "South Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "26/08/2020", 
          "Dead": "0", 
          "Description": "Three adults and a seventeen-year-old boy were injured in East Germantown in an evening shooting.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "25/08/2020", 
          "Dead": "0", 
          "Description": "Norfolk police said five people were shot on Wednesday night. One of the victims was a 1-month-old child. No suspect information is available at this time.", 
          "Injured": "5", 
          "State": "Virginia", 
          "Total": "5"
        }, 
        {
          "Date": "25/08/2020", 
          "Dead": "0", 
          "Description": "Four men were wounded in an evening shooting, with two being transported to the hospital in private vehicles.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "24/08/2020", 
          "Dead": "0", 
          "Description": "Four men were wounded after a vehicle pulled up and opened fire, with one of the wounded returning fire.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "24/08/2020", 
          "Dead": "1", 
          "Description": "A man was killed and three others wounded, in an early morning shooting.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "24/08/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in an evening shooting.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "24/08/2020", 
          "Dead": "1", 
          "Description": "A man was killed and four others including a teenage boy were wounded in a night shooting.", 
          "Injured": "4", 
          "State": "Virginia", 
          "Total": "5"
        }, 
        {
          "Date": "23/08/2020", 
          "Dead": "0", 
          "Description": "Seven people were wounded when gunfire erupted while a large crowd was gathered outside a gas station early in the morning.", 
          "Injured": "7", 
          "State": "Arkansas", 
          "Total": "7"
        }, 
        {
          "Date": "23/08/2020", 
          "Dead": "1", 
          "Description": "A man was killed and three others wounded in a housing complex in Brooklyn in the early morning.", 
          "Injured": "3", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "23/08/2020", 
          "Dead": "1", 
          "Description": "A nineteen-year-old man was killed and two men and two women injured in an early morning shooting at a party.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "5"
        }, 
        {
          "Date": "23/08/2020", 
          "Dead": "0", 
          "Description": "Four men were wounded at a party outside an apartment complex when a fight escalated early in the morning.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "23/08/2020", 
          "Dead": "0", 
          "Description": "Four men were wounded standing outside a business in the Englewood neighborhood, in an afternoon drive-by shooting.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "23/08/2020", 
          "Dead": "0", 
          "Description": "Early in the morning responding officers found three wounded individuals at a home near Pikes Peak International Raceway. Three more wounded were identified at a local hospital and some of the wounded are teenagers. Officers believe the shooting happened at a house party.", 
          "Injured": "6", 
          "State": "Colorado", 
          "Total": "6"
        }, 
        {
          "Date": "22/08/2020", 
          "Dead": "1", 
          "Description": "Shortly before midnight one man was killed and three others injured.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "22/08/2020", 
          "Dead": "1", 
          "Description": "One person was killed and three wounded after an early morning shooting near the Allison Bonnet Memorial Drive.", 
          "Injured": "3", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "19/08/2020", 
          "Dead": "0", 
          "Description": "A gun fight wounded two adults and two seventeen-year-olds in West Philadelphia.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "19/08/2020", 
          "Dead": "0", 
          "Description": "Five adults and a seventeen-year-old were wounded after a man stepped out of a vehicle and opened fire on a large gathering. The shooting took place in Gresham in the South Side.", 
          "Injured": "6", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "18/08/2020", 
          "Dead": "1", 
          "Description": "A man was killed and four others wounded including a fifteen-year-old in the Strawberry Mansion neighborhood.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "18/08/2020", 
          "Dead": "0", 
          "Description": "A car drove up to a Ravenswood Public Housing building in Queens and opened fire. A seventeen-year-old boy and three adults were wounded.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "18/08/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in the early morning at a large gathering in Twin Sisters Park.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "17/08/2020", 
          "Dead": "2", 
          "Description": "Two people were killed and two people were wounded in a shooting late at night before the car they were in crashed.", 
          "Injured": "2", 
          "State": "Kentucky", 
          "Total": "4"
        }, 
        {
          "Date": "17/08/2020", 
          "Dead": "0", 
          "Description": "Five people were wounded at Dove Park in an evening drive-by shooting.", 
          "Injured": "5", 
          "State": "Ohio", 
          "Total": "5"
        }, 
        {
          "Date": "17/08/2020", 
          "Dead": "0", 
          "Description": "Four men were wounded in an early morning shooting in Brooklyn. The suspected gunman fled in a car after opening fire.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "17/08/2020", 
          "Dead": "3", 
          "Description": "A man is accused of killing his ex-girlfriend, a man in her home, and a neighbor and wounding two others. He was later arrested after hiding in the surrounding woods.", 
          "Injured": "2", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "16/08/2020", 
          "Dead": "0", 
          "Description": "Five people were injured, one critically, in a shooting caused by a dispute at a flea market. A security guard returned fire.", 
          "Injured": "5", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "16/08/2020", 
          "Dead": "2", 
          "Description": "One person died at the scene and one later at the hospital with nine others wounded in an early morning shooting.", 
          "Injured": "9", 
          "State": "Ohio", 
          "Total": "11"
        }, 
        {
          "Date": "16/08/2020", 
          "Dead": "1", 
          "Description": "An eighteen-year-old was killed and three others wounded after a disturbance occurred at a large gathering.", 
          "Injured": "3", 
          "State": "Kentucky", 
          "Total": "4"
        }, 
        {
          "Date": "16/08/2020", 
          "Dead": "2", 
          "Description": "Two men were killed and five others were wounded in a shooting shortly after an earlier shooting.", 
          "Injured": "5", 
          "State": "Colorado", 
          "Total": "7"
        }, 
        {
          "Date": "16/08/2020", 
          "Dead": "1", 
          "Description": "Responding officers found a man wounded shortly after midnight, who later died at the hospital. Three others arrived by private vehicles to the hospital.", 
          "Injured": "3", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "16/08/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded at a large birthday party in the parking lot.", 
          "Injured": "4", 
          "State": "Oklahoma", 
          "Total": "4"
        }, 
        {
          "Date": "15/08/2020", 
          "Dead": "0", 
          "Description": "Four adults and a sixteen-year-old boy were injured shortly before midnight at a large block party when a group on motorcycles arrived and opened fire.", 
          "Injured": "5", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "15/08/2020", 
          "Dead": "0", 
          "Description": "Five people were wounded shortly before midnight.", 
          "Injured": "5", 
          "State": "New York", 
          "Total": "5"
        }, 
        {
          "Date": "15/08/2020", 
          "Dead": "4", 
          "Description": "Two men and two women were killed in a home, with one of the women killed identified as the shooter's former fianc\ufffd\ufffde. The shooter boasted about the killings on social media and text messages before being arrested.", 
          "Injured": "0", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "15/08/2020", 
          "Dead": "1", 
          "Description": "One man was killed and five injured after a dice game grew violent shortly before midnight.", 
          "Injured": "5", 
          "State": "Connecticut", 
          "Total": "6"
        }, 
        {
          "Date": "15/08/2020", 
          "Dead": "2", 
          "Description": "Officers arrived at a large gathering early in the morning to disperse it. While doing so shots were fired in the apartment complex's parking lot. Two men were killed and three others wounded.", 
          "Injured": "3", 
          "State": "Alabama", 
          "Total": "5"
        }, 
        {
          "Date": "14/08/2020", 
          "Dead": "0", 
          "Description": "Three women and one man were wounded late at night on Lenox Avenue in Harlem.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "12/08/2020", 
          "Dead": "1", 
          "Description": "A woman was killed and three others wounded in a drive by shooting in the early morning.", 
          "Injured": "3", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "12/08/2020", 
          "Dead": "1", 
          "Description": "An eighteen-year-old was killed and four others wounded shortly after midnight.", 
          "Injured": "4", 
          "State": "New Jersey", 
          "Total": "5"
        }, 
        {
          "Date": "11/08/2020", 
          "Dead": "0", 
          "Description": "Five people were wounded shortly after midnight outside of a warehouse in the Harbor Gateway neighborhood. The shooting occurred after an argument escalated, and an additional person was injured attempting to climb a fence.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "09/08/2020", 
          "Dead": "0", 
          "Description": "Ten people were injured in a drive-by shooting during a family gathering in a park.", 
          "Injured": "10", 
          "State": "Colorado", 
          "Total": "10"
        }, 
        {
          "Date": "09/08/2020", 
          "Dead": "0", 
          "Description": "Six people were wounded in the early morning after a large gathering turned violent near a shopping center.", 
          "Injured": "6", 
          "State": "Ohio", 
          "Total": "6"
        }, 
        {
          "Date": "09/08/2020", 
          "Dead": "1", 
          "Description": "2020 Washington, D.C. block party shooting: A 17-year-old boy was killed and 21 others injured, including an off-duty police officer, at a party in the southeastern section of the nation's capital. Police are looking for three suspects.", 
          "Injured": "21", 
          "State": "Washington, D.C.", 
          "Total": "22"
        }, 
        {
          "Date": "09/08/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in the evening, two of the victims drove away and later crashed outside a local bank.", 
          "Injured": "4", 
          "State": "Mississippi", 
          "Total": "4"
        }, 
        {
          "Date": "09/08/2020", 
          "Dead": "0", 
          "Description": "Four men were wounded being a gas station shortly before midnight. The men were playing dice, when a gunman walked up, shot them and fled on foot.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "08/08/2020", 
          "Dead": "1", 
          "Description": "Shortly before midnight a man was killed and four others wounded in the city's north side.", 
          "Injured": "4", 
          "State": "Kentucky", 
          "Total": "5"
        }, 
        {
          "Date": "08/08/2020", 
          "Dead": "0", 
          "Description": "A pregnant woman, three teenagers and two other women were wounded. They were a part of a large BBQ gathering at a public park.", 
          "Injured": "6", 
          "State": "Pennsylvania", 
          "Total": "6"
        }, 
        {
          "Date": "08/08/2020", 
          "Dead": "0", 
          "Description": "Five men were wounded at a house party which was detected by the city's gunshot detection system. Prior a woman from the same party was stabbed.", 
          "Injured": "5", 
          "State": "Massachusetts", 
          "Total": "5"
        }, 
        {
          "Date": "08/08/2020", 
          "Dead": "1", 
          "Description": "A man was killed and five people, including an off-duty Birmingham Police officer, were wounded at a motorcycle club in Ensley. The shooting was reported to be due to an altercation escalating, with some of the victims innocent bystanders.", 
          "Injured": "5", 
          "State": "Alabama", 
          "Total": "6"
        }, 
        {
          "Date": "08/08/2020", 
          "Dead": "1", 
          "Description": "A 18-year-old man was killed and a 22-year-old, 28-year-old, and 29-year-old were injured in a drive by shooting involving multiple suspected perpetrators.", 
          "Injured": "3", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "06/08/2020", 
          "Dead": "1", 
          "Description": "A man was killed and three others injured while standing outside a house party.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "05/08/2020", 
          "Dead": "0", 
          "Description": "An 8-year-old boy and three men were wounded in the North Lawndale neighborhood. The shooter exited a vehicle and opened fire on the group while they were standing on the sidewalk.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "04/08/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in Garner Park during a memorial service for a recently deceased individual. Over 300 people were gathered when gunfire broke out and a fifth person was injured fleeing.", 
          "Injured": "4", 
          "State": "Wisconsin", 
          "Total": "4"
        }, 
        {
          "Date": "04/08/2020", 
          "Dead": "0", 
          "Description": "Four men were wounded in an evening shooting.", 
          "Injured": "4", 
          "State": "Washington, D.C.", 
          "Total": "4"
        }, 
        {
          "Date": "04/08/2020", 
          "Dead": "1", 
          "Description": "A woman was killed and four others were injured at a rented mansion house party. The home was on the famed Mulholland Drive in the Beverly Crest neighborhood.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "04/08/2020", 
          "Dead": "1", 
          "Description": "A woman was killed and two adults and a 17-year-old were injured near the former ABB manufacturing plant. The plant was the scene of a mass shooting in 2010.", 
          "Injured": "3", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "04/08/2020", 
          "Dead": "1", 
          "Description": "A man was killed and five others injured after an early morning shooting at a large gathering at a warehouse.", 
          "Injured": "5", 
          "State": "Connecticut", 
          "Total": "6"
        }, 
        {
          "Date": "03/08/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded after a shooter opened fire on a large crowd watching a basketball game at St. Mary's Park in the Bronx.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "02/08/2020", 
          "Dead": "0", 
          "Description": "Four women were injured with gun fire in the early morning. A fifth woman was stabbed multiple times.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "02/08/2020", 
          "Dead": "0", 
          "Description": "Four adults and a 10-year-old child were wounded after multiple heavily armed shooters opened fire on males in a specific block.", 
          "Injured": "5", 
          "State": "New Jersey", 
          "Total": "5"
        }, 
        {
          "Date": "01/08/2020", 
          "Dead": "1", 
          "Description": "A man was killed and four others, two men and two women, were injured at a backyard BBQ. Responding officers arrested two men fleeing from the scene.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "01/08/2020", 
          "Dead": "2", 
          "Description": "Two men were killed and two adults and an infant were injured. A man entered a home where a child's birthday party was ongoing and opened fire. Two guests returned fire and were among the injured.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "01/08/2020", 
          "Dead": "1", 
          "Description": "A 16-year-old was killed and three adults and a girl were wounded at a large gathering in the Westwood neighborhood.", 
          "Injured": "4", 
          "State": "Colorado", 
          "Total": "5"
        }, 
        {
          "Date": "01/08/2020", 
          "Dead": "0", 
          "Description": "Four men were injured after a shooting at an entrance to I-85 South.", 
          "Injured": "4", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "31/07/2020", 
          "Dead": "1", 
          "Description": "A woman was killed and three men were wounded in an evening shooting.", 
          "Injured": "3", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "30/07/2020", 
          "Dead": "0", 
          "Description": "Five men were wounded after a potentially gang related shooting occurred behind a U-Gas Station. A witness likened the amount of gunfire to the Iraq war.", 
          "Injured": "5", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "30/07/2020", 
          "Dead": "0", 
          "Description": "A man opened fire at a gas station while screaming at passersby. He wounded five people before he was arrested.", 
          "Injured": "5", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "29/07/2020", 
          "Dead": "0", 
          "Description": "Three men and a woman were injured while standing outside and a person opened fire from a car.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "29/07/2020", 
          "Dead": "3", 
          "Description": "Three men were killed and a third injured after an afternoon dispute escalated between two groups of people.", 
          "Injured": "1", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "29/07/2020", 
          "Dead": "5", 
          "Description": "A man killed his wife and three children, aged 12, 10 and 6-years-old, and then himself in an apparent murder-suicide.", 
          "Injured": "0", 
          "State": "Ohio", 
          "Total": "5"
        }, 
        {
          "Date": "28/07/2020", 
          "Dead": "2", 
          "Description": "A 17-year-old and a woman were killed and two men were injured in a shooting.", 
          "Injured": "2", 
          "State": "Delaware", 
          "Total": "4"
        }, 
        {
          "Date": "28/07/2020", 
          "Dead": "0", 
          "Description": "Four men were injured in the evening.", 
          "Injured": "4", 
          "State": "Wisconsin", 
          "Total": "4"
        }, 
        {
          "Date": "27/07/2020", 
          "Dead": "1", 
          "Description": "A 17-year-old was killed and two adults and a 12-year-old injured at Steel Lake Park. A woman reportedly opened fire after an argument.", 
          "Injured": "3", 
          "State": "Washington", 
          "Total": "4"
        }, 
        {
          "Date": "27/07/2020", 
          "Dead": "1", 
          "Description": "Five people were sitting on a porch in the evening when one was killed and four injured in a drive-by shooting.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "26/07/2020", 
          "Dead": "0", 
          "Description": "Four people were injured in the early morning after at least two semi-automatic handguns were fired at a large house party.", 
          "Injured": "4", 
          "State": "Arkansas", 
          "Total": "4"
        }, 
        {
          "Date": "26/07/2020", 
          "Dead": "0", 
          "Description": "Four people were injured shortly after midnight when someone opened fire during the Rude Boyz Annual Trail Ride. The gathering was held at Durango's Canyon.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "26/07/2020", 
          "Dead": "1", 
          "Description": "One person was killed and three others were injured when two men opened fire in a restaurant. One man was charged with open murder, three counts of assault with intent to murder and multiple weapons charges. The other man was charged with careless discharge of a firearm.", 
          "Injured": "3", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "26/07/2020", 
          "Dead": "1", 
          "Description": "Responding officers to a large gathering in the early morning found a man dead. Three additional victims were transported in private vehicles to the hospital.", 
          "Injured": "3", 
          "State": "Colorado", 
          "Total": "4"
        }, 
        {
          "Date": "26/07/2020", 
          "Dead": "1", 
          "Description": "Officers responded to I-64 West in the early morning after calls of shots fired by a moving vehicle. They found four individuals shot, with one dead, in a crashed car. A fifth individual was wounded when the car crashed.", 
          "Injured": "3", 
          "State": "Kentucky", 
          "Total": "4"
        }, 
        {
          "Date": "25/07/2020", 
          "Dead": "0", 
          "Description": "A woman and three men were wounded near a local restaurant.", 
          "Injured": "4", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "25/07/2020", 
          "Dead": "0", 
          "Description": "Officers responded from a traffic stop after hearing gunfire. They discovered seven people wounded at a large house party after a man armed with a semi-automatic weapon arrived and opened fire.", 
          "Injured": "7", 
          "State": "California", 
          "Total": "7"
        }, 
        {
          "Date": "25/07/2020", 
          "Dead": "0", 
          "Description": "Six people were shot at a party of over 1,000 people following the filming of a music video in a parking lot.", 
          "Injured": "6", 
          "State": "Michigan", 
          "Total": "6"
        }, 
        {
          "Date": "25/07/2020", 
          "Dead": "1", 
          "Description": "A seven-year-old girl, a sixteen-month boy and two adults were shot by a passing vehicle while getting out of a car. The girl was declared brain dead at the hospital, causing the shooting to be declared a homicide.", 
          "Injured": "3", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "25/07/2020", 
          "Dead": "2", 
          "Description": "Two men were killed and two woman and a man were wounded in the Park Hill neighborhood.", 
          "Injured": "3", 
          "State": "Colorado", 
          "Total": "5"
        }, 
        {
          "Date": "25/07/2020", 
          "Dead": "0", 
          "Description": "Three men and a woman were injured shortly before midnight. A man was denied entry at a local bar, retrieved an assault-type weapon from his car, and shot into the building.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "24/07/2020", 
          "Dead": "2", 
          "Description": "Two adults were killed and two teenagers, aged seventeen and eighteen, were injured in an early morning shooting. The group were ambushed by two shooters after arriving at an AirBnb house party in a rideshare.", 
          "Injured": "2", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "23/07/2020", 
          "Dead": "1", 
          "Description": "One man was killed and three others injured in the early morning. Officers are investigating if the individuals were a part of an announced party for that night.", 
          "Injured": "3", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "23/07/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in an early morning shooting.", 
          "Injured": "4", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "23/07/2020", 
          "Dead": "2", 
          "Description": "Two people were killed and four injured while standing on the sidewalk in the West Pullman area of the Far South Side.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "22/07/2020", 
          "Dead": "0", 
          "Description": "A man opened fire and others returned fire at a large party with at least one hundred people in attendance. Four people were injured in the shooting.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "21/07/2020", 
          "Dead": "0", 
          "Description": "Fifteen people were injured, four critically, after a shooter opened fire at people leaving a funeral home in Chicago's Auburn Gresham neighborhood.", 
          "Injured": "15", 
          "State": "Illinois", 
          "Total": "15"
        }, 
        {
          "Date": "20/07/2020", 
          "Dead": "0", 
          "Description": "Five people were wounded in the North Lawndale neighborhood. They were a part of people gathered on the sidewalk when a car pulled up and several men got out and opened fire.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "20/07/2020", 
          "Dead": "1", 
          "Description": "One man was killed and four others injured after a fight in a McDonald's parking lot escalated. One of the injured was an innocent bystander in the Food Lion parking lot across the street.", 
          "Injured": "4", 
          "State": "Virginia", 
          "Total": "5"
        }, 
        {
          "Date": "19/07/2020", 
          "Dead": "0", 
          "Description": "Thirteen people were injured in an early morning shooting at a riverfront gathering. An argument between two women led to a man firing two shots into the air. This led to multiple individuals opening fire on the crowd.", 
          "Injured": "13", 
          "State": "Illinois", 
          "Total": "13"
        }, 
        {
          "Date": "19/07/2020", 
          "Dead": "0", 
          "Description": "Eight people including a fifteen-year-old girl were injured in a drive by shooting early in the morning.", 
          "Injured": "8", 
          "State": "Nebraska", 
          "Total": "8"
        }, 
        {
          "Date": "19/07/2020", 
          "Dead": "2", 
          "Description": "Two people were killed and three wounded shortly before midnight in Morgan Park on the Far South Side. They were part of a group of people, that were fired upon by  an unknown shooter.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "19/07/2020", 
          "Dead": "1", 
          "Description": "Police responding to reports of a shooting discovered one man killed and eight other adults wounded.", 
          "Injured": "8", 
          "State": "Washington, D.C.", 
          "Total": "9"
        }, 
        {
          "Date": "19/07/2020", 
          "Dead": "0", 
          "Description": "Two fifteen-year-olds and two seventeen-year-olds were wounded while sitting in traffic when another car pulled up and opened fire. Four days later, the suspect was shot by police after a pursuit in which he was found holding a gun and died at a hospital.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "19/07/2020", 
          "Dead": "3", 
          "Description": "A man opened fire in a restaurant, killing three men and injuring another. The shooter has been taken into custody.", 
          "Injured": "1", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "18/07/2020", 
          "Dead": "1", 
          "Description": "A man was killed and four others wounded after two men opened fire in the early morning in the North Lawndale neighborhood. The men were standing on a street corner.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "17/07/2020", 
          "Dead": "0", 
          "Description": "Four adults were wounded while attending a memorial in Weinland Park. A three-year-old girl was also wounded when bullets struck the home she was in.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "17/07/2020", 
          "Dead": "0", 
          "Description": "Three adults and a child were injured after a man, out on bond from a January arrest, entered their home and opened fire.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "16/07/2020", 
          "Dead": "0", 
          "Description": "Eight or nine people opened fire in the early morning in a drive-by shooting. Five people were wounded, including a juvenile.", 
          "Injured": "5", 
          "State": "Tennessee", 
          "Total": "5"
        }, 
        {
          "Date": "15/07/2020", 
          "Dead": "1", 
          "Description": "Two gunmen opened fire in the early morning outside a Brooklyn apartment building. A man was killed and five other adults were wounded.", 
          "Injured": "5", 
          "State": "New York", 
          "Total": "6"
        }, 
        {
          "Date": "15/07/2020", 
          "Dead": "1", 
          "Description": "A man was killed and two adults and an 11-year-old child were injured after an argument escalated from an original argument at a basketball court.", 
          "Injured": "3", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "14/07/2020", 
          "Dead": "0", 
          "Description": "Five men were injured while standing in a park after a vehicle drove by and opened fire.", 
          "Injured": "5", 
          "State": "Missouri", 
          "Total": "5"
        }, 
        {
          "Date": "14/07/2020", 
          "Dead": "0", 
          "Description": "Six adults and two children aged four and eight-years-old were wounded after someone opened fire at a party outside a home.", 
          "Injured": "8", 
          "State": "North Carolina", 
          "Total": "8"
        }, 
        {
          "Date": "13/07/2020", 
          "Dead": "0", 
          "Description": "Multiple shooters traveled across three different blocks and wounded six people in Brooklyn.", 
          "Injured": "6", 
          "State": "New York", 
          "Total": "6"
        }, 
        {
          "Date": "13/07/2020", 
          "Dead": "1", 
          "Description": "A 16-year-old was killed and three others, including two juveniles, were wounded at a gas station.", 
          "Injured": "3", 
          "State": "Kentucky", 
          "Total": "4"
        }, 
        {
          "Date": "13/07/2020", 
          "Dead": "0", 
          "Description": "Five adults and a teenager were wounded after an argument escalated at a Metro bus stop.", 
          "Injured": "6", 
          "State": "Washington", 
          "Total": "6"
        }, 
        {
          "Date": "12/07/2020", 
          "Dead": "2", 
          "Description": "Two people were killed and three injured at a large outdoor hip hop concert in which potentially five separate guns were used. An additional three people were injured while attempting to flee, after being hit by cars.", 
          "Injured": "3", 
          "State": "Mississippi", 
          "Total": "5"
        }, 
        {
          "Date": "12/07/2020", 
          "Dead": "1", 
          "Description": "A man was killed and seven others injured in an early morning shooting outside an Exxon gas station.", 
          "Injured": "7", 
          "State": "Louisiana", 
          "Total": "8"
        }, 
        {
          "Date": "12/07/2020", 
          "Dead": "0", 
          "Description": "Three women and two men were injured after someone opened fire outside an apartment complex. At the complex there was a large party happening with over 100 people present.", 
          "Injured": "5", 
          "State": "Michigan", 
          "Total": "5"
        }, 
        {
          "Date": "12/07/2020", 
          "Dead": "1", 
          "Description": "Two men opened fire on a late night cookout at the Raymond Bush Playground in Brooklyn. Three men were injured and an infant sitting in a stroller was killed.", 
          "Injured": "3", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "12/07/2020", 
          "Dead": "2", 
          "Description": "Two men were killed in an early morning shooting at a party, with two others wounded.", 
          "Injured": "2", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "12/07/2020", 
          "Dead": "1", 
          "Description": "A man was killed and two other men and a woman were wounded in Englewood in the evening.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "12/07/2020", 
          "Dead": "1", 
          "Description": "Four men were wounded and one killed in an early morning shooting. The group was standing in the street when a verbal altercation escalated with at least two shooters.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "11/07/2020", 
          "Dead": "0", 
          "Description": "Responding officers to an early morning block party arrived to gunfire. Two wounded individuals were identified at the party and four others were identified at local hospitals.", 
          "Injured": "6", 
          "State": "New York", 
          "Total": "6"
        }, 
        {
          "Date": "11/07/2020", 
          "Dead": "0", 
          "Description": "Four teenagers aged between 15 and 13-years-old and 10-year-old child were wounded. Someone opened fire on a playground late at night.", 
          "Injured": "5", 
          "State": "Delaware", 
          "Total": "5"
        }, 
        {
          "Date": "07/07/2020", 
          "Dead": "4", 
          "Description": "In a late night shooting, four people were killed and three injured. Officers suspect the shooting was retaliation by people recently released from prison.", 
          "Injured": "3", 
          "State": "New Jersey", 
          "Total": "7"
        }, 
        {
          "Date": "07/07/2020", 
          "Dead": "0", 
          "Description": "Shortly after midnight an individual stormed an apartment and wounded a man and four teenagers aged 14 to 19-years-old.", 
          "Injured": "5", 
          "State": "Virginia", 
          "Total": "5"
        }, 
        {
          "Date": "06/07/2020", 
          "Dead": "0", 
          "Description": "Shots were fired into a group of people in the Auburn Gresham area on the South Side. The evening shooting wounded six.", 
          "Injured": "6", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "05/07/2020", 
          "Dead": "2", 
          "Description": "Two men were killed and four others - two men and two women - were injured in a shooting at a late-night party.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "6"
        }, 
        {
          "Date": "05/07/2020", 
          "Dead": "0", 
          "Description": "Three men waiting at a stop light and were wounded when someone opened fire. Comedian Rickey Smiley's daughter was a passenger in another vehicle and was also wounded.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "05/07/2020", 
          "Dead": "0", 
          "Description": "A 16-year-old girl and three adults were wounded by gunfire while standing in an alley in the West Side's Fifth City neighborhood in the early morning.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "05/07/2020", 
          "Dead": "1", 
          "Description": "Officers arrived at an early morning fight and heard shots being fired. They later discovered a man killed by the gunfire and three others injured.", 
          "Injured": "3", 
          "State": "Iowa", 
          "Total": "4"
        }, 
        {
          "Date": "05/07/2020", 
          "Dead": "2", 
          "Description": "At least two people are killed and eight injured, four critically, at a nightclub. No suspects have been arrested.", 
          "Injured": "8", 
          "State": "South Carolina", 
          "Total": "10"
        }, 
        {
          "Date": "05/07/2020", 
          "Dead": "0", 
          "Description": "Four adults and a 15-year-old boy were injured in an early morning shooting in Inwood, Manhattan.", 
          "Injured": "5", 
          "State": "New York", 
          "Total": "5"
        }, 
        {
          "Date": "05/07/2020", 
          "Dead": "1", 
          "Description": "A man was killed and three others injured in a parking lot, after leaving an event held by rapper Bankroll Freddie. People were leaving the event when someone fired into the crowd.", 
          "Injured": "3", 
          "State": "Arkansas", 
          "Total": "4"
        }, 
        {
          "Date": "05/07/2020", 
          "Dead": "0", 
          "Description": "Shortly after midnight three men and one woman were injured.", 
          "Injured": "4", 
          "State": "Wisconsin", 
          "Total": "4"
        }, 
        {
          "Date": "05/07/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in an early morning shooting, with potentially multiple weapons used.", 
          "Injured": "4", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "05/07/2020", 
          "Dead": "2", 
          "Description": "A large group of people were watching fireworks, when a fight broke out after a car hit a pedestrian. Fourteen people were wounded, of which two were declared dead at the hospital.", 
          "Injured": "12", 
          "State": "Georgia", 
          "Total": "14"
        }, 
        {
          "Date": "05/07/2020", 
          "Dead": "1", 
          "Description": "A woman was killed and five men were wounded in an early morning drive-by shooting. The group was setting off fireworks when the car approached.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "05/07/2020", 
          "Dead": "0", 
          "Description": "A 20-year-old opened fire on a group of six people after getting into an altercation and taking a rifle from his father. Four of the group were injured and the 20-year-old and his father were arrested.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "05/07/2020", 
          "Dead": "2", 
          "Description": "An adult and 11-year-old girl were killed shortly after midnight, three others were wounded. Officers believe that there were two shooters.", 
          "Injured": "3", 
          "State": "Missouri", 
          "Total": "5"
        }, 
        {
          "Date": "05/07/2020", 
          "Dead": "1", 
          "Description": "Shortly after midnight a man was killed and five others were wounded.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "05/07/2020", 
          "Dead": "0", 
          "Description": "Five teenagers were wounded shortly after midnight after a shooting occurred at a house party.", 
          "Injured": "5", 
          "State": "South Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "05/07/2020", 
          "Dead": "0", 
          "Description": "A group of people were traveling in a party bus, when someone opened fire on the vehicle. Four people in the bus were wounded.", 
          "Injured": "4", 
          "State": "Mississippi", 
          "Total": "4"
        }, 
        {
          "Date": "04/07/2020", 
          "Dead": "1", 
          "Description": "Four men were wounded in Marlow Heights, one man later died at the hospital.", 
          "Injured": "3", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "04/07/2020", 
          "Dead": "0", 
          "Description": "Two adults and two children were injured in a drive-by shooting.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "04/07/2020", 
          "Dead": "0", 
          "Description": "A group of people were fired at by an individual in a vehicle, shortly before midnight. Five people were wounded.", 
          "Injured": "5", 
          "State": "Georgia", 
          "Total": "5"
        }, 
        {
          "Date": "04/07/2020", 
          "Dead": "1", 
          "Description": "An early morning shooting occurred at a nightclub, after an altercation escalated. One person was killed and three others wounded.", 
          "Injured": "3", 
          "State": "Mississippi", 
          "Total": "4"
        }, 
        {
          "Date": "04/07/2020", 
          "Dead": "1", 
          "Description": "A man was killed and three others injured in a late night shooting in South Chicago.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "04/07/2020", 
          "Dead": "4", 
          "Description": "Four people are killed, and at least four more were injured at an outdoor gathering in Englewood when four men opened fire into a crowd. No suspects have been arrested.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "8"
        }, 
        {
          "Date": "04/07/2020", 
          "Dead": "1", 
          "Description": "A man was killed and four others injured at a July 4 cookout.", 
          "Injured": "4", 
          "State": "Massachusetts", 
          "Total": "5"
        }, 
        {
          "Date": "03/07/2020", 
          "Dead": "0", 
          "Description": "Four women were injured in a late night shooting in southwest Baltimore.", 
          "Injured": "4", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "03/07/2020", 
          "Dead": "1", 
          "Description": "A suspected shootout occurred inside the Riverchase Galleria in the afternoon. An 8-year-old boy was killed and two adults and a girl were injured.", 
          "Injured": "3", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "02/07/2020", 
          "Dead": "2", 
          "Description": "A group of five were shot after a man got out of a vehicle and opened fire. Two girls were killed aged 11 and 12-years-old and three adults were wounded.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "02/07/2020", 
          "Dead": "0", 
          "Description": "A man and three women were wounded in a late night shooting, the next day three suspects were arrested.", 
          "Injured": "4", 
          "State": "Massachusetts", 
          "Total": "4"
        }, 
        {
          "Date": "02/07/2020", 
          "Dead": "1", 
          "Description": "A man was killed and four others injured shortly after midnight on a street corner.", 
          "Injured": "4", 
          "State": "New Jersey", 
          "Total": "5"
        }, 
        {
          "Date": "01/07/2020", 
          "Dead": "0", 
          "Description": "Three men and a woman were wounded in their vehicle on Interstate 580.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "30/06/2020", 
          "Dead": "1", 
          "Description": "Officers responding to a call of shots fired discovered four wounded individuals. A man later died at the hospital.", 
          "Injured": "3", 
          "State": "Massachusetts", 
          "Total": "4"
        }, 
        {
          "Date": "30/06/2020", 
          "Dead": "0", 
          "Description": "Five men were wounded in an evening shooting. Officers believed the shooting was targeted at the group.", 
          "Injured": "5", 
          "State": "Iowa", 
          "Total": "5"
        }, 
        {
          "Date": "30/06/2020", 
          "Dead": "1", 
          "Description": "Early in the morning, a group of men sitting on the sidewalk were shot at in a drive-by. One man was killed and four injured.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "5"
        }, 
        {
          "Date": "30/06/2020", 
          "Dead": "0", 
          "Description": "Shortly after midnight three men and a woman were shot while waiting in a vehicle at a Shell gas station in River North neighborhood. The shooter was in and later fled in a red sedan.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "30/06/2020", 
          "Dead": "0", 
          "Description": "Three men and one women were all wounded in a shooting.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "30/06/2020", 
          "Dead": "0", 
          "Description": "Three adults and one juvenile were wounded, after going to a residence and getting into an altercation. The shooter was a juvenile resident of the home.", 
          "Injured": "4", 
          "State": "Arkansas", 
          "Total": "4"
        }, 
        {
          "Date": "29/06/2020", 
          "Dead": "0", 
          "Description": "Four men were wounded in a public park in Sylmar in a drive-by shooting.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "29/06/2020", 
          "Dead": "1", 
          "Description": "A man shot and killed another man in a home, after mistaking it as the home of his intended target. He left and entered the correct home and wounded three others.", 
          "Injured": "3", 
          "State": "South Dakota", 
          "Total": "4"
        }, 
        {
          "Date": "28/06/2020", 
          "Dead": "2", 
          "Description": "Two men were killed and two injured in a late night shooting in the Kensington neighborhood.", 
          "Injured": "2", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "28/06/2020", 
          "Dead": "0", 
          "Description": "During an early morning field party, seven people were wounded after an argument between two men escalated.", 
          "Injured": "7", 
          "State": "Alabama", 
          "Total": "7"
        }, 
        {
          "Date": "27/06/2020", 
          "Dead": "2", 
          "Description": "Red Bluff shooting. An employee was killed and four injured at a Walmart distribution center. The perpetrator was later killed in a shootout with responding police.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "27/06/2020", 
          "Dead": "0", 
          "Description": "Officers responding to an early morning ShotSpotter alert found two men wounded and identified two women who arrived at the hospital to be a part of the incident.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "27/06/2020", 
          "Dead": "0", 
          "Description": "Early in the morning a man opened fire at a house party in Brooklyn, and injured four people.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "27/06/2020", 
          "Dead": "1", 
          "Description": "A man was killed and three others wounded after a large gathering in Douglas.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "27/06/2020", 
          "Dead": "3", 
          "Description": "A Missouri man traveled to the area for a house party, where a couple got into a physical domestic fight. Shortly after 911 was called in response to that fight the man opened fire and killed his Uncle and two others, and wounded another.", 
          "Injured": "1", 
          "State": "Arkansas", 
          "Total": "4"
        }, 
        {
          "Date": "26/06/2020", 
          "Dead": "0", 
          "Description": "Five people were wounded by a shooter outside a local grocery store. Officers previously thought the incident was a gunfight but later announced it was one shooter.", 
          "Injured": "5", 
          "State": "Colorado", 
          "Total": "5"
        }, 
        {
          "Date": "26/06/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded at a house party shortly before midnight, after two shooters appeared near a neighboring home.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "26/06/2020", 
          "Dead": "0", 
          "Description": "Three adults and a 14-year-old boy were wounded in the early morning at a gas station. Prior to the shooting, a large crowd of people and cars had been gathered around the gas station.", 
          "Injured": "4", 
          "State": "Arizona", 
          "Total": "4"
        }, 
        {
          "Date": "25/06/2020", 
          "Dead": "0", 
          "Description": "Four men were wounded after a shooting at an intersection in the Kensington neighborhood.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "25/06/2020", 
          "Dead": "1", 
          "Description": "A man was killed, and two adults and a 17-year-old injured while attempting to make a rap music video. Officers believed the shooting was targeted, as the victims refused to cooperate.", 
          "Injured": "3", 
          "State": "Connecticut", 
          "Total": "4"
        }, 
        {
          "Date": "24/06/2020", 
          "Dead": "0", 
          "Description": "Three adults and one juvenile were wounded in an early morning shooting. The suspected shooter was arrested.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "23/06/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in a drive by shooting in Burnside, while standing on a porch.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "23/06/2020", 
          "Dead": "0", 
          "Description": "Five people were wounded in a drive-by shooting during the evening. Responding police believed the shooter and victims know each other.", 
          "Injured": "5", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "22/06/2020", 
          "Dead": "0", 
          "Description": "Police discovered five men wounded by gunfire in the Tenderloin neighborhood.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "22/06/2020", 
          "Dead": "3", 
          "Description": "Officers responding to a block party on reports of someone being hit by a car arrived to shots being fired. Three people were killed and six injured by gunfire, with an additional five injured after being hit by cars while attempting to flee.", 
          "Injured": "6", 
          "State": "North Carolina", 
          "Total": "9"
        }, 
        {
          "Date": "22/06/2020", 
          "Dead": "0", 
          "Description": "Officers responding to a shooting on West Broadway Avenue discovered four people injured.", 
          "Injured": "4", 
          "State": "Minnesota", 
          "Total": "4"
        }, 
        {
          "Date": "22/06/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in the Willard-Hay neighborhood during the afternoon.", 
          "Injured": "4", 
          "State": "Minnesota", 
          "Total": "4"
        }, 
        {
          "Date": "22/06/2020", 
          "Dead": "0", 
          "Description": "Five people were wounded in a drive-by, including a 16-year-old girl, at an early morning gathering in East Garfield Park.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "22/06/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded early in the morning after an individual opened fire from a vehicle in the Back of the Yards neighborhood on the South Side.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "22/06/2020", 
          "Dead": "0", 
          "Description": "Five people were shot during a vigil in the Crown Heights area of Brooklyn in the evening.", 
          "Injured": "5", 
          "State": "New York", 
          "Total": "5"
        }, 
        {
          "Date": "21/06/2020", 
          "Dead": "0", 
          "Description": "Four men were wounded after a shooting at an early morning gathering of cars.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "21/06/2020", 
          "Dead": "0", 
          "Description": "Five people were wounded in an early morning shooting.", 
          "Injured": "5", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "21/06/2020", 
          "Dead": "1", 
          "Description": "Early in the morning a shooting occurred at a house party. Five individuals were shot and one died on the way to the hospital in a private vehicle.", 
          "Injured": "4", 
          "State": "Wisconsin", 
          "Total": "5"
        }, 
        {
          "Date": "21/06/2020", 
          "Dead": "0", 
          "Description": "Shortly after midnight, officers responded to a home after a complaint of gunshots. They discovered four men wounded.", 
          "Injured": "4", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "21/06/2020", 
          "Dead": "1", 
          "Description": "An argument in Humboldt Park escalated shortly after midnight. A man was killed and three wounded.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "21/06/2020", 
          "Dead": "1", 
          "Description": "A group of people fired into a crowd, killing one and injuring 11 others.", 
          "Injured": "11", 
          "State": "Minnesota", 
          "Total": "12"
        }, 
        {
          "Date": "20/06/2020", 
          "Dead": "0", 
          "Description": "Officers arrived at a large party in a public parking lot after reports of a stolen car was made. An individual opened fire as they arrived and injured nine people including a 17-year-old.", 
          "Injured": "9", 
          "State": "New York", 
          "Total": "9"
        }, 
        {
          "Date": "20/06/2020", 
          "Dead": "0", 
          "Description": "Three women and a man were injured after a fight broke out between two groups gathered at Claremont park.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "20/06/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in a drive-by shooting in the evening.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "20/06/2020", 
          "Dead": "1", 
          "Description": "A woman sitting in her car was killed and three others injured in a separate car early in the morning. A shoot-out had occurred in a large gathering nearby.", 
          "Injured": "3", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "20/06/2020", 
          "Dead": "2", 
          "Description": "Early in the morning two people were killed and two wounded in a shooting.", 
          "Injured": "2", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "20/06/2020", 
          "Dead": "1", 
          "Description": "One person was killed and four injured shortly after midnight.", 
          "Injured": "4", 
          "State": "New Jersey", 
          "Total": "5"
        }, 
        {
          "Date": "20/06/2020", 
          "Dead": "0", 
          "Description": "Five people were shot at a motel after a party in one of the rooms had an argument that escalated. Police believe the shooting was intended to be targeted.", 
          "Injured": "5", 
          "State": "Kansas", 
          "Total": "5"
        }, 
        {
          "Date": "20/06/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded at an overnight park party in the Bronx after an argument escalated.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "20/06/2020", 
          "Dead": "0", 
          "Description": "Officers responding to a shots fired call in the early morning found four people wounded at an adult entertainment venue.", 
          "Injured": "4", 
          "State": "Wisconsin", 
          "Total": "4"
        }, 
        {
          "Date": "18/06/2020", 
          "Dead": "0", 
          "Description": "Early in the morning a man was discovered by officers with a gunshot wound. Shortly after transporting the man to the hospital, six other victims were identified at local hospitals to be a part of the same shooting.", 
          "Injured": "7", 
          "State": "New York", 
          "Total": "7"
        }, 
        {
          "Date": "17/06/2020", 
          "Dead": "0", 
          "Description": "Three adults and a nine-year-old child were wounded while standing in an apartment complex parking lot in the Gresham neighborhood. A man walked up and opened fire on the group, resulting in a shoot out.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "16/06/2020", 
          "Dead": "2", 
          "Description": "In an apparent shoot out at a birthday party, one man was killed and two women injured. A second man died in his vehicle while attempting to drive away from the scene with a gunshot wound.", 
          "Injured": "2", 
          "State": "Iowa", 
          "Total": "4"
        }, 
        {
          "Date": "15/06/2020", 
          "Dead": "0", 
          "Description": "An early morning shooting during a block party injured four people. The suspected shooter was arrested after a local traffic stop.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "15/06/2020", 
          "Dead": "0", 
          "Description": "A 15-year-old and three adults were gathered outside an apartment when they were injured in a drive-by shooting in the Montclare neighborhood.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "14/06/2020", 
          "Dead": "1", 
          "Description": "Early in the morning six people were wounded and one was killed in an incident. Officers were alerted via a ShotSpotter activation.", 
          "Injured": "6", 
          "State": "Minnesota", 
          "Total": "7"
        }, 
        {
          "Date": "14/06/2020", 
          "Dead": "1", 
          "Description": "About 100 people were gathered at a skate park in the early morning when someone opened fire. One person was killed and four injured.", 
          "Injured": "4", 
          "State": "Kentucky", 
          "Total": "5"
        }, 
        {
          "Date": "14/06/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in an early morning shooting at a local night club. A suspected shooter was arrested.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "14/06/2020", 
          "Dead": "0", 
          "Description": "Officers responded to an early morning shooting and found five people wounded. All but one were transported to local hospitals.", 
          "Injured": "5", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "14/06/2020", 
          "Dead": "1", 
          "Description": "One man was killed and three others injured during the evening.", 
          "Injured": "3", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "13/06/2020", 
          "Dead": "0", 
          "Description": "Over 100 people attended a house party when someone opened fire, injuring five people.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "13/06/2020", 
          "Dead": "0", 
          "Description": "Shortly before midnight, four individuals were wounded in a shooting.", 
          "Injured": "4", 
          "State": "Arkansas", 
          "Total": "4"
        }, 
        {
          "Date": "13/06/2020", 
          "Dead": "1", 
          "Description": "Five individuals were wounded and one killed during an early morning shooting in the JeffVanderLou neighborhood.", 
          "Injured": "5", 
          "State": "Missouri", 
          "Total": "6"
        }, 
        {
          "Date": "13/06/2020", 
          "Dead": "1", 
          "Description": "One person was killed and seven others wounded after a shooting at a house party. Local police believe the incident is gang related.", 
          "Injured": "7", 
          "State": "New York", 
          "Total": "8"
        }, 
        {
          "Date": "13/06/2020", 
          "Dead": "2", 
          "Description": "An individual shot at a large group of people from a vehicle, killing two people and wounding five.", 
          "Injured": "5", 
          "State": "Georgia", 
          "Total": "7"
        }, 
        {
          "Date": "13/06/2020", 
          "Dead": "0", 
          "Description": "Five people were wounded in the Fells Point neighborhood during a large gathering at Broadway Square with many of the crowd drinking alcoholic drinks.", 
          "Injured": "5", 
          "State": "Maryland", 
          "Total": "5"
        }, 
        {
          "Date": "13/06/2020", 
          "Dead": "2", 
          "Description": "Shortly before midnight responding officers discovered seven shooting victims. A man and woman later died at local hospitals with five other men wounded.", 
          "Injured": "5", 
          "State": "Washington, D.C.", 
          "Total": "7"
        }, 
        {
          "Date": "12/06/2020", 
          "Dead": "0", 
          "Description": "Early in the morning five men and one woman were wounded after multiple men opened fire on a group in the Tioga neighborhood, causing the group to scatter and run away.", 
          "Injured": "6", 
          "State": "Pennsylvania", 
          "Total": "6"
        }, 
        {
          "Date": "12/06/2020", 
          "Dead": "1", 
          "Description": "A 19-year-old woman was killed and a man and a two teenagers wounded at a local park in the Bronx late at night.", 
          "Injured": "3", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "12/06/2020", 
          "Dead": "0", 
          "Description": "A man denied entry into a bar for being too drunk, stated \"Don't you know who I am?\" to the bouncer before leaving. He returned later with a rifle and opened fire injuring five women and three men.", 
          "Injured": "8", 
          "State": "Texas", 
          "Total": "8"
        }, 
        {
          "Date": "11/06/2020", 
          "Dead": "0", 
          "Description": "Shortly after midnight responding officers discovered two men wounded by gunfire. Another man and a woman were taken to the hospital in private vehicles.", 
          "Injured": "4", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "11/06/2020", 
          "Dead": "6", 
          "Description": "A mother killed her neighbor, and four children aged 12, 8, and 5-years-old and a 5-month-old infant, before committing suicide in a murder-suicide.", 
          "Injured": "0", 
          "State": "Louisiana", 
          "Total": "6"
        }, 
        {
          "Date": "11/06/2020", 
          "Dead": "0", 
          "Description": "Seven people including two juveniles were wounded in the Trinidad neighborhood of DC. Officers discovered the victims after hearing gunshots in the early morning.", 
          "Injured": "7", 
          "State": "Washington, D.C.", 
          "Total": "7"
        }, 
        {
          "Date": "11/06/2020", 
          "Dead": "2", 
          "Description": "Two men were killed, and three men and a 13-year-old were wounded in a drive-by shooting while standing in an apartment complex parking lot.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "6"
        }, 
        {
          "Date": "10/06/2020", 
          "Dead": "1", 
          "Description": "Shortly before midnight, officers discovered three adults men and one juvenile boy wounded by gunfire. One adult man died later at the hospital.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "10/06/2020", 
          "Dead": "2", 
          "Description": "A man shot and killed an individual and wounded an officer, responding officers killed the suspect and three officers were wounded after a short manhunt.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "7"
        }, 
        {
          "Date": "10/06/2020", 
          "Dead": "1", 
          "Description": "Early in the morning ShotSpotter alerts caused officers to respond to a graduation party. One 18-year-old was killed and with three others wounded.", 
          "Injured": "3", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "09/06/2020", 
          "Dead": "0", 
          "Description": "Four adults and a six-year-old child were wounded in a drive-by shooting at a home and vehicle.", 
          "Injured": "5", 
          "State": "North Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "09/06/2020", 
          "Dead": "2", 
          "Description": "Two women were killed and two adults and a 10-year-old child were injured at a child's birthday party late at night.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "09/06/2020", 
          "Dead": "1", 
          "Description": "Just before midnight, a shootout occurred in an apartment complex in the Northern Liberties neighborhood. Six people were wounded and a man was found dead behind some cars near the complex.", 
          "Injured": "6", 
          "State": "Pennsylvania", 
          "Total": "7"
        }, 
        {
          "Date": "08/06/2020", 
          "Dead": "0", 
          "Description": "A home was shot at first then after police investigated the shooters return and opened fire. Four people were injured in the second shooting including an 18-month-old infant.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "08/06/2020", 
          "Dead": "0", 
          "Description": "A woman, two men and a 17-year-old were wounded after an argument escalated in Brooklyn. The shooter fled the scene.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "07/06/2020", 
          "Dead": "0", 
          "Description": "Five people were wounded inside the local American Legion club in the early morning. All individuals are refusing to speak with police.", 
          "Injured": "5", 
          "State": "Tennessee", 
          "Total": "5"
        }, 
        {
          "Date": "07/06/2020", 
          "Dead": "1", 
          "Description": "Officers responding to a shots fired call discovered four wounded victims. One victim later died at the hospital and the other three are uncooperative with investigators.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "07/06/2020", 
          "Dead": "0", 
          "Description": "Six men were wounded in a late night drive by shooting while standing on the sidewalk.", 
          "Injured": "6", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "07/06/2020", 
          "Dead": "2", 
          "Description": "Two women were killed and seven other individuals wounded at a house party after a drive-by shooting early in the morning.", 
          "Injured": "7", 
          "State": "Missouri", 
          "Total": "9"
        }, 
        {
          "Date": "07/06/2020", 
          "Dead": "0", 
          "Description": "Six people between 15 and 21-years-old were wounded in the early morning during an social gathering. A seventh individual broke her leg running from the gunfire.", 
          "Injured": "6", 
          "State": "Arkansas", 
          "Total": "6"
        }, 
        {
          "Date": "06/06/2020", 
          "Dead": "1", 
          "Description": "One person was killed and four people were wounded near a house party after an altercation escalated.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "06/06/2020", 
          "Dead": "0", 
          "Description": "Four men were injured after a fight between a large number of people escalated in a local bar's parking lot.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "06/06/2020", 
          "Dead": "1", 
          "Description": "An argument escalated in the early morning with at least two individuals opening fire. One man died and four others were wounded.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "5"
        }, 
        {
          "Date": "05/06/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in an early morning shooting. A juvenile was later arrested in connection with the shooting.", 
          "Injured": "4", 
          "State": "Colorado", 
          "Total": "4"
        }, 
        {
          "Date": "04/06/2020", 
          "Dead": "7", 
          "Description": "Shortly before midnight authorities responded to a home fire. Once the fire was extinguished seven adults were discovered dead by gunshot wounds.", 
          "Injured": "0", 
          "State": "Alabama", 
          "Total": "7"
        }, 
        {
          "Date": "02/06/2020", 
          "Dead": "0", 
          "Description": "Three teenagers and two adults aged between 18 and 20-years-old were wounded at a local beach. Officials do not think there is a connection between it and the protests that occurred that night.", 
          "Injured": "5", 
          "State": "Wisconsin", 
          "Total": "5"
        }, 
        {
          "Date": "02/06/2020", 
          "Dead": "1", 
          "Description": "Four people were wounded after two gunman opened fire in a bar. A female victim later died at the hospital.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "02/06/2020", 
          "Dead": "0", 
          "Description": "Four males were wounded while standing on the sidewalk after the shooter approached them and open fire.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "01/06/2020", 
          "Dead": "0", 
          "Description": "Four St. Louis police officers were wounded during an altercation with protestors near police headquarters.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "31/05/2020", 
          "Dead": "0", 
          "Description": "Six people were shot when a man opened fire on a block party. The suspect has not been apprehended.", 
          "Injured": "6", 
          "State": "Michigan", 
          "Total": "6"
        }, 
        {
          "Date": "31/05/2020", 
          "Dead": "0", 
          "Description": "A 12-year-old and three adults were wounded in a shooting in the Kensington section of the city.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "31/05/2020", 
          "Dead": "1", 
          "Description": "An 18-year-old was killed and five others injured after someone opened fire early in the morning at a large gathering of people.", 
          "Injured": "5", 
          "State": "Mississippi", 
          "Total": "6"
        }, 
        {
          "Date": "30/05/2020", 
          "Dead": "1", 
          "Description": "Four people were shot at a mobile home park; three were hospitalized, and one pronounced dead at the scene.", 
          "Injured": "3", 
          "State": "Iowa", 
          "Total": "4"
        }, 
        {
          "Date": "30/05/2020", 
          "Dead": "1", 
          "Description": "One person was killed and five injured including a law enforcement officer, at a birthday party at a local dragstrip.", 
          "Injured": "5", 
          "State": "Florida", 
          "Total": "6"
        }, 
        {
          "Date": "30/05/2020", 
          "Dead": "1", 
          "Description": "Six people were shot in the early morning at a block party after multiple individuals opened fire. One of the victims later died at the hospital.", 
          "Injured": "5", 
          "State": "North Carolina", 
          "Total": "6"
        }, 
        {
          "Date": "30/05/2020", 
          "Dead": "1", 
          "Description": "One person was killed and four wounded including two and 12-year-old children, during a block party.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "29/05/2020", 
          "Dead": "0", 
          "Description": "Five individuals were wounded in a shooting, including a 10-year-old boy. All victims left the scene for the hospital via private vehicles, while police were called to the scene.", 
          "Injured": "5", 
          "State": "Virginia", 
          "Total": "5"
        }, 
        {
          "Date": "28/05/2020", 
          "Dead": "1", 
          "Description": "Two men approached four people sitting on their porch and opened fire in the evening. A man was killed and two others and a woman were injured.", 
          "Injured": "3", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "28/05/2020", 
          "Dead": "0", 
          "Description": "A road rage incident near I-240 wounded two children and two adults.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "28/05/2020", 
          "Dead": "0", 
          "Description": "Seven people were injured in a shooting during a protest against police brutality in the aftermath of the death of Breonna Taylor, two seriously.", 
          "Injured": "7", 
          "State": "Kentucky", 
          "Total": "7"
        }, 
        {
          "Date": "27/05/2020", 
          "Dead": "1", 
          "Description": "Five men were found by responding police with gunshot wounds. One later died at the hospital.", 
          "Injured": "4", 
          "State": "Massachusetts", 
          "Total": "5"
        }, 
        {
          "Date": "27/05/2020", 
          "Dead": "1", 
          "Description": "Four people were wounded outside of a gas station, in the early morning. One of the victims later died at the hospital.", 
          "Injured": "3", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "27/05/2020", 
          "Dead": "0", 
          "Description": "A group of five men were wounded outside an apartment complex by a shooter before the individual fled on foot.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "27/05/2020", 
          "Dead": "0", 
          "Description": "Four men were shot and wounded in a drive-by shooting in the morning and all taken to the hospital in private vehicles.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "26/05/2020", 
          "Dead": "0", 
          "Description": "Shortly after midnight four people aged between 16 and 27 were shot in a Waffle House parking lot.", 
          "Injured": "4", 
          "State": "Mississippi", 
          "Total": "4"
        }, 
        {
          "Date": "26/05/2020", 
          "Dead": "0", 
          "Description": "Five people were wounded in a shooting outside an apartment complex, ranging in age from mid-teens to early 20s.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "26/05/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in a late night shooting.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "26/05/2020", 
          "Dead": "2", 
          "Description": "A man selling items on a street corner was shot and killed in a drive-by shooting. A pedestrian was also killed while two others were wounded.", 
          "Injured": "2", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "26/05/2020", 
          "Dead": "3", 
          "Description": "A drive-by shooting at a neighborhood cookout in the early morning resulted in three individuals dead and five injured.", 
          "Injured": "5", 
          "State": "South Carolina", 
          "Total": "8"
        }, 
        {
          "Date": "25/05/2020", 
          "Dead": "0", 
          "Description": "A 17-year-old shooter and others engaged in a shootout at a graduation party, three 15-year-olds, a 16-year-old, and a 17-year-old were all injured along with the shooter.", 
          "Injured": "6", 
          "State": "Louisiana", 
          "Total": "6"
        }, 
        {
          "Date": "24/05/2020", 
          "Dead": "1", 
          "Description": "A man was shot and later died at the hospital, while four others, including the suspect, were wounded after a shooting at a private residence.", 
          "Injured": "4", 
          "State": "Mississippi", 
          "Total": "5"
        }, 
        {
          "Date": "24/05/2020", 
          "Dead": "0", 
          "Description": "Four people were shot in the early morning at an intersection.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "24/05/2020", 
          "Dead": "3", 
          "Description": "Police responding to calls about gunshots found three people dead and one injured at a private residence.", 
          "Injured": "1", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "24/05/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded shortly after midnight in a potential gang related shooting. Six people have been arrested in connection.", 
          "Injured": "4", 
          "State": "South Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "23/05/2020", 
          "Dead": "1", 
          "Description": "Officers responding to a shooting found four individuals who were transported to the hospital. One victim died later at the hospital.", 
          "Injured": "3", 
          "State": "Washington, D.C.", 
          "Total": "4"
        }, 
        {
          "Date": "23/05/2020", 
          "Dead": "1", 
          "Description": "A man was killed and four others injured after a large gathering on a street had a fight escalate into a shooting.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "23/05/2020", 
          "Dead": "2", 
          "Description": "A man and 17-year-old were killed and five others wounded at a block party after the state's quarantine order was lifted.", 
          "Injured": "5", 
          "State": "South Carolina", 
          "Total": "7"
        }, 
        {
          "Date": "23/05/2020", 
          "Dead": "0", 
          "Description": "Six people were shot in a parking lot after an argument escalated.", 
          "Injured": "6", 
          "State": "North Carolina", 
          "Total": "6"
        }, 
        {
          "Date": "23/05/2020", 
          "Dead": "1", 
          "Description": "A shooting left one dead and three in critical condition. No suspects have been arrested and the investigation is ongoing.", 
          "Injured": "3", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "23/05/2020", 
          "Dead": "1", 
          "Description": "A shooter pulled up outside a home and opened fire on four men standing on the porch. One was killed and three injured.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "23/05/2020", 
          "Dead": "0", 
          "Description": "Two people were shot and four others wounded by bullet fragments after a shooter opened fire on a crowded beach.", 
          "Injured": "6", 
          "State": "Florida", 
          "Total": "6"
        }, 
        {
          "Date": "23/05/2020", 
          "Dead": "0", 
          "Description": "Five men were wounded outside a Jamaican restaurant in the early morning. All were brought to the hospital by private vehicles and have refused to cooperate with police.", 
          "Injured": "5", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "23/05/2020", 
          "Dead": "0", 
          "Description": "A fight escalated at a bar, with the perpetrator leaving the bar and driving to the back of the bar and opening fire, wounding four men.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "22/05/2020", 
          "Dead": "1", 
          "Description": "A man was killed and three other individuals wounded after shots were fired near a local deli in the early morning.", 
          "Injured": "3", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "20/05/2020", 
          "Dead": "2", 
          "Description": "A man shot and killed his pregnant ex-girlfriend and wounded her sister, mother, and boyfriend before committing suicide after being surrounding by police.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "19/05/2020", 
          "Dead": "0", 
          "Description": "Five men were wounded shortly after midnight.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "18/05/2020", 
          "Dead": "0", 
          "Description": "Five teenagers, aged 18 and 17-years-old, were wounded after a man fired into the apartment from outside the complex.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "17/05/2020", 
          "Dead": "0", 
          "Description": "Three people were wounded when an individual opened fire at a party that was hosted at a short term rental. A fourth wounded individual was walking her dog near the home.", 
          "Injured": "4", 
          "State": "South Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "17/05/2020", 
          "Dead": "1", 
          "Description": "Police responded to a suspected shooting and found an 18-year-old dead on the sidewalk. Three injured victims were identified later.", 
          "Injured": "3", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "17/05/2020", 
          "Dead": "4", 
          "Description": "A mother and her 15 and 12-year-old daughters were shot and killed by her husband who wounded another daughter before killing himself in a murder-suicide. Another daughter was uninjured and ran for help.", 
          "Injured": "1", 
          "State": "South Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "16/05/2020", 
          "Dead": "0", 
          "Description": "Hundreds of people had gathered for a memorial service when multiple shooters began firing wounding thirteen people.", 
          "Injured": "13", 
          "State": "Louisiana", 
          "Total": "13"
        }, 
        {
          "Date": "14/05/2020", 
          "Dead": "0", 
          "Description": "Police responding to a call of shots fired discovered five individuals wounded, including a pregnant woman after an argument had escalated.", 
          "Injured": "5", 
          "State": "New Mexico", 
          "Total": "5"
        }, 
        {
          "Date": "13/05/2020", 
          "Dead": "1", 
          "Description": "One person was killed and four injured in a believed targeted shooting at a gas station.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "13/05/2020", 
          "Dead": "1", 
          "Description": "Six people were involved in the repossession of a vehicle and one opened fire killing one and injuring four.", 
          "Injured": "4", 
          "State": "Kentucky", 
          "Total": "5"
        }, 
        {
          "Date": "11/05/2020", 
          "Dead": "0", 
          "Description": "Police responding to a call about a gunshot victim discovered one victim with the other three transported to the hospital via private vehicle.", 
          "Injured": "4", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "10/05/2020", 
          "Dead": "0", 
          "Description": "A dispute between two neighbors escalated causing five people to be wounded, including a five-year-old girl.", 
          "Injured": "6", 
          "State": "Texas", 
          "Total": "6"
        }, 
        {
          "Date": "10/05/2020", 
          "Dead": "0", 
          "Description": "Multiple gunmen were involved in a shootout at a local food market, wounding five including a minor.", 
          "Injured": "5", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "10/05/2020", 
          "Dead": "0", 
          "Description": "Five people were wounded in a public park where hundreds were gathered, with some reporting the gunfire was fireworks.", 
          "Injured": "5", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "09/05/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded during a late night shooting.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "07/05/2020", 
          "Dead": "0", 
          "Description": "Four men were discovered shot on the city's west side in the evening.", 
          "Injured": "4", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "06/05/2020", 
          "Dead": "2", 
          "Description": "Two men were shot and killed in a vehicle; two others wounded after attempting to exit the vehicle and were shot at in a drive-by.", 
          "Injured": "2", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "06/05/2020", 
          "Dead": "1", 
          "Description": "A 16-year-old was killed and three others wounded in a vehicle after the car was shot multiple times in the early morning.", 
          "Injured": "3", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "05/05/2020", 
          "Dead": "1", 
          "Description": "A man was killed and three others wounded after an incident of road rage escalated.", 
          "Injured": "3", 
          "State": "Indiana", 
          "Total": "4"
        }, 
        {
          "Date": "03/05/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded after an individual opened fire at a house party.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "03/05/2020", 
          "Dead": "0", 
          "Description": "A man drove up to a street and after exiting the car fired at least 30 shots into a crowd of people wounding four men.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "03/05/2020", 
          "Dead": "0", 
          "Description": "Five teenagers - aged 15 through 19 years old - were injured in a drive-by shooting after attending a large gathering.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "02/05/2020", 
          "Dead": "0", 
          "Description": "A man and three women were injured in a shooting in the evening.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "29/04/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in a shooting that involved two vehicles and an additional four people near Perry Park.", 
          "Injured": "4", 
          "State": "Indiana", 
          "Total": "4"
        }, 
        {
          "Date": "27/04/2020", 
          "Dead": "5", 
          "Description": "Five people were killed in a home, aged between 14 and 41, with a child being uninjured in the violence. Police are treating the incident as a matter of family violence.", 
          "Injured": "0", 
          "State": "Wisconsin", 
          "Total": "5"
        }, 
        {
          "Date": "26/04/2020", 
          "Dead": "1", 
          "Description": "One individual was killed and four others - including a juvenile - were injured after a fight escalated into a shooting.", 
          "Injured": "4", 
          "State": "North Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "26/04/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in the cities South End in an early morning shooting.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "25/04/2020", 
          "Dead": "1", 
          "Description": "One person was killed and three others injured, with one being 17-years-old, in an early morning shooting.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "25/04/2020", 
          "Dead": "0", 
          "Description": "Seven people were discovered wounded after police responded to an aggravated assault call. The individuals were wounded in a drive-by shooting after heading to an early morning party.", 
          "Injured": "7", 
          "State": "Tennessee", 
          "Total": "7"
        }, 
        {
          "Date": "25/04/2020", 
          "Dead": "1", 
          "Description": "An 18-year-old athlete who was to play at University of Louisville was killed and four others injured in a late night shooting.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "24/04/2020", 
          "Dead": "0", 
          "Description": "Police responding to a shots fired call found four people injured.", 
          "Injured": "4", 
          "State": "Indiana", 
          "Total": "4"
        }, 
        {
          "Date": "24/04/2020", 
          "Dead": "3", 
          "Description": "Three people were killed and one injured in an apartment by two shooters. Due to the lack of forced entry the victims may have known the shooters.", 
          "Injured": "1", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "18/04/2020", 
          "Dead": "2", 
          "Description": "Two men were killed and two injured in a late night shooting.", 
          "Injured": "2", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "17/04/2020", 
          "Dead": "1", 
          "Description": "One man was killed and four others injured after multiple individuals opened fire on a backyard gathering before fleeing in a car and continuing to fire.", 
          "Injured": "4", 
          "State": "Massachusetts", 
          "Total": "5"
        }, 
        {
          "Date": "17/04/2020", 
          "Dead": "1", 
          "Description": "Responding police discovered three adults and a juvenile injured by a shooting. An adult later died in the hospital.", 
          "Injured": "3", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "15/04/2020", 
          "Dead": "1", 
          "Description": "A five-year-old girl was killed and three adults wounded after someone shot into an apartment.", 
          "Injured": "3", 
          "State": "Mississippi", 
          "Total": "4"
        }, 
        {
          "Date": "11/04/2020", 
          "Dead": "0", 
          "Description": "One juvenile and five adults were wounded after at a large party at an apartment complex was fired upon by at least four shooters.", 
          "Injured": "6", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "10/04/2020", 
          "Dead": "0", 
          "Description": "Police were alerted of shots fired shortly after midnight and arrived to find the suspect had fled and the four wounded had transported themselves to the hospital.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "08/04/2020", 
          "Dead": "0", 
          "Description": "One man and three women were injured after an altercation escalated. A male shooter escaped the scene and a female was arrested for pointing a weapon at one of the wounded.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "08/04/2020", 
          "Dead": "0", 
          "Description": "Police responding to a call of shots fired found one person wounded and an additional three connected to the shooting were found in local hospitals.", 
          "Injured": "4", 
          "State": "Alaska", 
          "Total": "4"
        }, 
        {
          "Date": "08/04/2020", 
          "Dead": "1", 
          "Description": "A 19-year-old was killed and three others individuals were wounded at an apartment complex.", 
          "Injured": "3", 
          "State": "South Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "07/04/2020", 
          "Dead": "1", 
          "Description": "One man was killed and three other individuals wounded, including a 5-year-old, after an individual exited an alley way and opened fire on the group. One of the group likely returned fire at the shooter.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "05/04/2020", 
          "Dead": "0", 
          "Description": "Four men were wounded in an early morning shooting in a Brooklyn apartment.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "05/04/2020", 
          "Dead": "1", 
          "Description": "One man was killed and four other individuals were wounded in a drive-by shooting in which people standing outside a house and sitting in a car were fired upon.", 
          "Injured": "4", 
          "State": "South Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "05/04/2020", 
          "Dead": "1", 
          "Description": "One man was killed and two other men and one woman were injured in an afternoon shooting.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "04/04/2020", 
          "Dead": "0", 
          "Description": "Police officers responding to a shots fired call found four wounded individuals, with the shooter arrested later.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "04/04/2020", 
          "Dead": "2", 
          "Description": "Police responding to a shots fired call found an adult male and a teenage female deceased and two seriously wounded individuals.", 
          "Injured": "2", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "04/04/2020", 
          "Dead": "1", 
          "Description": "A man shot and wounded his ex-girlfriend's relatives before barricading himself with her and their 9-year-old child in the home. During the standoff an officer was wounded along with the ex-girlfriend, while the man was killed by police.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "03/04/2020", 
          "Dead": "0", 
          "Description": "Police responding to calls about a shooting discovered two people wounded and a further two wounded drove themselves to the hospital.", 
          "Injured": "4", 
          "State": "Kentucky", 
          "Total": "4"
        }, 
        {
          "Date": "31/03/2020", 
          "Dead": "3", 
          "Description": "A domestic argument escalated when a man shot and killed his child's mother, step-father, and sister before abducting his two-year-old child. The shooter was arrested and the child recovered after an Amber Alert was issued.", 
          "Injured": "1", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "30/03/2020", 
          "Dead": "0", 
          "Description": "Five people were wounded at a late night memorial gathering after a man fired into the crowd from half-a-block away. The wounded included a two-year-old, a fourteen-year-old, and an eighteen-year-old.", 
          "Injured": "5", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "29/03/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in a late night shooting, with two of the wounded under the age of 18. One of the wounded was also showing signs of the COVID-19 virus.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "28/03/2020", 
          "Dead": "1", 
          "Description": "One man was killed and two others and a teenager wounded in a drive-by shooting by three shooters.", 
          "Injured": "3", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "23/03/2020", 
          "Dead": "0", 
          "Description": "Four people in a car were wounded by shooter in the early morning. Three of the victims had transported themselves to hospitals prior to police arrival. The victim found by officers knew who had shot him, but refused to cooperate with police questions.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "22/03/2020", 
          "Dead": "0", 
          "Description": "Four people were injured in an early morning shooting.", 
          "Injured": "4", 
          "State": "South Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "20/03/2020", 
          "Dead": "0", 
          "Description": "Four people were discovered to be wounded in a shooting after police received a report about a shooting.", 
          "Injured": "4", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "20/03/2020", 
          "Dead": "0", 
          "Description": "Three men and a woman were shot and wounded leaving a bar early in the morning. A second woman was injured by the crowd fleeing the scene.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "18/03/2020", 
          "Dead": "1", 
          "Description": "Five people were shot by a man wearing all black and potentially a face mask and one individual died at the scene. One of the wounded is a three-year-old child.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "17/03/2020", 
          "Dead": "0", 
          "Description": "Police reported that seven people were injured during a police involved shooting. None of those wounded were police officers.", 
          "Injured": "7", 
          "State": "Maryland", 
          "Total": "7"
        }, 
        {
          "Date": "15/03/2020", 
          "Dead": "5", 
          "Description": "A shooter killed four people, including a police officer, and injured two others, including another police officer, before committing suicide at a gas station.", 
          "Injured": "2", 
          "State": "Missouri", 
          "Total": "7"
        }, 
        {
          "Date": "15/03/2020", 
          "Dead": "7", 
          "Description": "Seven adult members of the same family were killed in an apparent murder suicide and were discovered after reports of shots fired.", 
          "Injured": "0", 
          "State": "North Carolina", 
          "Total": "7"
        }, 
        {
          "Date": "14/03/2020", 
          "Dead": "2", 
          "Description": "Police responding to a shooting found three women and one man injured. Two women later were declared deceased.", 
          "Injured": "2", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "14/03/2020", 
          "Dead": "1", 
          "Description": "Reportedly a group of young men burst into a home and started shooting early in the morning. They wounded a woman, a 16-year-old girl and a 17-year-old girl and killed an adult male.", 
          "Injured": "3", 
          "State": "New Mexico", 
          "Total": "4"
        }, 
        {
          "Date": "13/03/2020", 
          "Dead": "0", 
          "Description": "Four men riding in a vehicle shot and wounded five people, including a 15-year-old boy, in a drive by shooting, in the Algiers neighborhood.", 
          "Injured": "5", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "13/03/2020", 
          "Dead": "0", 
          "Description": "Three men and one woman were wounded after another man opened fire inside of an apartment. The man was later arrested by police.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "10/03/2020", 
          "Dead": "2", 
          "Description": "Police responding to a shooting discovered two 15-year-old boys killed and a third juvenile injured. A fourth wounded juvenile involved in the shooting was later identified at a medical center.", 
          "Injured": "2", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "08/03/2020", 
          "Dead": "1", 
          "Description": "Police responded to reports of a shooting and discovered three wounded individuals, one of whom later died. A fourth victim arrived at a hospital in a private vehicle.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "08/03/2020", 
          "Dead": "1", 
          "Description": "An early morning argument escalated and resulted in one man killed and three injured outside a local business.", 
          "Injured": "3", 
          "State": "Wisconsin", 
          "Total": "4"
        }, 
        {
          "Date": "08/03/2020", 
          "Dead": "0", 
          "Description": "Four men were wounded in a vehicle on Bishop Ford Freeway, after another vehicle's occupant(s) fired on them.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "08/03/2020", 
          "Dead": "1", 
          "Description": "A 13-year-old boy was killed, five others were wounded; a 14-year-old boy and girl, two 12-year-old boys and a 19-year-old man were wounded. The group was shot at in a parking lot after an altercation while attending a Triple Threat Elite Dance event.", 
          "Injured": "5", 
          "State": "Maryland", 
          "Total": "6"
        }, 
        {
          "Date": "07/03/2020", 
          "Dead": "1", 
          "Description": "Seventeen people were wounded and one killed after a shootout between multiple motorcycle clubs after a fight at one of the club's headquarters caused many to be thrown out.", 
          "Injured": "17", 
          "State": "Ohio", 
          "Total": "18"
        }, 
        {
          "Date": "07/03/2020", 
          "Dead": "0", 
          "Description": "Three adults and one child were injured by a shooter while exiting a house party. The shooter was later arrested.", 
          "Injured": "4", 
          "State": "New Mexico", 
          "Total": "4"
        }, 
        {
          "Date": "07/03/2020", 
          "Dead": "0", 
          "Description": "Six men and a woman were injured in a drive-by shooting after leaving a house party after a fight broke out in the Greater Grand Crossing neighborhood.", 
          "Injured": "7", 
          "State": "Illinois", 
          "Total": "7"
        }, 
        {
          "Date": "06/03/2020", 
          "Dead": "0", 
          "Description": "Four males, one female and a five-year-old child were discovered by police wounded in a drive-by shooting.", 
          "Injured": "6", 
          "State": "Washington, D.C.", 
          "Total": "6"
        }, 
        {
          "Date": "04/03/2020", 
          "Dead": "1", 
          "Description": "One was killed while five others were injured at a mass shooting during a celebration of life. The gunman is still at large.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "29/02/2020", 
          "Dead": "1", 
          "Description": "Four people were injured and one person was fatally wounded at a shooting.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "5"
        }, 
        {
          "Date": "29/02/2020", 
          "Dead": "0", 
          "Description": "Five people were wounded in a drive by shooting, before the perpetrators fled.", 
          "Injured": "5", 
          "State": "Colorado", 
          "Total": "5"
        }, 
        {
          "Date": "26/02/2020", 
          "Dead": "6", 
          "Description": "Milwaukee brewery shooting: Five people were killed when a gunman opened fire at the local Molson Coors Beverage Company campus, where he had been employed. Afterwards, the gunman committed suicide.", 
          "Injured": "0", 
          "State": "Wisconsin", 
          "Total": "6"
        }, 
        {
          "Date": "25/02/2020", 
          "Dead": "1", 
          "Description": "A shooting occurred at a convenience store in the Avalon Park neighborhood where four people were hurt and one person was killed. The four wounded victims were listed in serious-to-critical condition. It was reported  that three people, including two men and a woman, exited a vehicle and started firing inside the store. They fled in a white vehicle after the arrival of police.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "25/02/2020", 
          "Dead": "0", 
          "Description": "Six people were injured in a shooting at a business.", 
          "Injured": "6", 
          "State": "Louisiana", 
          "Total": "6"
        }, 
        {
          "Date": "23/02/2020", 
          "Dead": "0", 
          "Description": "Seven people were shot at a flea market where a dance event took place with adults and children. A suspect was arrested and charged with assault. None of the injured victims were critically wounded.", 
          "Injured": "7", 
          "State": "Texas", 
          "Total": "7"
        }, 
        {
          "Date": "23/02/2020", 
          "Dead": "3", 
          "Description": "Three people were killed and one person was injured in a shooting. A suspect turned himself in to local authorities and was charged with three counts of murder and one count of attempted murder.", 
          "Injured": "1", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "20/02/2020", 
          "Dead": "2", 
          "Description": "Two people were fatally shot and three others, including a police officer, were wounded in a shooting at an apartment complex. The suspect was among the dead.", 
          "Injured": "3", 
          "State": "Idaho", 
          "Total": "5"
        }, 
        {
          "Date": "20/02/2020", 
          "Dead": "0", 
          "Description": "Four men were sent to a hospital after police said there were wounded in a shooting in the street. No information about the whereabouts of the shooter were known.", 
          "Injured": "4", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "20/02/2020", 
          "Dead": "4", 
          "Description": "A man killed his wife and two children before killing himself.", 
          "Injured": "0", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "19/02/2020", 
          "Dead": "0", 
          "Description": "A shooting occurred in the North Side of the city where four people were injured. Two of the victims were listed in critical condition while the two others were listed in stable condition. A suspect was apprehended and arrested by law enforcement.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "17/02/2020", 
          "Dead": "2", 
          "Description": "Four students of Alcorn State University were involved in a shooting off campus, with two being killed and two others injured.", 
          "Injured": "2", 
          "State": "Mississippi", 
          "Total": "4"
        }, 
        {
          "Date": "16/02/2020", 
          "Dead": "1", 
          "Description": "One person was killed and four others were injured in a drive-by shooting. The injured victims were transported to the hospital and two of them were listed in serious condition.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "16/02/2020", 
          "Dead": "1", 
          "Description": "A shooting occurred at a bar where one victim was killed and three others were wounded.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "16/02/2020", 
          "Dead": "1", 
          "Description": "One person was killed and four others were wounded in a shooting at a nightclub. The conditions of the injured are unknown.", 
          "Injured": "4", 
          "State": "Connecticut", 
          "Total": "5"
        }, 
        {
          "Date": "15/02/2020", 
          "Dead": "0", 
          "Description": "Four people, two men and two women, were wounded in a shooting blocks away from the city's Mardi Gras Parade route.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "15/02/2020", 
          "Dead": "0", 
          "Description": "Seven people were wounded when an unknown shooter opened fire at a street race after an argument escalated. All were brought to the hospital via private vehicles.", 
          "Injured": "7", 
          "State": "Tennessee", 
          "Total": "7"
        }, 
        {
          "Date": "14/02/2020", 
          "Dead": "0", 
          "Description": "Three adults and three children were wounded in a shooting at a gathering in an apartment complex in the South Side of the city.", 
          "Injured": "6", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "10/02/2020", 
          "Dead": "1", 
          "Description": "One person was fatally shot and four others were wounded in a shooting. It was initially reported that three victims were injured but a fourth one was discovered later and refused medical treatment. The four victims suffered non life-threatening injuries.", 
          "Injured": "4", 
          "State": "Delaware", 
          "Total": "5"
        }, 
        {
          "Date": "09/02/2020", 
          "Dead": "0", 
          "Description": "A heated argument turned violent between a man and a woman in front of a house which led to a shooting. Four people were injured as a result of the shooting and were each transported to a hospital. Three of them were listed in serious condition while the fourth was in stable condition. Two of the injured were charged afterwards.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "09/02/2020", 
          "Dead": "3", 
          "Description": "Three people were killed and two others were injured in a shooting at a club. The conditions of the injured are unknown. According to police, one of the victims was found dead inside a car. At least one suspect is in custody.", 
          "Injured": "2", 
          "State": "Ohio", 
          "Total": "5"
        }, 
        {
          "Date": "08/02/2020", 
          "Dead": "1", 
          "Description": "A 29-year-old rap artist was killed and three others were wounded in a shooting in North Houston. The wounded victims' conditions are unknown. The suspects are gang members according to the chief of police.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "07/02/2020", 
          "Dead": "1", 
          "Description": "One man was killed and three others were wounded in a shooting outside and inside a home in Waco. Two of the victims were transported to a hospital by ambulance and were listed in critical condition. The third victim self applied to the hospital but his condition was unknown. Police believe that the motive behind the shooting is the sale of illicit drugs gone wrong.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "05/02/2020", 
          "Dead": "4", 
          "Description": "Four people were fatally shot on the Northeast section of the city. The victims are three males and one female and their ages are unknown yet. No suspects have been identified or arrested.", 
          "Injured": "0", 
          "State": "Indiana", 
          "Total": "4"
        }, 
        {
          "Date": "03/02/2020", 
          "Dead": "3", 
          "Description": "Three people were killed and another was injured in the towns of Machias and Jonesboro.  A 63-year-old man has been charged with three counts of murder and one count of attempted murder in the case.", 
          "Injured": "1", 
          "State": "Maine", 
          "Total": "4"
        }, 
        {
          "Date": "03/02/2020", 
          "Dead": "1", 
          "Description": "One person was killed and five others were injured from a shooting on a Greyhound bus heading from Los Angeles to San Francisco. The bus was traversing Tejon Pass on Interstate 5, near Lebec, California, and stopped in Grapevine after the shooting.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "01/02/2020", 
          "Dead": "0", 
          "Description": "Police responded to a street location where multiple shots were fired. They found four victims, aged 18\ufffdC45 years old, with bullet wounds. Three of the victims were transported by helicopter to a hospital. It is unknown what their conditions are. Police are trying to locate any suspects in the shooting.", 
          "Injured": "4", 
          "State": "Mississippi", 
          "Total": "4"
        }, 
        {
          "Date": "01/02/2020", 
          "Dead": "4", 
          "Description": "A shooter shot and killed two members of a family and a friend of one of them inside a house. A third fled through a window uninjured and alerted the authorities. The shooter then committed suicide.", 
          "Injured": "0", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "31/01/2020", 
          "Dead": "1", 
          "Description": "One person was killed and four others were injured in a shooting incident that occurred in several locations. One of the injured is in critical condition while the other three are expected to recover. The shooting happened during a memorial gathering for a victim who previously passed away due to a traffic accident.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "31/01/2020", 
          "Dead": "1", 
          "Description": "A shooting left one victim dead and the other three injured in the 200 block of Northeast First Court.", 
          "Injured": "3", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "31/01/2020", 
          "Dead": "0", 
          "Description": "A shooting occurred at an apartment complex where four teens were injured. All four victims, aged 15\ufffdC17 years old, suffered non-life-threatening injuries according to first responders.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "30/01/2020", 
          "Dead": "0", 
          "Description": "Four teenagers were injured in a shooting on public streets. Three of the victims are listed in stable condition while the fourth is in critical condition. Police are interviewing witnesses for their investigation.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "27/01/2020", 
          "Dead": "0", 
          "Description": "Four men were wounded outside the Golden Hill Street Courthouse while sitting in a car, in a drive-by shooting by multiple shooters.", 
          "Injured": "4", 
          "State": "Connecticut", 
          "Total": "4"
        }, 
        {
          "Date": "26/01/2020", 
          "Dead": "3", 
          "Description": "Four family members were shot at a home. Three of the victims are dead and the fourth victim, a child, is wounded and is in serious condition. The suspect was apprehended and arrested by the police.", 
          "Injured": "1", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "26/01/2020", 
          "Dead": "0", 
          "Description": "Multiple shots were fired inside a business where five people were wounded in a shooting.", 
          "Injured": "5", 
          "State": "Missouri", 
          "Total": "5"
        }, 
        {
          "Date": "26/01/2020", 
          "Dead": "0", 
          "Description": "Six people were injured by a shooting shortly after midnight, at a local restaurant. An additional three others were treated for non-gunfire related injuries.", 
          "Injured": "6", 
          "State": "North Carolina", 
          "Total": "6"
        }, 
        {
          "Date": "26/01/2020", 
          "Dead": "3", 
          "Description": "Three people were fatally shot and four others were injured at a bar.", 
          "Injured": "6", 
          "State": "South Carolina", 
          "Total": "9"
        }, 
        {
          "Date": "24/01/2020", 
          "Dead": "5", 
          "Description": "A man shot and killed his wife and three children, aged between eight months and four years old, along with the family dog. He then killed himself.", 
          "Injured": "0", 
          "State": "North Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "24/01/2020", 
          "Dead": "2", 
          "Description": "A woman killed one person and injured two others before killing herself at a cigar lounge. The victims were Illinois State Troopers.", 
          "Injured": "2", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "22/01/2020", 
          "Dead": "1", 
          "Description": "Eight people were shot, one fatally, outside a McDonald's on Pine Street in Downtown Seattle.", 
          "Injured": "7", 
          "State": "Washington", 
          "Total": "8"
        }, 
        {
          "Date": "19/01/2020", 
          "Dead": "2", 
          "Description": "Two people (including the perpetrator) were killed and fifteen others were injured during a shooting at a nightclub.", 
          "Injured": "15", 
          "State": "Missouri", 
          "Total": "17"
        }, 
        {
          "Date": "19/01/2020", 
          "Dead": "2", 
          "Description": "Police discovered two people dead and two injured after responding to a shooting.", 
          "Injured": "2", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "19/01/2020", 
          "Dead": "1", 
          "Description": "One person was killed and four others were injured during a shooting outside a nightclub.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "5"
        }, 
        {
          "Date": "19/01/2020", 
          "Dead": "2", 
          "Description": "Two people were killed and five others injured at a nightclub.", 
          "Injured": "5", 
          "State": "Texas", 
          "Total": "7"
        }, 
        {
          "Date": "17/01/2020", 
          "Dead": "4", 
          "Description": "Haynie family shooting: Four people were killed and one was injured after a teenager allegedly fired at his family at their house. He was charged with four counts of aggravated murder, one count of attempted aggravated murder and five counts of illegal discharge of a firearm.", 
          "Injured": "1", 
          "State": "Utah", 
          "Total": "5"
        }, 
        {
          "Date": "16/01/2020", 
          "Dead": "0", 
          "Description": "Three children between 11 and 16 years old were injured along with two adults after two perpetrators fired into a barber shop in the East Garfield Park neighborhood.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "15/01/2020", 
          "Dead": "2", 
          "Description": "Two people were killed and two injured after a shooting in a home's detached garage.", 
          "Injured": "2", 
          "State": "Iowa", 
          "Total": "4"
        }, 
        {
          "Date": "11/01/2020", 
          "Dead": "0", 
          "Description": "Five people, including three teenagers, were wounded by a 16-year-old shooter at an apartment building.", 
          "Injured": "5", 
          "State": "Colorado", 
          "Total": "5"
        }, 
        {
          "Date": "08/01/2020", 
          "Dead": "2", 
          "Description": "Two people were killed and two injured in a random ambush style shooting. The perpetrator was arrested after arriving at his mother's house covered in blood.", 
          "Injured": "2", 
          "State": "Mississippi", 
          "Total": "4"
        }, 
        {
          "Date": "05/01/2020", 
          "Dead": "0", 
          "Description": "Four people were injured by a single person after an argument near a northwestern Atlanta nightclub early in the morning.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "04/01/2020", 
          "Dead": "1", 
          "Description": "One man was killed and three men were injured in a mid morning shooting.", 
          "Injured": "3", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "02/01/2020", 
          "Dead": "0", 
          "Description": "Four people were wounded in a drive-by shooting outside an apartment building in the Sunset Park neighborhood.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "01/01/2020", 
          "Dead": "3", 
          "Description": "Responding police discovered three people dead and one wounded at an early morning shooting in the Benton Park neighborhood.", 
          "Injured": "1", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "01/01/2020", 
          "Dead": "0", 
          "Description": "An argument in a Downtown Cleveland night club's VIP section led to three people being wounded and a fourth person was shot in the head in the back alley.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "01/01/2020", 
          "Dead": "0", 
          "Description": "Seven people were wounded inside and out a hookah bar early in the morning, after an argument escalated.", 
          "Injured": "7", 
          "State": "West Virginia", 
          "Total": "7"
        }, 
        {
          "Date": "01/01/2020", 
          "Dead": "4", 
          "Description": "A family of four, including nine-year-old twin boys, were shot and killed at their home after celebrating New Year's Eve. A 16-year-old boy was seriously injured.", 
          "Injured": "1", 
          "State": "Puerto Rico", 
          "Total": "5"
        }, 
        {
          "Date": "31/12/2021", 
          "Dead": "0", 
          "Description": "An adult and three juveniles were wounded in an evening shooting.", 
          "Injured": "4", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "31/12/2021", 
          "Dead": "0", 
          "Description": "Six shoppers were wounded at a grocery supermarket by two shooters.", 
          "Injured": "6", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "31/12/2021", 
          "Dead": "4", 
          "Description": "During an outdoor New Year's Eve party, a physical fight started escalated to a shooting, with multiple people firing guns.", 
          "Injured": "3", 
          "State": "Mississippi", 
          "Total": "7"
        }, 
        {
          "Date": "30/12/2021", 
          "Dead": "0", 
          "Description": "Six shooters opened fire on a busy street with six wounded.", 
          "Injured": "6", 
          "State": "Pennsylvania", 
          "Total": "6"
        }, 
        {
          "Date": "30/12/2021", 
          "Dead": "2", 
          "Description": "An adult and infant were killed and two adults wounded in an afternoon shooting.", 
          "Injured": "2", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "27/12/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three others wounded at a local gas station.", 
          "Injured": "3", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "27/12/2021", 
          "Dead": "6", 
          "Description": "A gunman went on a shooting spree across multiple locations in the Denver metropolitan area before dying in a shootout with police.", 
          "Injured": "2", 
          "State": "Colorado", 
          "Total": "8"
        }, 
        {
          "Date": "27/12/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three others were wounded at a local apartment complex.", 
          "Injured": "3", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "26/12/2021", 
          "Dead": "0", 
          "Description": "Four adults were wounded inside a pop-up store.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "26/12/2021", 
          "Dead": "1", 
          "Description": "Four people were wounded at a rest stop, and the shooter fled before police arrived. The shooter was later found dead.", 
          "Injured": "4", 
          "State": "Virginia", 
          "Total": "5"
        }, 
        {
          "Date": "26/12/2021", 
          "Dead": "3", 
          "Description": "Three teenagers were killed and a fourth wounded in a convenience store.", 
          "Injured": "1", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "26/12/2021", 
          "Dead": "0", 
          "Description": "Seven people were wounded at a party in the early morning. An 18-year-old was later arrested.", 
          "Injured": "7", 
          "State": "Mississippi", 
          "Total": "7"
        }, 
        {
          "Date": "26/12/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in a drive by shooting in North Philadelphia.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "25/12/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded near a Waffle House in the early morning.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "24/12/2021", 
          "Dead": "0", 
          "Description": "Four men were wounded outside a Brooklyn deli shortly before midnight.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "24/12/2021", 
          "Dead": "1", 
          "Description": "A woman was arrested after killing one and wounding three in a domestic incident at an apartment.", 
          "Injured": "3", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "24/12/2021", 
          "Dead": "0", 
          "Description": "Six people were found wounded in a local home, with one identified as the potential shooter.", 
          "Injured": "6", 
          "State": "Pennsylvania", 
          "Total": "6"
        }, 
        {
          "Date": "19/12/2021", 
          "Dead": "1", 
          "Description": "One man was killed and three others were wounded in a shooting across the street from a strip club.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "17/12/2021", 
          "Dead": "1", 
          "Description": "One person was killed and three wounded in Upton.", 
          "Injured": "3", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "17/12/2021", 
          "Dead": "0", 
          "Description": "Four adults were wounded in the early morning at a gentleman's club.", 
          "Injured": "4", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "17/12/2021", 
          "Dead": "1", 
          "Description": "A man was killed and four people wounded in Penn North.", 
          "Injured": "4", 
          "State": "Maryland", 
          "Total": "5"
        }, 
        {
          "Date": "16/12/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in an afternoon shooting.", 
          "Injured": "4", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "13/12/2021", 
          "Dead": "0", 
          "Description": "Police were alerted to four wounded by gunfire after an argument escalated through a shotspotter alert.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "13/12/2021", 
          "Dead": "0", 
          "Description": "Four adults were wounded in Kengsington, they were found by patrolling police.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "13/12/2021", 
          "Dead": "2", 
          "Description": "Six people in an SUV were shot at in the early morning, causing the SUV to crash. Two adults were killed and four juveniles wounded.", 
          "Injured": "4", 
          "State": "North Carolina", 
          "Total": "6"
        }, 
        {
          "Date": "12/12/2021", 
          "Dead": "0", 
          "Description": "Six people were wounded at local sports bar in the early morning.", 
          "Injured": "6", 
          "State": "Mississippi", 
          "Total": "6"
        }, 
        {
          "Date": "12/12/2021", 
          "Dead": "0", 
          "Description": "Five people were wounded in the early morning, a suspect was arrested days later.", 
          "Injured": "5", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "12/12/2021", 
          "Dead": "1", 
          "Description": "One person was killed and fourteen others wounded in a drive-by shooting at a memorial vigil in Baytown for another shooting victim.", 
          "Injured": "14", 
          "State": "Texas", 
          "Total": "15"
        }, 
        {
          "Date": "12/12/2021", 
          "Dead": "0", 
          "Description": "Three security guards and a bystander were shot by a gunman at a nightclub.", 
          "Injured": "4", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "11/12/2021", 
          "Dead": "1", 
          "Description": "Four adults were shot at a bowling alley at approximately 1 AM, killing a 23-year-old man.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "10/12/2021", 
          "Dead": "1", 
          "Description": "Three teenagers and a baby were shot while in a car near an intersection, killing a 17-year-old girl.", 
          "Injured": "3", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "10/12/2021", 
          "Dead": "0", 
          "Description": "Five people were shot in a drive-by shooting in the Callahan neighborhood.", 
          "Injured": "5", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "10/12/2021", 
          "Dead": "0", 
          "Description": "Five people were shot in the Grier Heights neighborhood.", 
          "Injured": "5", 
          "State": "North Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "09/12/2021", 
          "Dead": "1", 
          "Description": "Responding officers found one person killed and two wounded, with an additional two wounded found at the hospital.", 
          "Injured": "5", 
          "State": "Wisconsin", 
          "Total": "6"
        }, 
        {
          "Date": "06/12/2021", 
          "Dead": "0", 
          "Description": "Three men and a teenager were wounded in Brewerytown.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "05/12/2021", 
          "Dead": "2", 
          "Description": "Four men were shot by a gunman, two of whom succumbed to their injuries.", 
          "Injured": "2", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "05/12/2021", 
          "Dead": "1", 
          "Description": "A fight broke out in the parking lot of a bar, after a group was ejected. It escalated, with bystanders attempting to intervene. A man walked up and shot at the bystanders killing one and wounding three.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "03/12/2021", 
          "Dead": "2", 
          "Description": "Two teenagers were killed and a teenager and an infant were wounded in a drive-by shooting at a gas station.", 
          "Injured": "2", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "02/12/2021", 
          "Dead": "3", 
          "Description": "Responding officers found two adults and a child killed and three adults wounded.", 
          "Injured": "3", 
          "State": "North Carolina", 
          "Total": "6"
        }, 
        {
          "Date": "30/11/2021", 
          "Dead": "4", 
          "Description": "Oxford High School shooting: A 15-year-old student opened fire at Oxford High School initially killing three students and wounding seven others and a teacher, before being arrested. One of the wounded died a day later. The suspect was charged with four counts of murder and seven counts of attempted murder while his parents, who bought him the gun used in the shooting as an early Christmas present, were charged with four counts of involuntary manslaughter.", 
          "Injured": "7", 
          "State": "Michigan", 
          "Total": "11"
        }, 
        {
          "Date": "30/11/2021", 
          "Dead": "4", 
          "Description": "Responding officers to a domestic incident were shot at by the suspect. The suspect had killed two women and wounded a child previously. An officer and the suspect were killed and another officer was wounded.", 
          "Injured": "2", 
          "State": "Georgia", 
          "Total": "6"
        }, 
        {
          "Date": "28/11/2021", 
          "Dead": "0", 
          "Description": "Responding police found six adults and a teenager wounded in East Baltimore.", 
          "Injured": "7", 
          "State": "Maryland", 
          "Total": "7"
        }, 
        {
          "Date": "28/11/2021", 
          "Dead": "1", 
          "Description": "A teenager was killed and four others wounded at a gas station.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "28/11/2021", 
          "Dead": "5", 
          "Description": "A man killed his four children and his mother in law in their home. He turned himself in to police an hour later and was charged with five counts of murder.", 
          "Injured": "0", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "28/11/2021", 
          "Dead": "0", 
          "Description": "Five youths were wounded in a shooting.", 
          "Injured": "5", 
          "State": "Colorado", 
          "Total": "5"
        }, 
        {
          "Date": "28/11/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in an evening shooting in Kingsessing.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "27/11/2021", 
          "Dead": "1", 
          "Description": "A teenager was killed and three others were wounded after men in a car opened fire in the South Ward.", 
          "Injured": "3", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "26/11/2021", 
          "Dead": "3", 
          "Description": "Home invaders killed two teenagers and wounded their mother, two teenage siblings and an adult sibling. One of the assailants was also killed.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "7"
        }, 
        {
          "Date": "25/11/2021", 
          "Dead": "2", 
          "Description": "Two men were killed and two others wounded in a believed targeted drive-by shooting. Eyewitnesses are not cooperating with police.", 
          "Injured": "2", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "25/11/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded and transported to the hospital in private vehicles.", 
          "Injured": "4", 
          "State": "South Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "23/11/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded after a large party was ending. Police believe it connected to another incident near a local hospital.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "23/11/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three others wounded shortly before noon. A suspect was arrested.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "22/11/2021", 
          "Dead": "2", 
          "Description": "Two men were killed and two juveniles were wounded while in a vehicle outside an apartment complex.", 
          "Injured": "2", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "21/11/2021", 
          "Dead": "1", 
          "Description": "A man was killed and four others were wounded in the parking lots of a local club.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "21/11/2021", 
          "Dead": "0", 
          "Description": "Four adults and one child were shot during a backyard party.", 
          "Injured": "5", 
          "State": "New Jersey", 
          "Total": "5"
        }, 
        {
          "Date": "20/11/2021", 
          "Dead": "2", 
          "Description": "Two men were killed and two wounded at an apartment complex.", 
          "Injured": "2", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "20/11/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded at a local bar in the early morning.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "18/11/2021", 
          "Dead": "1", 
          "Description": "One teen was killed, and three other teens were wounded in two separate but related shootings on the same block.", 
          "Injured": "3", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "17/11/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three others wounded in an afternoon shooting.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "17/11/2021", 
          "Dead": "0", 
          "Description": "Two adults and two teens were wounded in a potentially targeted drive-by in Williamsbridge.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "17/11/2021", 
          "Dead": "0", 
          "Description": "Four teens were shot during a gunfight near a high school.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "17/11/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in a drive-by shooting shortly after midnight on the Near West Side.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "15/11/2021", 
          "Dead": "0", 
          "Description": "Four men were shot outside of a bodega in Harlem.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "15/11/2021", 
          "Dead": "0", 
          "Description": "Six teenagers were wounded in a drive-by shooting at a park located across from a high school.", 
          "Injured": "6", 
          "State": "Colorado", 
          "Total": "6"
        }, 
        {
          "Date": "14/11/2021", 
          "Dead": "0", 
          "Description": "Three men and three women were shot, one man critically.", 
          "Injured": "6", 
          "State": "Pennsylvania", 
          "Total": "6"
        }, 
        {
          "Date": "14/11/2021", 
          "Dead": "1", 
          "Description": "Two men opened fire at each other at a lounge, wounding five. One of the shooters was killed by responding police.", 
          "Injured": "5", 
          "State": "Missouri", 
          "Total": "6"
        }, 
        {
          "Date": "14/11/2021", 
          "Dead": "2", 
          "Description": "Four people were shot, two of the victims fatally.  A man from Klamath Falls was arrested and charged with murder.", 
          "Injured": "2", 
          "State": "Oregon", 
          "Total": "4"
        }, 
        {
          "Date": "14/11/2021", 
          "Dead": "4", 
          "Description": "Four men arrived at a trailer park and confronted a homeowner and a guest, leading to the homeowner shooting and killing the four men and the guest being injured by the four attackers.", 
          "Injured": "1", 
          "State": "Arizona", 
          "Total": "5"
        }, 
        {
          "Date": "14/11/2021", 
          "Dead": "1", 
          "Description": "A man was killed and five others wounded at a gas station in the early morning.", 
          "Injured": "5", 
          "State": "Alabama", 
          "Total": "6"
        }, 
        {
          "Date": "13/11/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded after several people opened fire at a party.", 
          "Injured": "4", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "13/11/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded at a high school homecoming after-party, after multiple attendees began shooting.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "12/11/2021", 
          "Dead": "2", 
          "Description": "Two children were killed and two adults wounded on the East End.", 
          "Injured": "2", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "12/11/2021", 
          "Dead": "2", 
          "Description": "Two wounded were found outside a vehicle, where two were found deceased in the backseat. Several weapons were found in the vehicle.", 
          "Injured": "2", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "09/11/2021", 
          "Dead": "0", 
          "Description": "Four teenagers were wounded in an evening shooting.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "09/11/2021", 
          "Dead": "3", 
          "Description": "Three adults were killed and an adult and child were wounded after an argument escalated inside a home.", 
          "Injured": "2", 
          "State": "South Dakota", 
          "Total": "5"
        }, 
        {
          "Date": "09/11/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three adults and a teenager wounded in an ambush-style shooting outside a grocery store.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "08/11/2021", 
          "Dead": "0", 
          "Description": "Three teenagers and an adult were wounded after three of them exited a local store in Feltonville and were chased down the street.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "07/11/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three others wounded in the early morning.", 
          "Injured": "3", 
          "State": "Wisconsin", 
          "Total": "4"
        }, 
        {
          "Date": "06/11/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and two wounded at a family birthday party.", 
          "Injured": "2", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "06/11/2021", 
          "Dead": "0", 
          "Description": "Six people were wounded in the early morning at a large community event.", 
          "Injured": "6", 
          "State": "Texas", 
          "Total": "6"
        }, 
        {
          "Date": "06/11/2021", 
          "Dead": "0", 
          "Description": "Shortly after midnight a man opened fire at a local bar, wounding four.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "05/11/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three wounded in a drive-by shooting in East Oakland.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "03/11/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in an evening shooting a block away from a middle school.", 
          "Injured": "4", 
          "State": "Iowa", 
          "Total": "4"
        }, 
        {
          "Date": "03/11/2021", 
          "Dead": "3", 
          "Description": "A man killed three women and wounded two in a targeted domestic dispute. One of the wounded was targeted and the others attempted to help her.", 
          "Injured": "2", 
          "State": "Virginia", 
          "Total": "5"
        }, 
        {
          "Date": "02/11/2021", 
          "Dead": "0", 
          "Description": "A woman shot and wounded four in a bowling alley after a fight escalated.", 
          "Injured": "4", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "01/11/2021", 
          "Dead": "0", 
          "Description": "After an online dispute, a person shot four people in Downtown Orlando.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "01/11/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in an evening drive-by on the West Side.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "31/10/2021", 
          "Dead": "1", 
          "Description": "Four people were shot just after midnight on Halloween.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "31/10/2021", 
          "Dead": "2", 
          "Description": "Four people were shot, two fatally.", 
          "Injured": "2", 
          "State": "Colorado", 
          "Total": "4"
        }, 
        {
          "Date": "31/10/2021", 
          "Dead": "1", 
          "Description": "A woman was shot and killed and nine injured at a large Halloween party of hundred people.", 
          "Injured": "9", 
          "State": "Texas", 
          "Total": "10"
        }, 
        {
          "Date": "31/10/2021", 
          "Dead": "2", 
          "Description": "Two cousins working as security were shot and killed. Two others were wounded.", 
          "Injured": "2", 
          "State": "Kentucky", 
          "Total": "4"
        }, 
        {
          "Date": "31/10/2021", 
          "Dead": "1", 
          "Description": "An 18-year-old was arrested after killing a man and wounding three others in a drive-by shooting.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "31/10/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and several wounded after two men opened fire on a Halloween party.", 
          "Injured": "12", 
          "State": "Illinois", 
          "Total": "14"
        }, 
        {
          "Date": "30/10/2021", 
          "Dead": "1", 
          "Description": "One person was killed and three wounded after a shooting at a house party. The party occurred at the home of a Gilroy councilwoman.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "30/10/2021", 
          "Dead": "1", 
          "Description": "A man was killed and several people wounded after a shooting at a Halloween party.", 
          "Injured": "9", 
          "State": "Texas", 
          "Total": "10"
        }, 
        {
          "Date": "30/10/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in a residential area in the early morning.", 
          "Injured": "4", 
          "State": "Oklahoma", 
          "Total": "4"
        }, 
        {
          "Date": "30/10/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded at a large house party in the early morning.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "30/10/2021", 
          "Dead": "1", 
          "Description": "A man was killed and four others wounded at an outdoor boxing match at the Skyway Plaza.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "30/10/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and five injured at a Halloween party that was held at a local banquet hall.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "7"
        }, 
        {
          "Date": "29/10/2021", 
          "Dead": "0", 
          "Description": "Four people were shot at a party inside an event center.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "29/10/2021", 
          "Dead": "0", 
          "Description": "Three people were wounded at a birthday party and two more were wounded as the tour bus transporting some of the wounded was later shot at.", 
          "Injured": "5", 
          "State": "New York", 
          "Total": "5"
        }, 
        {
          "Date": "28/10/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded after an argument in an alley escalated.", 
          "Injured": "4", 
          "State": "Nevada", 
          "Total": "4"
        }, 
        {
          "Date": "28/10/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three wounded in a suspected robbery shortly before midnight.", 
          "Injured": "3", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "25/10/2021", 
          "Dead": "3", 
          "Description": "Two people, including a security guard, were shot and killed at a mall, and four others were wounded. The shooter was injured by responding officers and died the next day after being taken into custody.", 
          "Injured": "4", 
          "State": "Idaho", 
          "Total": "7"
        }, 
        {
          "Date": "25/10/2021", 
          "Dead": "0", 
          "Description": "Three teenagers and an adult were wounded after a shooting near an elementary school.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "24/10/2021", 
          "Dead": "2", 
          "Description": "Two people were killed, and two others injured at an off-roading event.", 
          "Injured": "2", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "24/10/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and three injured in a shooting on Jones Street.", 
          "Injured": "3", 
          "State": "Mississippi", 
          "Total": "5"
        }, 
        {
          "Date": "23/10/2021", 
          "Dead": "0", 
          "Description": "Six people were wounded in an early morning shooting at a local bar.", 
          "Injured": "6", 
          "State": "South Carolina", 
          "Total": "6"
        }, 
        {
          "Date": "23/10/2021", 
          "Dead": "1", 
          "Description": "A teenager was killed and one adult and three juveniles wounded at a Halloween party.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "23/10/2021", 
          "Dead": "1", 
          "Description": "A man was killed and seven others wounded at an off-campus party about two blocks from Fort Valley State University.", 
          "Injured": "7", 
          "State": "Georgia", 
          "Total": "8"
        }, 
        {
          "Date": "22/10/2021", 
          "Dead": "0", 
          "Description": "Five people were wounded outside a Chatham liqueur store when a man opened fire and then fled.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "22/10/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in the parking lot of a banquet hall that was hosting a Halloween party.", 
          "Injured": "4", 
          "State": "Washington", 
          "Total": "4"
        }, 
        {
          "Date": "22/10/2021", 
          "Dead": "0", 
          "Description": "Five adults and two teenagers were wounded in a drive-by shooting.", 
          "Injured": "7", 
          "State": "Maryland", 
          "Total": "7"
        }, 
        {
          "Date": "21/10/2021", 
          "Dead": "4", 
          "Description": "Three adults were killed and a fourth later died at the hospital in a night time shooting.", 
          "Injured": "0", 
          "State": "Washington", 
          "Total": "4"
        }, 
        {
          "Date": "21/10/2021", 
          "Dead": "0", 
          "Description": "A gunman exited a subway station and shot four people in the Flatbush section of Brooklyn.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "20/10/2021", 
          "Dead": "4", 
          "Description": "A woman shot and killed her father, sister and two workers at their home in the afternoon.", 
          "Injured": "0", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "19/10/2021", 
          "Dead": "3", 
          "Description": "A man killed his roommate's teenage daughter and her boyfriend, and wounded his roommate and her 14-year-old son. He later killed himself.", 
          "Injured": "2", 
          "State": "Wisconsin", 
          "Total": "5"
        }, 
        {
          "Date": "17/10/2021", 
          "Dead": "0", 
          "Description": "Responding officers found an SUV in a ditch with bullet holes and blood near Winzer Park. Four adults and a juvenile were later identified at local hospitals although none had reached out to police.", 
          "Injured": "5", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "17/10/2021", 
          "Dead": "1", 
          "Description": "A 19-year-old was killed and three teenagers were wounded in the early morning in the Baden neighborhood.", 
          "Injured": "3", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "17/10/2021", 
          "Dead": "0", 
          "Description": "Responding officers found four people wounded and shell casings around a car in the intersection.", 
          "Injured": "4", 
          "State": "Arkansas", 
          "Total": "4"
        }, 
        {
          "Date": "17/10/2021", 
          "Dead": "0", 
          "Description": "Five people were wounded outside a local bar after an unknown number of people opened fire.", 
          "Injured": "5", 
          "State": "Colorado", 
          "Total": "5"
        }, 
        {
          "Date": "17/10/2021", 
          "Dead": "1", 
          "Description": "A person was killed and seven others wounded at Grambling State University during a homecoming event in the early morning.", 
          "Injured": "7", 
          "State": "Louisiana", 
          "Total": "8"
        }, 
        {
          "Date": "17/10/2021", 
          "Dead": "0", 
          "Description": "Six people were wounded at a one-year anniversary vigil for a man killed in the location. Neighbors refused to cooperate with police due to fear of retaliation.", 
          "Injured": "6", 
          "State": "Wisconsin", 
          "Total": "6"
        }, 
        {
          "Date": "17/10/2021", 
          "Dead": "1", 
          "Description": "Gunfire erupted at a party hall wounding eleven and killing one, responding police opened fire on a man holding a gun and wounded him.", 
          "Injured": "7", 
          "State": "Arkansas", 
          "Total": "8"
        }, 
        {
          "Date": "17/10/2021", 
          "Dead": "3", 
          "Description": "Three people were killed and three injured after a man opened fire inside a night club.", 
          "Injured": "3", 
          "State": "Mississippi", 
          "Total": "6"
        }, 
        {
          "Date": "16/10/2021", 
          "Dead": "1", 
          "Description": "Four people were wounded in the parking lot of a club in the early morning. One of the wounded died two days later.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "15/10/2021", 
          "Dead": "0", 
          "Description": "Five people were wounded at a high school football game.", 
          "Injured": "5", 
          "State": "Alabama", 
          "Total": "5"
        }, 
        {
          "Date": "14/10/2021", 
          "Dead": "1", 
          "Description": "Responding police found five people wounded in Ventura Village. One of the wounded later died at the hospital.", 
          "Injured": "4", 
          "State": "Minnesota", 
          "Total": "5"
        }, 
        {
          "Date": "12/10/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three others wounded after two shooters opened fire on a Naples Park home. The shooters were also wounded.", 
          "Injured": "5", 
          "State": "Florida", 
          "Total": "6"
        }, 
        {
          "Date": "12/10/2021", 
          "Dead": "3", 
          "Description": "Three adults were killed in a home and an infant was found wounded.", 
          "Injured": "1", 
          "State": "Mississippi", 
          "Total": "4"
        }, 
        {
          "Date": "11/10/2021", 
          "Dead": "0", 
          "Description": "Three wounded were found by responding officers, a fourth flagged down officers and two others were found at local hospitals.", 
          "Injured": "6", 
          "State": "Georgia", 
          "Total": "6"
        }, 
        {
          "Date": "10/10/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and three injured in a shooting near a nightclub.", 
          "Injured": "3", 
          "State": "South Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "10/10/2021", 
          "Dead": "1", 
          "Description": "One person was killed and 14 injured in a shootout at a bar.", 
          "Injured": "14", 
          "State": "Minnesota", 
          "Total": "15"
        }, 
        {
          "Date": "10/10/2021", 
          "Dead": "0", 
          "Description": "Four bystanders were wounded at an after hours club  in an early morning targeted shooting.", 
          "Injured": "4", 
          "State": "Iowa", 
          "Total": "4"
        }, 
        {
          "Date": "10/10/2021", 
          "Dead": "1", 
          "Description": "A man was killed and four others injured in an early morning drive-by outside a Wicker Park nightclub.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "10/10/2021", 
          "Dead": "1", 
          "Description": "A man was killed and four others wounded after a drive-by shooting at a house party in the early morning.", 
          "Injured": "4", 
          "State": "Delaware", 
          "Total": "5"
        }, 
        {
          "Date": "09/10/2021", 
          "Dead": "0", 
          "Description": "Three 18-year-olds and a 16-year-old were wounded in South Dallas.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "09/10/2021", 
          "Dead": "1", 
          "Description": "Responding officers found one man deceased and six wounded were later found in local hospitals.", 
          "Injured": "6", 
          "State": "New York", 
          "Total": "7"
        }, 
        {
          "Date": "09/10/2021", 
          "Dead": "1", 
          "Description": "Responding officers found one man killed and three wounded.", 
          "Injured": "3", 
          "State": "Colorado", 
          "Total": "4"
        }, 
        {
          "Date": "09/10/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and three others wounded after a man went on a multi-parish shooting spree. He was later arrested with a self-inflicted gunshot wound and a dog bite.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "6"
        }, 
        {
          "Date": "08/10/2021", 
          "Dead": "0", 
          "Description": "Four men were wounded in Southeast Baltimore in the afternoon.", 
          "Injured": "4", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "08/10/2021", 
          "Dead": "1", 
          "Description": "Responding police discovered a deceased man and another wounded, with two more identified at local hospitals.", 
          "Injured": "3", 
          "State": "Washington, D.C.", 
          "Total": "4"
        }, 
        {
          "Date": "07/10/2021", 
          "Dead": "3", 
          "Description": "Three adults were killed and another wounded after two men came back thirty minutes after an argument over parking and opened fire.", 
          "Injured": "1", 
          "State": "Wisconsin", 
          "Total": "4"
        }, 
        {
          "Date": "07/10/2021", 
          "Dead": "0", 
          "Description": "Two teenagers and two adults were wounded in the early morning after someone opened fire on another car on the Near North Side.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "07/10/2021", 
          "Dead": "0", 
          "Description": "Five people were wounded when a police officer opened fire on an armed suspect who returned fire before he fled the area.", 
          "Injured": "5", 
          "State": "Wisconsin", 
          "Total": "5"
        }, 
        {
          "Date": "06/10/2021", 
          "Dead": "1", 
          "Description": "A woman was killed and five people were wounded in East Baltimore.", 
          "Injured": "5", 
          "State": "Maryland", 
          "Total": "6"
        }, 
        {
          "Date": "06/10/2021", 
          "Dead": "0", 
          "Description": "Four adults were wounded at a music studio shortly before midnight.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "06/10/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three others wounded after four people exited a vehicle and opened fire on them. The victims were doing work in a parking lot behind a church.", 
          "Injured": "3", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "05/10/2021", 
          "Dead": "1", 
          "Description": "Responding police found four injured due to an evening shooting and one later died at the hospital.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "05/10/2021", 
          "Dead": "0", 
          "Description": "A teen shot four people inside a vehicle at an intersection.", 
          "Injured": "4", 
          "State": "Minnesota", 
          "Total": "4"
        }, 
        {
          "Date": "04/10/2021", 
          "Dead": "0", 
          "Description": "Three men and a juvenile were wounded at a local gas station.", 
          "Injured": "4", 
          "State": "Minnesota", 
          "Total": "4"
        }, 
        {
          "Date": "03/10/2021", 
          "Dead": "1", 
          "Description": "A man was killed and four others wounded in an early morning drive by shooting at a Waffle House.", 
          "Injured": "4", 
          "State": "South Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "02/10/2021", 
          "Dead": "1", 
          "Description": "A man was killed and two adults and a teenager were wounded at an early morning hotel party,", 
          "Injured": "3", 
          "State": "Colorado", 
          "Total": "4"
        }, 
        {
          "Date": "02/10/2021", 
          "Dead": "1", 
          "Description": "A man was killed and two adults and a teenager wounded at an apartment complex.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "01/10/2021", 
          "Dead": "1", 
          "Description": "Five adults were wounded and one killed in Southwest D.C. late at night.", 
          "Injured": "5", 
          "State": "Washington, D.C.", 
          "Total": "6"
        }, 
        {
          "Date": "01/10/2021", 
          "Dead": "0", 
          "Description": "Five adults and a teenager were wounded after an argument at a hotel birthday party celebration escalated.", 
          "Injured": "6", 
          "State": "Iowa", 
          "Total": "6"
        }, 
        {
          "Date": "29/09/2021", 
          "Dead": "0", 
          "Description": "Five bystanders were wounded when passengers of two separate cars opened fire on one another while driving down a Fulton River District road.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "28/09/2021", 
          "Dead": "1", 
          "Description": "A woman was killed and three others injured in the early morning after a man opened fire on a car in Park Manor.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "28/09/2021", 
          "Dead": "1", 
          "Description": "A man was fatally shot and three others injured in a gunfire incident on Bloomington Avenue in the Phillips neighborhood.", 
          "Injured": "3", 
          "State": "Minnesota", 
          "Total": "4"
        }, 
        {
          "Date": "27/09/2021", 
          "Dead": "1", 
          "Description": "A man was killed and two adults and a teenager wounded in Humboldt Park on the Northwest Side.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "27/09/2021", 
          "Dead": "0", 
          "Description": "A man opened fire outside a club in Inwood in Upper Manhattan wounding four. Responding officers opened fire an wounded him.", 
          "Injured": "5", 
          "State": "New York", 
          "Total": "5"
        }, 
        {
          "Date": "26/09/2021", 
          "Dead": "3", 
          "Description": "Two groups of people began fighting in a bar and others joined in as it spilled into the parking lot. Some fighters got into cars and opened fire while driving away killing three and wounding three others.", 
          "Injured": "3", 
          "State": "Washington", 
          "Total": "6"
        }, 
        {
          "Date": "26/09/2021", 
          "Dead": "0", 
          "Description": "Six adults were wounded in East Garfield Park on the West Side in the early morning.", 
          "Injured": "6", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "26/09/2021", 
          "Dead": "0", 
          "Description": "Four people including a teenager were wounded in East Oakland.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "25/09/2021", 
          "Dead": "0", 
          "Description": "Four men were wounded in the early morning.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "25/09/2021", 
          "Dead": "2", 
          "Description": "Responding police found two adults killed and four adults and a child wounded.", 
          "Injured": "5", 
          "State": "Tennessee", 
          "Total": "7"
        }, 
        {
          "Date": "25/09/2021", 
          "Dead": "0", 
          "Description": "Shortly after midnight six people were wounded at a large house party.", 
          "Injured": "6", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "25/09/2021", 
          "Dead": "4", 
          "Description": "Two adults arrived at a home and engaged in an argument with the four adults there over a 10-month old. The dispute escalated and the four adults living at the home were killed and the two suspects kidnapped the child.", 
          "Injured": "0", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "24/09/2021", 
          "Dead": "4", 
          "Description": "A man murdered his parents and sister and wounded another sibling before committing suicide.", 
          "Injured": "1", 
          "State": "South Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "24/09/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded at the Rosa Parks Metro Station in Willowbrook.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "23/09/2021", 
          "Dead": "2", 
          "Description": "Collierville Kroger shooting: A worker at a third-party venue inside the store opened fire in a Kroger, killing one and injuring 14, before taking his own life.", 
          "Injured": "14", 
          "State": "Tennessee", 
          "Total": "16"
        }, 
        {
          "Date": "23/09/2021", 
          "Dead": "0", 
          "Description": "Four men were wounded in the Mantua neighborhood.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "22/09/2021", 
          "Dead": "2", 
          "Description": "Two teenagers were killed and two others injured in a home invasion. Three days earlier a relative of the two deceased had been killed in another home.", 
          "Injured": "2", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "21/09/2021", 
          "Dead": "0", 
          "Description": "A man opened fire and wounded four adults and one child near Alabama Avenue, Southeast.", 
          "Injured": "5", 
          "State": "Washington, D.C.", 
          "Total": "5"
        }, 
        {
          "Date": "20/09/2021", 
          "Dead": "1", 
          "Description": "A man was killed and four others wounded, with the deceased found behind the wheel of a vehicle.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "20/09/2021", 
          "Dead": "1", 
          "Description": "A man was killed and five others injured in a drive-by shooting in the Fern Rock neighborhood.", 
          "Injured": "5", 
          "State": "Pennsylvania", 
          "Total": "6"
        }, 
        {
          "Date": "20/09/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three others wounded while at a vigil for another homicide victim, when a group of people opened fire from a black SUV.", 
          "Injured": "3", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "19/09/2021", 
          "Dead": "1", 
          "Description": "After an argument escalated someone opened fire shortly after midnight killing one adult and wounding one adult and seven children.", 
          "Injured": "7", 
          "State": "South Carolina", 
          "Total": "7"
        }, 
        {
          "Date": "19/09/2021", 
          "Dead": "0", 
          "Description": "During an argument one of the victims pulled out her gun and pointed it at the ground, after things calmed down she put it away and began to enter a car with her husband, and two children. The man she was arguing with opened fire once they got to the car, wounding her, her husband and two children.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "19/09/2021", 
          "Dead": "2", 
          "Description": "Two adults were killed and three others and a teenager wounded shortly after midnight when a man opened fire.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "6"
        }, 
        {
          "Date": "19/09/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three others wounded in the early morning while outside a club.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "19/09/2021", 
          "Dead": "0", 
          "Description": "Five people were wounded while sitting on a porch in Austin during the early morning, after two men exited a vehicle and opened fire.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "19/09/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and two injured after someone shot down an alley at a group standing outside, who were attending a party. The shooting occurred on the anniversary of a similar mass shooting in 2020.", 
          "Injured": "2", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "18/09/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three others wounded at a BBQ at Claremont Park in the Bronx, after an argument escalated.", 
          "Injured": "3", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "18/09/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and two wounded at a liquor store in the early morning.", 
          "Injured": "2", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "18/09/2021", 
          "Dead": "0", 
          "Description": "Four people were shot outside a club in the East Flatbush area of Brooklyn after a dispute.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "18/09/2021", 
          "Dead": "0", 
          "Description": "Five family members were injured after a gunman opened fire on their mobile home at night.", 
          "Injured": "5", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "17/09/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in the early morning at a night club. Two men were later arrested.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "14/09/2021", 
          "Dead": "0", 
          "Description": "Three teenagers and a boy were injured in a shooting.", 
          "Injured": "4", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "14/09/2021", 
          "Dead": "0", 
          "Description": "Six people were wounded after an incident at a liquor store escalated.", 
          "Injured": "6", 
          "State": "Ohio", 
          "Total": "6"
        }, 
        {
          "Date": "13/09/2021", 
          "Dead": "0", 
          "Description": "Five people were wounded in a shooting at a candlelight vigil near the intersection in Sherman Park. The vigil was held for a 16-year-old who was killed at the same intersection earlier that day.", 
          "Injured": "5", 
          "State": "Wisconsin", 
          "Total": "5"
        }, 
        {
          "Date": "12/09/2021", 
          "Dead": "4", 
          "Description": "An SUV with four deceased adults was found in a local cornfield in Wheeler, Wisconsin. It was discovered later that the four victims were shot in Saint Paul following an argument at a bar with the shooter. The perpetrator's father followed his son in a vehicle on the way to Wheeler and then gave his son a ride home after his son abandoned the SUV in the cornfield.", 
          "Injured": "0", 
          "State": "Minnesota", 
          "Total": "4"
        }, 
        {
          "Date": "12/09/2021", 
          "Dead": "0", 
          "Description": "Four people were found wounded from a shooting.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "12/09/2021", 
          "Dead": "2", 
          "Description": "Two women were killed and four others wounded in a drive-by shooting that targeted a family birthday party.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "6"
        }, 
        {
          "Date": "12/09/2021", 
          "Dead": "2", 
          "Description": "Three people were found wounded on the street by police, and a fourth victim was located after he fled to the hospital. Two of the victims perished at the hospital.", 
          "Injured": "2", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "11/09/2021", 
          "Dead": "0", 
          "Description": "Five teenagers were wounded at a party at a local shopping center.", 
          "Injured": "5", 
          "State": "Alabama", 
          "Total": "5"
        }, 
        {
          "Date": "11/09/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three others injured in South Side drive-by shooting.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "11/09/2021", 
          "Dead": "1", 
          "Description": "A woman was killed and four adults and a teenager wounded in a West Pullman drive-by while walking as a group.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "11/09/2021", 
          "Dead": "0", 
          "Description": "Responding officers discovered two wounded from an early morning shooting. Two others arrived were identified at the hospital.", 
          "Injured": "4", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "11/09/2021", 
          "Dead": "0", 
          "Description": "Responding officers found four men wounded.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "10/09/2021", 
          "Dead": "0", 
          "Description": "Deputies were called after a man got drunk and fired shots into the air. He then opened fire on the security guard and officers, before driving down the road, getting into a car accident and opening fire on those in the car. He wounded the security guards and three in the vehicle.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "09/09/2021", 
          "Dead": "0", 
          "Description": "Six adults and a child were wounded in a drive-by shooting. The suspects attempted to flee the area but were hit by a MetroLink train.", 
          "Injured": "7", 
          "State": "Illinois", 
          "Total": "7"
        }, 
        {
          "Date": "09/09/2021", 
          "Dead": "1", 
          "Description": "Responding officers found one child deceased and two adults and another child injured.", 
          "Injured": "3", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "08/09/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded after two men got into an argument after one was seen arguing and pistol whipping a woman.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "07/09/2021", 
          "Dead": "1", 
          "Description": "After getting kicked out of a night club shortly after midnight, a man opened fire killed a man and wounded five women.", 
          "Injured": "5", 
          "State": "Kansas", 
          "Total": "6"
        }, 
        {
          "Date": "07/09/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in a local park in the Southbridge neighborhood after a drive-by shooting.", 
          "Injured": "4", 
          "State": "Delaware", 
          "Total": "4"
        }, 
        {
          "Date": "06/09/2021", 
          "Dead": "0", 
          "Description": "A man opened fire after an argument at a local Black Pride festival, wounding five.", 
          "Injured": "5", 
          "State": "Georgia", 
          "Total": "5"
        }, 
        {
          "Date": "05/09/2021", 
          "Dead": "0", 
          "Description": "Four men were injured in a shooting outside a rollerskating rink on Eight Mile Road in the west side.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "05/09/2021", 
          "Dead": "0", 
          "Description": "An adult and three teenagers were wounded at a local festival after two people got into an argument and one opened fire.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "05/09/2021", 
          "Dead": "0", 
          "Description": "Four adults were wounded outside a catering hall in the Bronx after an argument escalated.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "05/09/2021", 
          "Dead": "0", 
          "Description": "Four adults were wounded at a family car show after two men opened fire on the crowd in suspected gang violence.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "05/09/2021", 
          "Dead": "4", 
          "Description": "Firefighters discovered a husband and wife and two children deceased when responding to a house fire. Family members believe the family had been dead for days before the fire.", 
          "Injured": "0", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "05/09/2021", 
          "Dead": "0", 
          "Description": "A man fired into a crowd of people that were fighting in the early morning. He wounded seven and turned himself in the next day.", 
          "Injured": "7", 
          "State": "Georgia", 
          "Total": "7"
        }, 
        {
          "Date": "05/09/2021", 
          "Dead": "4", 
          "Description": "A former Marine sharpshooter shot and killed three adults, an infant, and a dog and wounded a child inside and outside a home, before engaging in a shootout with police. The shooter was eventually injured in the gunfight and then apprehended.", 
          "Injured": "2", 
          "State": "Florida", 
          "Total": "6"
        }, 
        {
          "Date": "05/09/2021", 
          "Dead": "0", 
          "Description": "Three adults and a teenager were wounded after an argument outside a Mt. Washington home. The victims went inside, before the suspect fired through the door.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "04/09/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and two injured after an argument inside a strip mall store escalated. Three people were arrested and one went on the run.", 
          "Injured": "2", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "04/09/2021", 
          "Dead": "1", 
          "Description": "Responding officers found four people injured, with one later dying at the hospital.", 
          "Injured": "3", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "04/09/2021", 
          "Dead": "3", 
          "Description": "Six people were found injured in Northwest DC, with three later dying at a hospital.", 
          "Injured": "3", 
          "State": "Washington, D.C.", 
          "Total": "6"
        }, 
        {
          "Date": "04/09/2021", 
          "Dead": "1", 
          "Description": "A teenager was killed and four others injured while attending a block party.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "5"
        }, 
        {
          "Date": "04/09/2021", 
          "Dead": "0", 
          "Description": "A teenager shot four people on the street in Homewood South.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "04/09/2021", 
          "Dead": "0", 
          "Description": "Five people were injured in a drive-by shooting in Lawndale shortly after midnight.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "03/09/2021", 
          "Dead": "0", 
          "Description": "Four adults were wounded in an early morning shooting during an outdoor party.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "03/09/2021", 
          "Dead": "1", 
          "Description": "A woman was killed and three others injured in an apartment complex close to US Highway 290 in East Austin.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "03/09/2021", 
          "Dead": "1", 
          "Description": "One person was killed and three injured outside a shoe store in a strip mall, after two men exited a car and opened fire.", 
          "Injured": "3", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "02/09/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded after shooters opened fire on them across the street while they were standing outside a deli.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "31/08/2021", 
          "Dead": "2", 
          "Description": "A man killed one person and wounded two others before kidnapping a woman and infant. He later killed the woman and left the baby alive in the stolen vehicle and is still on the run.", 
          "Injured": "2", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "30/08/2021", 
          "Dead": "3", 
          "Description": "A man killed two people and wounded three others in a mobile home park, before being killed by responding police.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "29/08/2021", 
          "Dead": "0", 
          "Description": "Five people were wounded in an early morning drive by shooting on Jefferson Street.", 
          "Injured": "5", 
          "State": "Tennessee", 
          "Total": "5"
        }, 
        {
          "Date": "29/08/2021", 
          "Dead": "1", 
          "Description": "Three adults were wounded and one was killed near Rainbow Boulevard.", 
          "Injured": "3", 
          "State": "Nevada", 
          "Total": "4"
        }, 
        {
          "Date": "29/08/2021", 
          "Dead": "0", 
          "Description": "An adult and three teenagers were wounded.", 
          "Injured": "4", 
          "State": "Wisconsin", 
          "Total": "4"
        }, 
        {
          "Date": "28/08/2021", 
          "Dead": "0", 
          "Description": "Responding officers found two wounded men, a wounded teenager and two other adults were later found at hospitals.", 
          "Injured": "5", 
          "State": "New York", 
          "Total": "5"
        }, 
        {
          "Date": "28/08/2021", 
          "Dead": "0", 
          "Description": "Two groups got into an argument near Belmont Park and a man opened fire, wounding four people.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "28/08/2021", 
          "Dead": "0", 
          "Description": "Four adults were wounded in Douglas Park while attending a large gathering.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "27/08/2021", 
          "Dead": "1", 
          "Description": "After a football game at a high school, a civilian was injured in a drive-by shooting. Police fired back, which district attorney Jack Stollsteimer says likely hit four people, including an eight-year-old girl who was killed.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "27/08/2021", 
          "Dead": "2", 
          "Description": "Two adults and two children were shot, with an adult and child later dying from their injuries.", 
          "Injured": "2", 
          "State": "West Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "27/08/2021", 
          "Dead": "0", 
          "Description": "Four men were found injured in the West Hollywood neighborhood.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "26/08/2021", 
          "Dead": "0", 
          "Description": "Seven people were wounded just after midnight when two people opened fire at one another.", 
          "Injured": "7", 
          "State": "Minnesota", 
          "Total": "7"
        }, 
        {
          "Date": "23/08/2021", 
          "Dead": "0", 
          "Description": "A teenager and three adults were wounded in a drive by shooting in Uptown.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "22/08/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three adults and a teenager were wounded in East Garfield Park, about four hours after a previous mass shooting.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "22/08/2021", 
          "Dead": "1", 
          "Description": "A SIU student was killed and three other people wounded at a party hosted at a private residence.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "22/08/2021", 
          "Dead": "0", 
          "Description": "Five men were wounded at a vigil for a man that had been killed in the same location earlier in the day.", 
          "Injured": "5", 
          "State": "Oregon", 
          "Total": "5"
        }, 
        {
          "Date": "22/08/2021", 
          "Dead": "1", 
          "Description": "One person was killed and three wounded in an early morning shooting.", 
          "Injured": "3", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "21/08/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in an East Garfield Park drive-by.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "21/08/2021", 
          "Dead": "1", 
          "Description": "A man was killed and five others wounded while standing in a Calumet Heights parking lot, after two men opened fire from an alley.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "20/08/2021", 
          "Dead": "1", 
          "Description": "One person died and three were injured after a shooting.", 
          "Injured": "3", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "19/08/2021", 
          "Dead": "0", 
          "Description": "Four people were shot in a Bronzeville business.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "19/08/2021", 
          "Dead": "1", 
          "Description": "A drive-by shooting outside a barbershop killed one and wounded four.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "19/08/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three others wounded in an evening shooting.", 
          "Injured": "3", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "18/08/2021", 
          "Dead": "1", 
          "Description": "A teenager was arrested for allegedly shooting four people on a basketball court, killing a man and wounding three teenagers.", 
          "Injured": "3", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "18/08/2021", 
          "Dead": "2", 
          "Description": "Two people, including a 10-year-old girl, were killed, and four wounded after a shooting.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "6"
        }, 
        {
          "Date": "18/08/2021", 
          "Dead": "0", 
          "Description": "Four men were wounded after a shooting in Playa del Ray.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "18/08/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three injured in a shooting.", 
          "Injured": "3", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "17/08/2021", 
          "Dead": "0", 
          "Description": "Five men were wounded in a drive-by shooting outside a grocery store in Brooklyn.", 
          "Injured": "5", 
          "State": "New York", 
          "Total": "5"
        }, 
        {
          "Date": "16/08/2021", 
          "Dead": "0", 
          "Description": "Five women and three men were wounded outside a housing project in Brooklyn shortly after midnight.", 
          "Injured": "8", 
          "State": "New York", 
          "Total": "8"
        }, 
        {
          "Date": "16/08/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three others injured outside a local bar.", 
          "Injured": "3", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "15/08/2021", 
          "Dead": "3", 
          "Description": "Three people were killed and two injured after a fight escalated in the parking lot of a local sports bar on the East Side, by a man who drew a long gun and shot into the air.", 
          "Injured": "2", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "15/08/2021", 
          "Dead": "0", 
          "Description": "Three men and a woman were wounded standing outside a home shortly after midnight.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "14/08/2021", 
          "Dead": "0", 
          "Description": "Four adults and a teenager were wounded outside a nightclub shortly after midnight.", 
          "Injured": "5", 
          "State": "Ohio", 
          "Total": "5"
        }, 
        {
          "Date": "14/08/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three adults and a child wounded in a strip mall parking lot in the early morning.", 
          "Injured": "4", 
          "State": "Indiana", 
          "Total": "5"
        }, 
        {
          "Date": "14/08/2021", 
          "Dead": "0", 
          "Description": "Four men were wounded in Brooklyn shortly after midnight.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "14/08/2021", 
          "Dead": "0", 
          "Description": "Responding officers found four wounded in the early morning.", 
          "Injured": "4", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "13/08/2021", 
          "Dead": "1", 
          "Description": "One person was killed and six teenagers wounded after a fight broke out at a local park shortly after midnight.", 
          "Injured": "6", 
          "State": "Nevada", 
          "Total": "7"
        }, 
        {
          "Date": "11/08/2021", 
          "Dead": "1", 
          "Description": "A man opened fire on a group playing a dice game outside a local bar. One man was killed and four injured.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "10/08/2021", 
          "Dead": "2", 
          "Description": "Two men, identified as rap-artists connected to the Wu-Tang Clan, were killed and four others wounded, in a potential drive-by shooting.", 
          "Injured": "4", 
          "State": "Oregon", 
          "Total": "6"
        }, 
        {
          "Date": "10/08/2021", 
          "Dead": "2", 
          "Description": "A woman and teenager were killed and two other individuals wounded in an evening shooting.", 
          "Injured": "2", 
          "State": "Mississippi", 
          "Total": "4"
        }, 
        {
          "Date": "09/08/2021", 
          "Dead": "2", 
          "Description": "Two teenagers were killed and four others injured at a late-night party at a city park.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "6"
        }, 
        {
          "Date": "09/08/2021", 
          "Dead": "1", 
          "Description": "A woman was killed and five others were injured in a shooting on Irma Street near the Mattapan/Dorchester border. Police arrived at the scene at about 12:30\u00a0a.m. and pronounced the woman dead. On August 24, police charged a 37-year-old man with murder in connection to the shooting.", 
          "Injured": "5", 
          "State": "Massachusetts", 
          "Total": "6"
        }, 
        {
          "Date": "08/08/2021", 
          "Dead": "1", 
          "Description": "A security guard and four others were wounded after a man got into an argument with two security guards outside a club on the South Side.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "08/08/2021", 
          "Dead": "0", 
          "Description": "Five people were shot in the early morning on Bourbon Street. This was the second weekend in a row with a mass shooting in the city.", 
          "Injured": "5", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "08/08/2021", 
          "Dead": "1", 
          "Description": "A man was killed and five others wounded after a fight in a night club escalated out of the club and into the parking lot.", 
          "Injured": "5", 
          "State": "Texas", 
          "Total": "6"
        }, 
        {
          "Date": "08/08/2021", 
          "Dead": "1", 
          "Description": "Two men were arguing outside a lounge on the South Side, before it escalated. One of the two was killed, and the other along with five bystanders was injured.", 
          "Injured": "6", 
          "State": "Illinois", 
          "Total": "7"
        }, 
        {
          "Date": "08/08/2021", 
          "Dead": "2", 
          "Description": "Two men were killed and three wounded at an outdoor event space in Brooklyn shortly after midnight.", 
          "Injured": "3", 
          "State": "New York", 
          "Total": "5"
        }, 
        {
          "Date": "07/08/2021", 
          "Dead": "0", 
          "Description": "Three men and a woman were wounded shortly after midnight.", 
          "Injured": "4", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "07/08/2021", 
          "Dead": "0", 
          "Description": "Four men were wounded in a drive-by shooting.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "07/08/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in an early morning shooting in the Neon District.", 
          "Injured": "4", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "06/08/2021", 
          "Dead": "0", 
          "Description": "Four people, two on the side walk and two in a vehicle, were wounded in a drive-by shooting in  West Nashville.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "04/08/2021", 
          "Dead": "0", 
          "Description": "Four adults were wounded a block away from Temple University Hospital.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "03/08/2021", 
          "Dead": "1", 
          "Description": "A woman was killed and three others injured in the early morning in a home. Three men walked to the side of the home and shot repeatedly through the windows and walls.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "02/08/2021", 
          "Dead": "3", 
          "Description": "Two adults and a child were killed and a child wounded in a home. The shooter was arrested in Florida shortly after.", 
          "Injured": "1", 
          "State": "South Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "02/08/2021", 
          "Dead": "0", 
          "Description": "Nine people were wounded in the early morning at a local dance studio.", 
          "Injured": "9", 
          "State": "South Carolina", 
          "Total": "9"
        }, 
        {
          "Date": "01/08/2021", 
          "Dead": "0", 
          "Description": "Five adults were wounded in an early morning shooting near Bourbon Street.", 
          "Injured": "5", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "01/08/2021", 
          "Dead": "1", 
          "Description": "A teenager was killed and two teenagers and an adult were wounded by a teenager in the Central Business District. He was turned in by a family member.", 
          "Injured": "3", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "01/08/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three wounded in an early morning shooting. Five suspects were later arrested.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "01/08/2021", 
          "Dead": "0", 
          "Description": "Five people were wounded in the parking lot of a Popeyes restaurant in the early morning.", 
          "Injured": "5", 
          "State": "Rhode Island", 
          "Total": "5"
        }, 
        {
          "Date": "31/07/2021", 
          "Dead": "1", 
          "Description": "Five people were wounded in an early morning shooting outside a local bar, and one died later at the hospital. An argument escalated causing a gunfight between multiple people.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "5"
        }, 
        {
          "Date": "31/07/2021", 
          "Dead": "0", 
          "Description": "Four adults were wounded in an early morning shooting while at a gathering in Jackson Park on the South Side.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "31/07/2021", 
          "Dead": "2", 
          "Description": "Two people were wounded and two killed at a large public gathering.", 
          "Injured": "2", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "31/07/2021", 
          "Dead": "0", 
          "Description": "Ten people, including seven bystanders, were wounded in a night-time gang shooting outside a laundromat. The incident took place in North Corona, Queens.", 
          "Injured": "10", 
          "State": "New York", 
          "Total": "10"
        }, 
        {
          "Date": "31/07/2021", 
          "Dead": "0", 
          "Description": "Three adults and two children were wounded outside a funeral home. It is believed an argument escalated inside the building prior.", 
          "Injured": "5", 
          "State": "Indiana", 
          "Total": "5"
        }, 
        {
          "Date": "31/07/2021", 
          "Dead": "0", 
          "Description": "Responding officers found five people wounded in an evening shooting.", 
          "Injured": "5", 
          "State": "Kentucky", 
          "Total": "5"
        }, 
        {
          "Date": "29/07/2021", 
          "Dead": "0", 
          "Description": "A feud between the occupants of two vehicles escalated into gunfire injuring three adults and a child.", 
          "Injured": "4", 
          "State": "Iowa", 
          "Total": "4"
        }, 
        {
          "Date": "29/07/2021", 
          "Dead": "3", 
          "Description": "After an argument a man shot and killed his parents. He called 911, and stated he wished to turn himself in, but opened fire at responding officers wounding two. He fled the scene in a vehicle that he crashed and was discovered dead due to a self inflicted gunshot wound.", 
          "Injured": "2", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "28/07/2021", 
          "Dead": "1", 
          "Description": "Five people were wounded in an afternoon shooting, with one later dying at the hospital.", 
          "Injured": "4", 
          "State": "South Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "28/07/2021", 
          "Dead": "0", 
          "Description": "Four adults were wounded in a shooting in Southeast DC.", 
          "Injured": "4", 
          "State": "Washington, D.C.", 
          "Total": "4"
        }, 
        {
          "Date": "26/07/2021", 
          "Dead": "2", 
          "Description": "A shooter killed one and injured three after opening fire at a backyard party, after becoming upset, leaving and returning. He was chased down by partygoers who threw bricks at him in defense, and was pronounced dead by responding police.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "25/07/2021", 
          "Dead": "0", 
          "Description": "Seven people were wounded at a candlelit vigil on the West Side for a hit and run victim. The shooter pulled up in a vehicle and opened fire on the crowd.", 
          "Injured": "7", 
          "State": "Michigan", 
          "Total": "7"
        }, 
        {
          "Date": "25/07/2021", 
          "Dead": "5", 
          "Description": "When responding to a hostage situation at a home in Wasco, officers were fired upon by the shooter. Two officers were shot, and one succumbed to their injuries. Three people inside the house were slain by the shooter. The gunman was also killed during the shootout.", 
          "Injured": "1", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "25/07/2021", 
          "Dead": "0", 
          "Description": "Five men were wounded shortly after midnight while standing in an Austin backyard, after a man entered and opened fire.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "25/07/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and three injured after someone opened fire on a group leaving a nightclub.", 
          "Injured": "3", 
          "State": "Washington", 
          "Total": "5"
        }, 
        {
          "Date": "24/07/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in a parking lot in Short North in an early morning.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "24/07/2021", 
          "Dead": "0", 
          "Description": "Six people were wounded in an early morning shooting after an argument escalated at an after-hours club.", 
          "Injured": "6", 
          "State": "Texas", 
          "Total": "6"
        }, 
        {
          "Date": "24/07/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and two injured shortly after midnight after a fight escalated.", 
          "Injured": "2", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "23/07/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and four injured inside a parking garage near a local nightclub. Responding officers attempted to stop multiple vehicles leaving the structure, with some carrying shooting victims.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "23/07/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and two wounded in a drive-by-shooting.", 
          "Injured": "2", 
          "State": "South Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "23/07/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in a van after individuals in a pickup truck opened fire in the early morning.", 
          "Injured": "4", 
          "State": "South Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "22/07/2021", 
          "Dead": "1", 
          "Description": "One person was killed and five injured outside a local restaurant in a drive-by shooting.", 
          "Injured": "5", 
          "State": "Texas", 
          "Total": "6"
        }, 
        {
          "Date": "21/07/2021", 
          "Dead": "2", 
          "Description": "Ten minutes after an earlier shooting, three teenagers (two would later die) and two adults were wounded in North Lawndale.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "21/07/2021", 
          "Dead": "1", 
          "Description": "A man was killed and four others wounded at a condo complex after an argument escalated.", 
          "Injured": "4", 
          "State": "Maryland", 
          "Total": "5"
        }, 
        {
          "Date": "21/07/2021", 
          "Dead": "2", 
          "Description": "A 15-year-old and a 16-year-old were killed and three other adults were wounded on a street corner. The 16-year-old died the next day.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "21/07/2021", 
          "Dead": "0", 
          "Description": "Shortly before midnight someone opened fire on a party bus passing by a gas station in Old Town. Seven people were wounded in the bus, and one while pumping gas.", 
          "Injured": "8", 
          "State": "Illinois", 
          "Total": "8"
        }, 
        {
          "Date": "20/07/2021", 
          "Dead": "4", 
          "Description": "Four adults were killed in a robbery after three men broke into their home. The three men were arrested later the next day.", 
          "Injured": "0", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "19/07/2021", 
          "Dead": "0", 
          "Description": "Four men were injured in Homan Square while standing outside at night.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "19/07/2021", 
          "Dead": "0", 
          "Description": "A gunman opened fire at a group of people leaving a bar early in the morning. Six people were wounded.", 
          "Injured": "6", 
          "State": "New Jersey", 
          "Total": "6"
        }, 
        {
          "Date": "18/07/2021", 
          "Dead": "1", 
          "Description": "One person was killed and three wounded in a shooting.", 
          "Injured": "3", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "18/07/2021", 
          "Dead": "1", 
          "Description": "A man was killed and four others wounded in a drive by shooting outside of a convenience store.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "18/07/2021", 
          "Dead": "0", 
          "Description": "Four were wounded in a shooting after an argument.", 
          "Injured": "4", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "18/07/2021", 
          "Dead": "2", 
          "Description": "Two EMTs were injured after a man opened fire on them as they responded to an unrelated medical incident. The man then drove to a nearby structure fire and shot at nearby people, killing a bystander and wounding a firefighter.", 
          "Injured": "4", 
          "State": "Arizona", 
          "Total": "6"
        }, 
        {
          "Date": "18/07/2021", 
          "Dead": "3", 
          "Description": "Responding officers arrived at a motel where a man was threatening to kill others and responding officers. The man shot and killed two adults and wounded two others before being shot and killed by police.", 
          "Injured": "2", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "18/07/2021", 
          "Dead": "1", 
          "Description": "One person died and three were wounded after a shooting outside a nightclub.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "17/07/2021", 
          "Dead": "1", 
          "Description": "A woman was killed and six others were injured in a shooting in Downtown Portland.", 
          "Injured": "6", 
          "State": "Oregon", 
          "Total": "7"
        }, 
        {
          "Date": "17/07/2021", 
          "Dead": "0", 
          "Description": "Five teenage girls aged 12 to 19 years old were wounded while standing outside a party in Austin on the West Side.", 
          "Injured": "6", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "16/07/2021", 
          "Dead": "2", 
          "Description": "Shortly before midnight two men were killed and four others injured in Old Sacramento near the old train tracks.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "16/07/2021", 
          "Dead": "1", 
          "Description": "A six-year-old girl was killed and five adults were injured in a shooting in the nation's capital.", 
          "Injured": "5", 
          "State": "Washington, D.C.", 
          "Total": "6"
        }, 
        {
          "Date": "16/07/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded as passengers in a van taking them from a nightclub.", 
          "Injured": "4", 
          "State": "New Hampshire", 
          "Total": "4"
        }, 
        {
          "Date": "16/07/2021", 
          "Dead": "1", 
          "Description": "One person was killed and three injured at Conestee Park after an argument escalated.", 
          "Injured": "3", 
          "State": "South Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "16/07/2021", 
          "Dead": "1", 
          "Description": "One man was killed and three others injured in Austin shortly before midnight.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "16/07/2021", 
          "Dead": "1", 
          "Description": "An adult was killed and three adults and a fourteen-year-old injured in an evening shooting.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "15/07/2021", 
          "Dead": "0", 
          "Description": "Officers responding to a ShotSpotter alert discovered four people wounded at the Bromley Heath Projects in Mission Hill.", 
          "Injured": "4", 
          "State": "Massachusetts", 
          "Total": "4"
        }, 
        {
          "Date": "15/07/2021", 
          "Dead": "1", 
          "Description": "Officers responding to a 911 call were fired upon by a suspect who barricaded themselves in a home. One officer was killed and three injured.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "15/07/2021", 
          "Dead": "1", 
          "Description": "A man was killed and four others injured after an argument and physical fight between multiple motorcycle clubs escalated.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "5"
        }, 
        {
          "Date": "14/07/2021", 
          "Dead": "0", 
          "Description": "Five adults were wounded outside a food mart in Gresham after three men jumped out of a car and opened fire.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "14/07/2021", 
          "Dead": "0", 
          "Description": "Five people were wounded in West Garfield Park on the West Side, after a man approached them and opened fire.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "14/07/2021", 
          "Dead": "2", 
          "Description": "A man and teenager were killed and two adults wounded in an evening shooting in the Knollwood neighborhood.", 
          "Injured": "2", 
          "State": "Delaware", 
          "Total": "4"
        }, 
        {
          "Date": "13/07/2021", 
          "Dead": "0", 
          "Description": "Four men were wounded in an early morning shooting, three of the four were found in a vehicle.", 
          "Injured": "4", 
          "State": "Indiana", 
          "Total": "4"
        }, 
        {
          "Date": "13/07/2021", 
          "Dead": "1", 
          "Description": "A man was killed and six others wounded at a banquet hall, after a shooter opened fire due to an earlier argument. Attendees fired back and wounded the suspect, who was later arrested.", 
          "Injured": "6", 
          "State": "Michigan", 
          "Total": "7"
        }, 
        {
          "Date": "12/07/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in the early morning at a hotel.", 
          "Injured": "4", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "12/07/2021", 
          "Dead": "0", 
          "Description": "Multiple masked shooters wounded four in Queens after exiting a car and opening fire.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "12/07/2021", 
          "Dead": "2", 
          "Description": "Two men were killed and three injured after a gun fight between two cars in the parking lot of a housing complex.", 
          "Injured": "3", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "12/07/2021", 
          "Dead": "3", 
          "Description": "Three men were killed and one injured after a gunman opened fire at a house party.", 
          "Injured": "1", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "11/07/2021", 
          "Dead": "1", 
          "Description": "A man was killed and five others wounded at an activities complex in the early morning.", 
          "Injured": "5", 
          "State": "Texas", 
          "Total": "6"
        }, 
        {
          "Date": "10/07/2021", 
          "Dead": "0", 
          "Description": "Six men were wounded after two shooters walked up to them and opened fire shortly before midnight in the North Philadelphia neighborhood of  Hunting Park.", 
          "Injured": "6", 
          "State": "Pennsylvania", 
          "Total": "6"
        }, 
        {
          "Date": "10/07/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in Dorchester, neighbors at first believed it was continuing Independence Day celebrations.", 
          "Injured": "4", 
          "State": "Massachusetts", 
          "Total": "4"
        }, 
        {
          "Date": "10/07/2021", 
          "Dead": "1", 
          "Description": "A man was killed and a woman and two children were injured at a gas station in a potential incident of domestic violence.", 
          "Injured": "3", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "08/07/2021", 
          "Dead": "0", 
          "Description": "Four men were wounded by five teenagers who opened fire at the same location they had wounded a woman two days prior. The teenagers were later arrested.", 
          "Injured": "4", 
          "State": "Connecticut", 
          "Total": "4"
        }, 
        {
          "Date": "05/07/2021", 
          "Dead": "0", 
          "Description": "Three adults and a three-year-old were injured while standing outside in a large group after someone opened fire.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "05/07/2021", 
          "Dead": "1", 
          "Description": "A drive-by shooting left one person dead and three others injured at an illegal fireworks show.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "05/07/2021", 
          "Dead": "2", 
          "Description": "A shooting in Washington Park left two dead and four injured, including a 12-year-old girl and a 13-year-old boy.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "05/07/2021", 
          "Dead": "1", 
          "Description": "One person was killed and eleven others injured at an Independence Day block party.", 
          "Injured": "11", 
          "State": "Ohio", 
          "Total": "12"
        }, 
        {
          "Date": "04/07/2021", 
          "Dead": "0", 
          "Description": "An overnight shooting left four injured, two critically.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "04/07/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and three injured in a shooting at a large teen party at a city park.", 
          "Injured": "3", 
          "State": "Ohio", 
          "Total": "5"
        }, 
        {
          "Date": "04/07/2021", 
          "Dead": "0", 
          "Description": "Four adults were wounded in an evening shooting.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "04/07/2021", 
          "Dead": "0", 
          "Description": "Two juveniles and two others were injured on Sunday night.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "04/07/2021", 
          "Dead": "1", 
          "Description": "A group of people were fired upon in a parking lot, leaving one dead and four injured.", 
          "Injured": "4", 
          "State": "Nebraska", 
          "Total": "5"
        }, 
        {
          "Date": "04/07/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in a shooting at a rap concert.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "04/07/2021", 
          "Dead": "0", 
          "Description": "Four adults were wounded at a local club, and all refused to talk with law enforcement about the incident.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "04/07/2021", 
          "Dead": "0", 
          "Description": "Eight people were wounded near a local car wash in the early morning.", 
          "Injured": "8", 
          "State": "Texas", 
          "Total": "8"
        }, 
        {
          "Date": "04/07/2021", 
          "Dead": "0", 
          "Description": "Two juveniles and three adults were wounded in a shooting.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "04/07/2021", 
          "Dead": "0", 
          "Description": "A shooting at an Independence Day gathering in southeast Dallas left at least four people wounded.", 
          "Injured": "5", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "04/07/2021", 
          "Dead": "3", 
          "Description": "A shooting at a neighborhood block party left three people dead and two injured.", 
          "Injured": "2", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "03/07/2021", 
          "Dead": "3", 
          "Description": "Responding officers found three men killed and one injured at a large party in the early morning.", 
          "Injured": "1", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "03/07/2021", 
          "Dead": "0", 
          "Description": "Four adults were wounded in an early morning shooting.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "03/07/2021", 
          "Dead": "1", 
          "Description": "One person was killed and three injured in a shooting at a sports bar.", 
          "Injured": "3", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "03/07/2021", 
          "Dead": "0", 
          "Description": "Shortly before midnight four men were wounded in a drive-by shooting in Gresham.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "02/07/2021", 
          "Dead": "1", 
          "Description": "A man was killed and four others injured after an afternoon shooting in East Mount Airy.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "02/07/2021", 
          "Dead": "0", 
          "Description": "Three teenagers and a six-year-old were injured in an afternoon shooting. A fifteen-year-old was later arrested in connection with the shooting.", 
          "Injured": "4", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "02/07/2021", 
          "Dead": "1", 
          "Description": "A teenager was killed and four adults, including a pregnant woman were injured at an American Legion after a funeral.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "01/07/2021", 
          "Dead": "0", 
          "Description": "Unknown assailants fired into a residence in Englewood, injuring seven people including a baby girl.", 
          "Injured": "7", 
          "State": "Illinois", 
          "Total": "7"
        }, 
        {
          "Date": "01/07/2021", 
          "Dead": "2", 
          "Description": "Two people, including the believed shooter, were killed and four injured in a shooting at a local park.", 
          "Injured": "4", 
          "State": "South Carolina", 
          "Total": "6"
        }, 
        {
          "Date": "01/07/2021", 
          "Dead": "1", 
          "Description": "Responding police officers to shots fired, found one man deceased and an adult and two teenagers injured.", 
          "Injured": "3", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "30/06/2021", 
          "Dead": "0", 
          "Description": "Four teenagers were wounded while walking in Little Village on the West Side in the evening.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "30/06/2021", 
          "Dead": "0", 
          "Description": "A car pulled up to another car waiting to turn and opened fire. An adult, ten-month-old, four and fifteen-year olds were all injured.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "30/06/2021", 
          "Dead": "1", 
          "Description": "A group of people were fired upon, leaving one killed and three injured.", 
          "Injured": "3", 
          "State": "Delaware", 
          "Total": "4"
        }, 
        {
          "Date": "30/06/2021", 
          "Dead": "3", 
          "Description": "Two adults and a six-year-old were killed and a ten-year-old injured in an evening shooting.", 
          "Injured": "1", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "28/06/2021", 
          "Dead": "1", 
          "Description": "A man opened fire into a crowded Walmart parking lot, killing one and injuring three.", 
          "Injured": "3", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "27/06/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three others wounded at a night club in the early morning.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "27/06/2021", 
          "Dead": "1", 
          "Description": "A woman died and ten others were injured after three shooters approached them from an alley and opened fire in Marquette Park.", 
          "Injured": "10", 
          "State": "Illinois", 
          "Total": "11"
        }, 
        {
          "Date": "27/06/2021", 
          "Dead": "1", 
          "Description": "Five adults and a teenager were wounded in a drive-by shooting while standing outside in South Shore. A woman died later at the hospital", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "27/06/2021", 
          "Dead": "3", 
          "Description": "A tenant with a mental disorder killed three and wounded a neighbor in his boarding house.", 
          "Injured": "1", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "27/06/2021", 
          "Dead": "0", 
          "Description": "After an argument escalated at a pool party hosted at an apartment complex, four people were wounded.", 
          "Injured": "4", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "26/06/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three wounded at a pay-per-view event at a nightclub after a fight broke out.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "26/06/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three others wounded after an argument escalated in the morning in West Rogers Park.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "26/06/2021", 
          "Dead": "1", 
          "Description": "An argument escalated at a funeral service after an outside group refused to turn down music in their car. A man was killed and three others injured.", 
          "Injured": "3", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "25/06/2021", 
          "Dead": "0", 
          "Description": "Two children and two adults were shot in an SUV.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "25/06/2021", 
          "Dead": "0", 
          "Description": "Shortly before midnight, two men and two women were injured in a drive-by shooting in Park Manor, in which the shooter drove a moped.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "25/06/2021", 
          "Dead": "0", 
          "Description": "Five people were shot in an early morning drive-by at a graduation party in the Bronx.", 
          "Injured": "5", 
          "State": "New York", 
          "Total": "5"
        }, 
        {
          "Date": "24/06/2021", 
          "Dead": "1", 
          "Description": "Two shooters opened fire at a local American Legion Post, which was hosting a teen party. All five injured were teenagers.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "23/06/2021", 
          "Dead": "0", 
          "Description": "Two adults and two children were wounded at the local JFK Park, after a man opened fire.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "23/06/2021", 
          "Dead": "0", 
          "Description": "Four people were shot while standing outside when two shooters opened fire in South Austin.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "23/06/2021", 
          "Dead": "2", 
          "Description": "Two men were found dead and two more injured by responding police officers.", 
          "Injured": "2", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "23/06/2021", 
          "Dead": "0", 
          "Description": "Four motorcycle club members were wounded in Englewood.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "21/06/2021", 
          "Dead": "0", 
          "Description": "Minnesota Vikings defensive tackle Jaylen Twyman was shot along with three others while visiting his aunt.", 
          "Injured": "4", 
          "State": "Washington, D.C.", 
          "Total": "4"
        }, 
        {
          "Date": "21/06/2021", 
          "Dead": "3", 
          "Description": "Three people were killed and four injured in a shooting outside a convenience store.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "7"
        }, 
        {
          "Date": "20/06/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three wounded while leaving Shockoe Bottom after someone opened fire on a group of people.", 
          "Injured": "3", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "20/06/2021", 
          "Dead": "1", 
          "Description": "A woman was killed and three others injured shortly after midnight.", 
          "Injured": "3", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "20/06/2021", 
          "Dead": "1", 
          "Description": "A man was killed and four others wounded during an early morning Juneteenth celebration at a local strip mall.", 
          "Injured": "4", 
          "State": "Colorado", 
          "Total": "5"
        }, 
        {
          "Date": "20/06/2021", 
          "Dead": "1", 
          "Description": "A woman was killed and ten others injured at an annual community Fathers Day celebration. The shooter was shortly arrested.", 
          "Injured": "10", 
          "State": "Florida", 
          "Total": "11"
        }, 
        {
          "Date": "20/06/2021", 
          "Dead": "3", 
          "Description": "Celebrators of a Marimba; a Guatemalan music and dance party, were shot by multiple shooters who fled in vehicles", 
          "Injured": "5", 
          "State": "California", 
          "Total": "8"
        }, 
        {
          "Date": "20/06/2021", 
          "Dead": "0", 
          "Description": "Eight people were wounded in a shootout between two groups after an argument escalated. Each group had rented a party space, and two of the injured were children.", 
          "Injured": "8", 
          "State": "Texas", 
          "Total": "8"
        }, 
        {
          "Date": "20/06/2021", 
          "Dead": "1", 
          "Description": "A man was killed and four others were wounded in an early morning shooting at a local brewing companies parking lot.", 
          "Injured": "4", 
          "State": "Indiana", 
          "Total": "5"
        }, 
        {
          "Date": "20/06/2021", 
          "Dead": "1", 
          "Description": "One man was killed and three others injured while standing on a porch after a bicyclist opened fire.", 
          "Injured": "3", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "19/06/2021", 
          "Dead": "1", 
          "Description": "A man was killed and five others injured at Lake Merritt near the city's Juneteenth celebration.", 
          "Injured": "6", 
          "State": "California", 
          "Total": "7"
        }, 
        {
          "Date": "19/06/2021", 
          "Dead": "1", 
          "Description": "Four people wounded and one killed in a shooting.", 
          "Injured": "4", 
          "State": "Alaska", 
          "Total": "5"
        }, 
        {
          "Date": "19/06/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and four injured in a parking lot after an argument escalated between unknown people and partygoers leaving a concert.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "6"
        }, 
        {
          "Date": "19/06/2021", 
          "Dead": "0", 
          "Description": "Responding officers found two wounded men in an early morning shooting. Shortly after two more were identified at a local hospital.", 
          "Injured": "4", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "18/06/2021", 
          "Dead": "0", 
          "Description": "Shortly before midnight five people were wounded in Dinkytown.", 
          "Injured": "5", 
          "State": "Minnesota", 
          "Total": "5"
        }, 
        {
          "Date": "17/06/2021", 
          "Dead": "2", 
          "Description": "A shooting killed two and wounded another two.", 
          "Injured": "2", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "17/06/2021", 
          "Dead": "0", 
          "Description": "Four men were wounded in a shooting.", 
          "Injured": "4", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "17/06/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in a shooting.", 
          "Injured": "4", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "17/06/2021", 
          "Dead": "1", 
          "Description": "One person was killed and twelve others injured in eight drive-by shootings in the West Valley area. A male suspect was taken into custody. Of the injuries, three were wounded by gunfire, while nine others sustained indirect injuries, such as shrapnel from broken glass due to a car crash.", 
          "Injured": "12", 
          "State": "Arizona", 
          "Total": "13"
        }, 
        {
          "Date": "16/06/2021", 
          "Dead": "1", 
          "Description": "Six people were shot, one fatally, in West Baltimore.", 
          "Injured": "5", 
          "State": "Maryland", 
          "Total": "6"
        }, 
        {
          "Date": "15/06/2021", 
          "Dead": "0", 
          "Description": "Five people were wounded at West Garfield Park.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "15/06/2021", 
          "Dead": "5", 
          "Description": "Four women were killed and three others injured after gunfire erupted in a South Side residence. Another woman died in a hospital.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "8"
        }, 
        {
          "Date": "15/06/2021", 
          "Dead": "2", 
          "Description": "A shooting at a Mueller Water Products factory killed two and injured two others.", 
          "Injured": "2", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "14/06/2021", 
          "Dead": "1", 
          "Description": "A drive-by shooting on Interstate 95 killed one and injured three.", 
          "Injured": "3", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "14/06/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and two others injured at a city park.", 
          "Injured": "2", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "13/06/2021", 
          "Dead": "1", 
          "Description": "An altercation resulted in a shooting that killed one and injured five others at a racetrack.", 
          "Injured": "5", 
          "State": "Ohio", 
          "Total": "6"
        }, 
        {
          "Date": "13/06/2021", 
          "Dead": "1", 
          "Description": "One man was killed and three other people were injured after a shooting in a Newburg neighborhood.", 
          "Injured": "3", 
          "State": "Kentucky", 
          "Total": "4"
        }, 
        {
          "Date": "12/06/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in a drive-by. Two of the victims were children caught in crossfire.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "12/06/2021", 
          "Dead": "1", 
          "Description": "A shooting in Chatham on the South Side left one dead and nine injured.", 
          "Injured": "9", 
          "State": "Illinois", 
          "Total": "10"
        }, 
        {
          "Date": "12/06/2021", 
          "Dead": "3", 
          "Description": "Three men were killed while three women and another man were injured in the Kinsman neighborhood.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "7"
        }, 
        {
          "Date": "12/06/2021", 
          "Dead": "1", 
          "Description": "At least 14 people were shot in Downtown Austin in the early morning hours, leaving one dead. A suspect has been arrested while police are still looking for another.", 
          "Injured": "13", 
          "State": "Texas", 
          "Total": "14"
        }, 
        {
          "Date": "11/06/2021", 
          "Dead": "0", 
          "Description": "A shooting left five people injured, including a four-year-old girl.", 
          "Injured": "5", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "11/06/2021", 
          "Dead": "1", 
          "Description": "A shooting left one man dead and four others injured.", 
          "Injured": "3", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "11/06/2021", 
          "Dead": "1", 
          "Description": "One person was killed and seven others wounded in a shooting at a housing project.", 
          "Injured": "7", 
          "State": "Georgia", 
          "Total": "8"
        }, 
        {
          "Date": "11/06/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and two others hurt in a shooting in White Center near West Seattle.", 
          "Injured": "2", 
          "State": "Washington", 
          "Total": "4"
        }, 
        {
          "Date": "10/06/2021", 
          "Dead": "1", 
          "Description": "A drive by shooting on the west side left one dead and three injured, including a six-year-old boy.", 
          "Injured": "3", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "10/06/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in a drive by shooting that was potential gang activity.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "08/06/2021", 
          "Dead": "1", 
          "Description": "Four people were wounded and one killed in an afternoon shooting. The suspect is known to the victims.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "5"
        }, 
        {
          "Date": "08/06/2021", 
          "Dead": "1", 
          "Description": "Three teenagers were wounded and an adult woman was killed after their cars were boxed in by other vehicles and fired upon. A fourth teenager was injured in a car accident as one of the cars attempted to flee the gunfire.", 
          "Injured": "3", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "08/06/2021", 
          "Dead": "0", 
          "Description": "Four people were shot, and a fifth wounded by bullet fragments in the early morning at a bar. The shooting was believed to be in retaliation of three men being denied entry into the bar.", 
          "Injured": "5", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "07/06/2021", 
          "Dead": "0", 
          "Description": "Six people were wounded in an early morning shooting while standing on a porch.", 
          "Injured": "6", 
          "State": "Ohio", 
          "Total": "6"
        }, 
        {
          "Date": "07/06/2021", 
          "Dead": "3", 
          "Description": "A man killed his girlfriend, and another man, and injured three teenagers in a Florida home. The man committed suicide upon police arrival.", 
          "Injured": "3", 
          "State": "Florida", 
          "Total": "6"
        }, 
        {
          "Date": "06/06/2021", 
          "Dead": "3", 
          "Description": "Three people were killed and six more injured at a graduation party inside of a restaurant/hookah lounge.", 
          "Injured": "6", 
          "State": "Florida", 
          "Total": "9"
        }, 
        {
          "Date": "06/06/2021", 
          "Dead": "0", 
          "Description": "Three shooters opened fire on a group of teenagers near Kiener Plaza, injuring four.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "06/06/2021", 
          "Dead": "0", 
          "Description": "Four people were injured by gunfire at a party in a trailer park.", 
          "Injured": "4", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "06/06/2021", 
          "Dead": "4", 
          "Description": "Four people were shot dead at a home in southeast Portland.", 
          "Injured": "0", 
          "State": "Oregon", 
          "Total": "4"
        }, 
        {
          "Date": "06/06/2021", 
          "Dead": "0", 
          "Description": "Five men were wounded in the Fremont neighborhood in a drive-by shooting.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "06/06/2021", 
          "Dead": "1", 
          "Description": "One person was killed and four more injured in a drive-by shooting.", 
          "Injured": "4", 
          "State": "Utah", 
          "Total": "5"
        }, 
        {
          "Date": "06/06/2021", 
          "Dead": "0", 
          "Description": "Two shooters opened fire on a group in Chatham, injuring eight.", 
          "Injured": "8", 
          "State": "Illinois", 
          "Total": "8"
        }, 
        {
          "Date": "05/06/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and two more injured while exiting a Boston Market earlier in the morning in northeastern Indianapolis.", 
          "Injured": "2", 
          "State": "Indiana", 
          "Total": "4"
        }, 
        {
          "Date": "05/06/2021", 
          "Dead": "0", 
          "Description": "Eight people were wounded in an evening shooting while standing outside a vacant hotel.", 
          "Injured": "8", 
          "State": "Louisiana", 
          "Total": "8"
        }, 
        {
          "Date": "04/06/2021", 
          "Dead": "1", 
          "Description": "One person was killed and three injured.", 
          "Injured": "3", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "02/06/2021", 
          "Dead": "1", 
          "Description": "A shooter opened fire on officers during a domestic dispute in an apartment, injuring three. The shooter was found dead from a self-inflicted gunshot wound the next day.", 
          "Injured": "3", 
          "State": "Delaware", 
          "Total": "4"
        }, 
        {
          "Date": "02/06/2021", 
          "Dead": "0", 
          "Description": "Four people were shot and one other was seriously injured after being run over by a car outside a bar.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "02/06/2021", 
          "Dead": "0", 
          "Description": "Police responding to a fight at a local park were then notified of gunfire. Four people were wounded and one of the shooters was arrested after a car chase.", 
          "Injured": "4", 
          "State": "Arkansas", 
          "Total": "4"
        }, 
        {
          "Date": "02/06/2021", 
          "Dead": "0", 
          "Description": "Two people are in custody after six people were injured in an overnight shooting at a wake.", 
          "Injured": "6", 
          "State": "Ohio", 
          "Total": "6"
        }, 
        {
          "Date": "31/05/2021", 
          "Dead": "0", 
          "Description": "Four men were wounded in a drive-by shooting.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "31/05/2021", 
          "Dead": "1", 
          "Description": "One person was killed and four others, including two teenagers, were injured in a shooting during a block party.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "5"
        }, 
        {
          "Date": "31/05/2021", 
          "Dead": "0", 
          "Description": "Five people were shot in the Bushwick area of Brooklyn.", 
          "Injured": "5", 
          "State": "New York", 
          "Total": "5"
        }, 
        {
          "Date": "30/05/2021", 
          "Dead": "0", 
          "Description": "Four teens injured in drive-by.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "30/05/2021", 
          "Dead": "1", 
          "Description": "One person was killed and four others were injured at a residence.", 
          "Injured": "4", 
          "State": "Alabama", 
          "Total": "5"
        }, 
        {
          "Date": "30/05/2021", 
          "Dead": "3", 
          "Description": "2021 Hialeah shooting: Three shooters stepped out of a white SUV, using assault rifles and handguns, and opened fire on a billiards club. Some of the gunmen are still at large.", 
          "Injured": "20", 
          "State": "Florida", 
          "Total": "23"
        }, 
        {
          "Date": "29/05/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and two others injured in a drive-by shooting, after leaving a memorial service at a North Side bar.", 
          "Injured": "2", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "28/05/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three other people injured shortly before midnight outside a club.", 
          "Injured": "3", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "28/05/2021", 
          "Dead": "1", 
          "Description": "Shortly before midnight, police responded to a ShotSpotter alert in Wynwood where they found one person killed and six injured.", 
          "Injured": "6", 
          "State": "Florida", 
          "Total": "7"
        }, 
        {
          "Date": "27/05/2021", 
          "Dead": "0", 
          "Description": "A drive-by shooting left five people injured.", 
          "Injured": "5", 
          "State": "North Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "26/05/2021", 
          "Dead": "10", 
          "Description": "2021 San Jose shooting: An employee opened fire at a Santa Clara Valley Transportation Authority (VTA) control center in San Jose, California, killing nine others before committing suicide.", 
          "Injured": "0", 
          "State": "California", 
          "Total": "10"
        }, 
        {
          "Date": "26/05/2021", 
          "Dead": "0", 
          "Description": "Three teenagers and an adult were wounded in an apartment in the Englewood neighborhood on the South Side. One of the teenagers was pronounced dead before being resuscitated by doctors.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "24/05/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and two others were injured in a shooting while playing basketball.", 
          "Injured": "2", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "24/05/2021", 
          "Dead": "4", 
          "Description": "At least four people were killed at an apartment complex.", 
          "Injured": "0", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "24/05/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded at a basketball court near a local marina when someone opened fire.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "23/05/2021", 
          "Dead": "0", 
          "Description": "Four men were wounded outside a home in East Garfield Park after a man opened fire in the afternoon.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "23/05/2021", 
          "Dead": "0", 
          "Description": "A shooting at large gathering left five people injured.", 
          "Injured": "5", 
          "State": "New Jersey", 
          "Total": "5"
        }, 
        {
          "Date": "23/05/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in an overnight shooting.", 
          "Injured": "4", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "23/05/2021", 
          "Dead": "3", 
          "Description": "Three people were killed and eight injured at a local bar in the early morning.", 
          "Injured": "8", 
          "State": "Ohio", 
          "Total": "11"
        }, 
        {
          "Date": "23/05/2021", 
          "Dead": "0", 
          "Description": "An overnight shooting at a private party left four people injured.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "22/05/2021", 
          "Dead": "0", 
          "Description": "Four people were injured after a shooting at a sports complex.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "22/05/2021", 
          "Dead": "1", 
          "Description": "A 16-year-old was killed and at least five other teenagers were wounded in a shooting at Bicentennial Park.", 
          "Injured": "5", 
          "State": "Ohio", 
          "Total": "6"
        }, 
        {
          "Date": "22/05/2021", 
          "Dead": "2", 
          "Description": "The incident happened in the early morning near a downtown nightclub, after two men opened fire on each other during an argument.", 
          "Injured": "8", 
          "State": "Minnesota", 
          "Total": "10"
        }, 
        {
          "Date": "22/05/2021", 
          "Dead": "1", 
          "Description": "A woman was killed and four others wounded shortly after midnight. An argument had escalated in the parking lot and gunfire struck people inside their apartments.", 
          "Injured": "4", 
          "State": "Indiana", 
          "Total": "5"
        }, 
        {
          "Date": "22/05/2021", 
          "Dead": "1", 
          "Description": "A teenager was killed and fourteen injured after a shooting at an unauthorized concert.", 
          "Injured": "14", 
          "State": "South Carolina", 
          "Total": "15"
        }, 
        {
          "Date": "22/05/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and twelve others injured at a large house party in a targeted attack.", 
          "Injured": "12", 
          "State": "New Jersey", 
          "Total": "14"
        }, 
        {
          "Date": "21/05/2021", 
          "Dead": "1", 
          "Description": "One person was killed and five others were injured. The injured walked themselves to the hospital.", 
          "Injured": "5", 
          "State": "New York", 
          "Total": "6"
        }, 
        {
          "Date": "21/05/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and four injured in a late night shooting.", 
          "Injured": "4", 
          "State": "New Jersey", 
          "Total": "6"
        }, 
        {
          "Date": "20/05/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded after a fight escalated into a shooting.", 
          "Injured": "4", 
          "State": "Indiana", 
          "Total": "4"
        }, 
        {
          "Date": "18/05/2021", 
          "Dead": "2", 
          "Description": "Seven people were shot on a party bus celebrating a birthday, two fatally. Police have offered a $40,000 reward for information about the suspect(s).", 
          "Injured": "5", 
          "State": "California", 
          "Total": "7"
        }, 
        {
          "Date": "18/05/2021", 
          "Dead": "1", 
          "Description": "A pregnant bystander was shot and killed when a fight led to gunfire on a public street and four others were wounded.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "17/05/2021", 
          "Dead": "0", 
          "Description": "Four people were shot on Swan Island in an incident that is described by law enforcement as gang-related.", 
          "Injured": "4", 
          "State": "Oregon", 
          "Total": "4"
        }, 
        {
          "Date": "16/05/2021", 
          "Dead": "1", 
          "Description": "Responding officers to a fight and shooting call found a man dead and three others wounded at a nightclub.", 
          "Injured": "3", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "16/05/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded leaving the Trap Music Museum in an early morning drive-by shooting.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "16/05/2021", 
          "Dead": "0", 
          "Description": "Five people were shot at a party at an apartment complex.", 
          "Injured": "5", 
          "State": "Michigan", 
          "Total": "5"
        }, 
        {
          "Date": "16/05/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in an early morning shooting at a Waffle House.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "16/05/2021", 
          "Dead": "1", 
          "Description": "A suspect in a double homicide opened fire on a SWAT team attempting to carry out a search warrant. The suspect was killed and four officers wounded.", 
          "Injured": "4", 
          "State": "Alabama", 
          "Total": "5"
        }, 
        {
          "Date": "16/05/2021", 
          "Dead": "1", 
          "Description": "A man was killed and five injured in a drive-by shooting while standing outside a gas station.", 
          "Injured": "5", 
          "State": "Georgia", 
          "Total": "6"
        }, 
        {
          "Date": "15/05/2021", 
          "Dead": "1", 
          "Description": "One person was killed and four other were injured in shooting in The South Bronx.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "5"
        }, 
        {
          "Date": "15/05/2021", 
          "Dead": "1", 
          "Description": "A man died and two women and another man were wounded in an afternoon shooting.", 
          "Injured": "3", 
          "State": "Washington, D.C.", 
          "Total": "4"
        }, 
        {
          "Date": "15/05/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and three wounded at an early morning gathering in the Auburn Gresham neighborhood.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "14/05/2021", 
          "Dead": "0", 
          "Description": "Three men and a woman were wounded in an evening shooting in West Philadelphia.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "13/05/2021", 
          "Dead": "0", 
          "Description": "Four men found in two separate locations were wounded after a man left a vehicle and opened fire in Southeast Washington, DC.", 
          "Injured": "4", 
          "State": "Washington, D.C.", 
          "Total": "4"
        }, 
        {
          "Date": "13/05/2021", 
          "Dead": "2", 
          "Description": "Two women died and two others were injured in an apartment shooting.", 
          "Injured": "2", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "13/05/2021", 
          "Dead": "0", 
          "Description": "Nine people were shot in Washington Park. According to police, the shooting is the largest in terms of injured in Providence's history.", 
          "Injured": "9", 
          "State": "Rhode Island", 
          "Total": "9"
        }, 
        {
          "Date": "12/05/2021", 
          "Dead": "1", 
          "Description": "One person died and three were injured after a shooting at an apartment complex.", 
          "Injured": "3", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "11/05/2021", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting at a housing complex in West Baltimore.", 
          "Injured": "4", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "10/05/2021", 
          "Dead": "0", 
          "Description": "Seven people were injured in a shooting at a package store.", 
          "Injured": "7", 
          "State": "Alabama", 
          "Total": "7"
        }, 
        {
          "Date": "09/05/2021", 
          "Dead": "7", 
          "Description": "2021 Colorado Springs shooting: Six people were killed when a man opened fire at a birthday party in a trailer park. The shooter (Teodoro Macias) took his own life shortly afterwards.", 
          "Injured": "0", 
          "State": "Colorado", 
          "Total": "7"
        }, 
        {
          "Date": "09/05/2021", 
          "Dead": "1", 
          "Description": "Shortly after midnight a fight broke out at Hyatt Regency Phoenix in Downtown Phoenix with a man was killed and seven others wounded.", 
          "Injured": "7", 
          "State": "Arizona", 
          "Total": "8"
        }, 
        {
          "Date": "08/05/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in the parking lot of a night club during the early morning. Responding officers had to break up multiple fights upon arriving.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "08/05/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in the early morning while standing outside for a gathering near Lake Merritt.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "08/05/2021", 
          "Dead": "0", 
          "Description": "Shortly after midnight four people were wounded in an alley in the city's Westside.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "08/05/2021", 
          "Dead": "4", 
          "Description": "A man killed three people and injured a fourth near a townhouse before setting it on fire. Responding officers shot and killed him. The man was reportedly being watched by the FBI before the incident.", 
          "Injured": "1", 
          "State": "Maryland", 
          "Total": "5"
        }, 
        {
          "Date": "07/05/2021", 
          "Dead": "2", 
          "Description": "A fight broke out at a large outdoor party resulting in two men being killed and three others wounded.", 
          "Injured": "3", 
          "State": "Missouri", 
          "Total": "5"
        }, 
        {
          "Date": "06/05/2021", 
          "Dead": "0", 
          "Description": "Five people were wounded in a drive-by shooting during the evening. Thirty minutes prior another two had been injured in a separate drive-by shooting.", 
          "Injured": "5", 
          "State": "New Jersey", 
          "Total": "5"
        }, 
        {
          "Date": "05/05/2021", 
          "Dead": "0", 
          "Description": "Four people were shot while sitting on a porch in the South Shore neighborhood.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "03/05/2021", 
          "Dead": "1", 
          "Description": "A man died and four others were wounded after a shooting at a house party.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "5"
        }, 
        {
          "Date": "02/05/2021", 
          "Dead": "0", 
          "Description": "Three men and one woman were injured in an afternoon shooting after a man entered a restaurant and opened fire.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "02/05/2021", 
          "Dead": "1", 
          "Description": "One person died and three others were injured after a shooting in Frankford.", 
          "Injured": "3", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "02/05/2021", 
          "Dead": "1", 
          "Description": "One person was killed, and three others injured at Carroll Park.", 
          "Injured": "3", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "02/05/2021", 
          "Dead": "0", 
          "Description": "Two men and three women were wounded after a drive-by shooting on the West Side.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "02/05/2021", 
          "Dead": "0", 
          "Description": "A shooting at a house party left four people injured.", 
          "Injured": "4", 
          "State": "Minnesota", 
          "Total": "4"
        }, 
        {
          "Date": "01/05/2021", 
          "Dead": "1", 
          "Description": "A shooting left one person dead and three injured at the Brown Sugar Festival.", 
          "Injured": "3", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "01/05/2021", 
          "Dead": "0", 
          "Description": "Five people were shot outside the Clubhouse Lounge.", 
          "Injured": "5", 
          "State": "Massachusetts", 
          "Total": "5"
        }, 
        {
          "Date": "01/05/2021", 
          "Dead": "3", 
          "Description": "At a casino on Oneida land, a man shot and killed 2 people, and seriously wounded another, before being shot dead by responding police officers.", 
          "Injured": "1", 
          "State": "Wisconsin", 
          "Total": "4"
        }, 
        {
          "Date": "01/05/2021", 
          "Dead": "1", 
          "Description": "A shooting left at least one dead and four more injured at an outdoor gathering.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "5"
        }, 
        {
          "Date": "01/05/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and four more were injured in a shooting.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "6"
        }, 
        {
          "Date": "01/05/2021", 
          "Dead": "1", 
          "Description": "A teenage girl and three others were wounded in a shooting.", 
          "Injured": "3", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "01/05/2021", 
          "Dead": "0", 
          "Description": "Two men and two women were shot and injured.", 
          "Injured": "4", 
          "State": "Delaware", 
          "Total": "4"
        }, 
        {
          "Date": "29/04/2021", 
          "Dead": "1", 
          "Description": "One person died and four other people were injured after a shooting at a southwest Atlanta home in a drive-by shooting.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "5"
        }, 
        {
          "Date": "28/04/2021", 
          "Dead": "0", 
          "Description": "Five people were injured during a shooting at a Miami home.", 
          "Injured": "5", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "28/04/2021", 
          "Dead": "5", 
          "Description": "Two deputies were killed and three other people including a suspected gunman were found dead after a standoff.", 
          "Injured": "0", 
          "State": "North Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "27/04/2021", 
          "Dead": "1", 
          "Description": "A shooting left at least one person dead and four more injured.", 
          "Injured": "4", 
          "State": "Alabama", 
          "Total": "5"
        }, 
        {
          "Date": "27/04/2021", 
          "Dead": "2", 
          "Description": "A three-month-old and her mother were killed after being caught in the crossfire between two groups. Three others are recovering after being shot.", 
          "Injured": "3", 
          "State": "Virginia", 
          "Total": "5"
        }, 
        {
          "Date": "26/04/2021", 
          "Dead": "0", 
          "Description": "Seven people were shot during a vigil for a shooting victim.", 
          "Injured": "7", 
          "State": "Oregon", 
          "Total": "7"
        }, 
        {
          "Date": "25/04/2021", 
          "Dead": "0", 
          "Description": "A shooting at a Houma nightclub left five people injured.", 
          "Injured": "5", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "25/04/2021", 
          "Dead": "0", 
          "Description": "An overnight shooting left four people injured at an outdoor party.", 
          "Injured": "4", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "25/04/2021", 
          "Dead": "1", 
          "Description": "A drive-by shooting left one person dead and three others injured at Cheatham Park.", 
          "Injured": "3", 
          "State": "Arkansas", 
          "Total": "4"
        }, 
        {
          "Date": "25/04/2021", 
          "Dead": "1", 
          "Description": "A man is dead and three more are injured after a quadruple shooting in the city's historic jazz district.", 
          "Injured": "3", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "25/04/2021", 
          "Dead": "0", 
          "Description": "A shooting that occurred at a local night club left four people injured.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "24/04/2021", 
          "Dead": "0", 
          "Description": "Five people were wounded in a shooting on Bourbon Street.", 
          "Injured": "5", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "22/04/2021", 
          "Dead": "1", 
          "Description": "A man was arrested after two overnight shootings in downtown San Diego left one person dead and four others injured.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "19/04/2021", 
          "Dead": "2", 
          "Description": "Four people were shot, two fatally, at a housing complex.", 
          "Injured": "2", 
          "State": "United States Virgin Islands", 
          "Total": "4"
        }, 
        {
          "Date": "19/04/2021", 
          "Dead": "2", 
          "Description": "Five people were shot, two fatally, in Independence Heights.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "19/04/2021", 
          "Dead": "0", 
          "Description": "Five people were wounded, one critically, at an apartment complex in southwest Atlanta.", 
          "Injured": "5", 
          "State": "Georgia", 
          "Total": "5"
        }, 
        {
          "Date": "18/04/2021", 
          "Dead": "1", 
          "Description": "A shooting over the weekend left four people injured, including juveniles, and one woman dead.", 
          "Injured": "4", 
          "State": "Alabama", 
          "Total": "5"
        }, 
        {
          "Date": "18/04/2021", 
          "Dead": "0", 
          "Description": "Five victims have shown up at a Shreveport hospital in connection with a shooting on Hearne Avenue.", 
          "Injured": "5", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "18/04/2021", 
          "Dead": "1", 
          "Description": "Police were investigating a shooting that wounded five, as well as a fatal car crash nearby, when a man drove through the crime scene and later fired at officers. Officers then fired back, killing the man. It is not known if this man was connected to the earlier shooting.", 
          "Injured": "5", 
          "State": "Michigan", 
          "Total": "6"
        }, 
        {
          "Date": "18/04/2021", 
          "Dead": "3", 
          "Description": "Three people were killed and two injured after a shooting at a tavern.", 
          "Injured": "2", 
          "State": "Wisconsin", 
          "Total": "5"
        }, 
        {
          "Date": "17/04/2021", 
          "Dead": "0", 
          "Description": "Nine people were shot and injured during a 12-year old's birthday party.", 
          "Injured": "9", 
          "State": "Louisiana", 
          "Total": "9"
        }, 
        {
          "Date": "17/04/2021", 
          "Dead": "1", 
          "Description": "A woman was killed and five were wounded after a shooting at a vigil for a homicide victim.", 
          "Injured": "5", 
          "State": "Ohio", 
          "Total": "6"
        }, 
        {
          "Date": "16/04/2021", 
          "Dead": "0", 
          "Description": "Four people were shot at a vigil on the East Side.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "15/04/2021", 
          "Dead": "9", 
          "Description": "Indianapolis FedEx shooting: A shooting occurred outside a FedEx facility near Indianapolis International Airport. Nine people were reported dead, including the shooter, who committed suicide. The shooter has been identified as 19-year old Brandon Scott Hole, a former employee of the FedEx facility.", 
          "Injured": "7", 
          "State": "Indiana", 
          "Total": "16"
        }, 
        {
          "Date": "15/04/2021", 
          "Dead": "0", 
          "Description": "Three men and a teenage girl were wounded in Northeast DC.", 
          "Injured": "4", 
          "State": "Washington, D.C.", 
          "Total": "4"
        }, 
        {
          "Date": "15/04/2021", 
          "Dead": "0", 
          "Description": "Five people were shot outside an apartment complex. Police say there were four shooters.", 
          "Injured": "5", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "15/04/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in Humboldt Park.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "13/04/2021", 
          "Dead": "0", 
          "Description": "Four men were shot by at least two people while playing a dice game in East Baltimore.", 
          "Injured": "4", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "12/04/2021", 
          "Dead": "1", 
          "Description": "Four people were shot, one fatally, on the I-290. In addition, a fifth person was hit by a car.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "12/04/2021", 
          "Dead": "1", 
          "Description": "A three-year-old girl was shot and killed; a two-year-old girl and two adult males were shot and injured in the Cumberland View apartments of the North Nashville neighborhood.", 
          "Injured": "3", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "12/04/2021", 
          "Dead": "1", 
          "Description": "During a vehicle pursuit, three police officers were shot and one of the occupants of the suspect vehicle was killed by police.", 
          "Injured": "3", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "11/04/2021", 
          "Dead": "1", 
          "Description": "One man was killed and three others wounded at an Airbnb.", 
          "Injured": "3", 
          "State": "Kansas", 
          "Total": "4"
        }, 
        {
          "Date": "11/04/2021", 
          "Dead": "0", 
          "Description": "Five people were shot in a parking lot.", 
          "Injured": "5", 
          "State": "Washington", 
          "Total": "5"
        }, 
        {
          "Date": "10/04/2021", 
          "Dead": "1", 
          "Description": "A man shot several people at a convenience store. Police say the man knew one of the victims, but the motive is unclear.", 
          "Injured": "3", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "10/04/2021", 
          "Dead": "1", 
          "Description": "Five people were shot at an auto repair shop.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "5"
        }, 
        {
          "Date": "10/04/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in a shooting.", 
          "Injured": "4", 
          "State": "Connecticut", 
          "Total": "4"
        }, 
        {
          "Date": "10/04/2021", 
          "Dead": "0", 
          "Description": "A shooting at an Allendale apartment complex near Grand Valley State University injured four people, leaving one critically injured.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "09/04/2021", 
          "Dead": "1", 
          "Description": "Six people were shot, one fatally, during a shootout between two vehicles. Police say the shooting may have been gang related. One of the wounded was in a non-related vehicle, and another was in his home.", 
          "Injured": "5", 
          "State": "Texas", 
          "Total": "6"
        }, 
        {
          "Date": "08/04/2021", 
          "Dead": "1", 
          "Description": "A shooting at a cabinet manufacturing store left one person dead, four in critical condition, and one in stable condition. One of the injured is a Texas State Trooper. The suspected shooter is now in custody.", 
          "Injured": "5", 
          "State": "Texas", 
          "Total": "6"
        }, 
        {
          "Date": "07/04/2021", 
          "Dead": "2", 
          "Description": "Four people were shot at a Northside gas station, two of them fatally.", 
          "Injured": "2", 
          "State": "Wisconsin", 
          "Total": "4"
        }, 
        {
          "Date": "07/04/2021", 
          "Dead": "7", 
          "Description": "2021 Rock Hill shooting: Six people, including two children, were killed in a mass shooting at a Rock Hill home. The perpetrator, a former professional NFL player was found dead by suicide in a nearby home.", 
          "Injured": "0", 
          "State": "South Carolina", 
          "Total": "7"
        }, 
        {
          "Date": "06/04/2021", 
          "Dead": "1", 
          "Description": "Four people were shot in the Cornerstone Village neighborhood.", 
          "Injured": "3", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "06/04/2021", 
          "Dead": "4", 
          "Description": "A man killed the mother of his child and two of her daughters, then later killed himself at the New York City Housing Authority's Van Dyke Houses Brownsville neighborhood of Brooklyn.", 
          "Injured": "0", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "05/04/2021", 
          "Dead": "0", 
          "Description": "Seven people were injured in a shooting in West Englewood.", 
          "Injured": "7", 
          "State": "Illinois", 
          "Total": "7"
        }, 
        {
          "Date": "05/04/2021", 
          "Dead": "0", 
          "Description": "Five men were injured in a shooting.", 
          "Injured": "5", 
          "State": "Maryland", 
          "Total": "5"
        }, 
        {
          "Date": "05/04/2021", 
          "Dead": "6", 
          "Description": "Two brothers are suspected to have made a suicide pact before they shot and killed four family members and then fatally shot themselves in a suburban home.", 
          "Injured": "0", 
          "State": "Texas", 
          "Total": "6"
        }, 
        {
          "Date": "04/04/2021", 
          "Dead": "0", 
          "Description": "Two men were arrested for a shooting at a bar that wounded six people.", 
          "Injured": "6", 
          "State": "Louisiana", 
          "Total": "6"
        }, 
        {
          "Date": "04/04/2021", 
          "Dead": "1", 
          "Description": "A woman was killed at a park, and six others, including a 5-year-old boy, were wounded.", 
          "Injured": "6", 
          "State": "Alabama", 
          "Total": "7"
        }, 
        {
          "Date": "04/04/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in a drive-by shooting.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "03/04/2021", 
          "Dead": "0", 
          "Description": "Two people were arrested after a shooting injured five people.", 
          "Injured": "5", 
          "State": "Alabama", 
          "Total": "5"
        }, 
        {
          "Date": "03/04/2021", 
          "Dead": "0", 
          "Description": "Seven were wounded after a nightclub shooting.", 
          "Injured": "7", 
          "State": "Florida", 
          "Total": "7"
        }, 
        {
          "Date": "03/04/2021", 
          "Dead": "3", 
          "Description": "Seven people were shot, three fatally, during a house party.", 
          "Injured": "4", 
          "State": "North Carolina", 
          "Total": "7"
        }, 
        {
          "Date": "31/03/2021", 
          "Dead": "4", 
          "Description": "2021 Orange, California office shooting: Six people were shot. Four people, including a child, were killed and two hospitalized.", 
          "Injured": "2", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "31/03/2021", 
          "Dead": "2", 
          "Description": "Five people were shot in the Congress Heights neighborhood. Two of the victims were killed and three others were injured.", 
          "Injured": "3", 
          "State": "Washington, D.C.", 
          "Total": "5"
        }, 
        {
          "Date": "30/03/2021", 
          "Dead": "0", 
          "Description": "Several people were wounded in the Acres Homes area in separate shootings. Houston Police believe the shootings may be connected.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "28/03/2021", 
          "Dead": "5", 
          "Description": "A man killed his parents and two others before setting himself on fire. A fifth person was wounded by gunfire but survived.", 
          "Injured": "1", 
          "State": "Maryland", 
          "Total": "6"
        }, 
        {
          "Date": "28/03/2021", 
          "Dead": "0", 
          "Description": "Four people were struck by gunfire on a vehicle on Interstate 57.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "28/03/2021", 
          "Dead": "0", 
          "Description": "Four people were injured, two critically, after a shooting at an apartment complex.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "28/03/2021", 
          "Dead": "0", 
          "Description": "Seven people were injured after a shootout at a motorcycle club.", 
          "Injured": "7", 
          "State": "Ohio", 
          "Total": "7"
        }, 
        {
          "Date": "27/03/2021", 
          "Dead": "1", 
          "Description": "Four people were shot, one fatally, on a party bus.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "27/03/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded after a shooting in the Austin neighborhood.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "27/03/2021", 
          "Dead": "0", 
          "Description": "Several people were injured after a shooting at a nightclub.", 
          "Injured": "6", 
          "State": "Mississippi", 
          "Total": "6"
        }, 
        {
          "Date": "27/03/2021", 
          "Dead": "3", 
          "Description": "In an early morning shooting in Northern Memphis, three people were killed and two people were injured. Of the injured, a man is in critical condition and a woman is in stable condition.", 
          "Injured": "2", 
          "State": "Tennessee", 
          "Total": "5"
        }, 
        {
          "Date": "26/03/2021", 
          "Dead": "0", 
          "Description": "Seven people were shot outside a sports bar in Fishtown. Three of the victims are in critical condition, and four are in stable condition.", 
          "Injured": "7", 
          "State": "Pennsylvania", 
          "Total": "7"
        }, 
        {
          "Date": "26/03/2021", 
          "Dead": "2", 
          "Description": "Eight people were injured after a fight led to a shooting. Two other shootings, one of which was officer-involved, also occurred that night, though it is unknown if they were related to the original shooting.", 
          "Injured": "8", 
          "State": "Virginia", 
          "Total": "8"
        }, 
        {
          "Date": "26/03/2021", 
          "Dead": "1", 
          "Description": "One person died and seven others were injured at a party in the Southwest Side of Chicago.", 
          "Injured": "7", 
          "State": "Illinois", 
          "Total": "8"
        }, 
        {
          "Date": "23/03/2021", 
          "Dead": "0", 
          "Description": "Four people including a child were injured at the entrance of the Cumberland Mall, although the mall was not evacuated. A similar shooting took place in December 2019.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "23/03/2021", 
          "Dead": "2", 
          "Description": "Four people, including two high school students, were shot. One of the high school students later died.", 
          "Injured": "2", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "22/03/2021", 
          "Dead": "1", 
          "Description": "Four people were shot in a vehicle, one fatally.", 
          "Injured": "3", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "22/03/2021", 
          "Dead": "2", 
          "Description": "Four people were shot at a restaurant, two fatally.", 
          "Injured": "2", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "22/03/2021", 
          "Dead": "10", 
          "Description": "2021 Boulder shooting: Ten people were killed including a Boulder police officer, in a shooting at a grocery store. The shooter was shot in the leg by responding police.", 
          "Injured": "2", 
          "State": "Colorado", 
          "Total": "12"
        }, 
        {
          "Date": "20/03/2021", 
          "Dead": "0", 
          "Description": "Five people were shot at a nightclub.", 
          "Injured": "5", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "20/03/2021", 
          "Dead": "1", 
          "Description": "One person died and seven others were wounded after a shooting at a nightclub.", 
          "Injured": "7", 
          "State": "Texas", 
          "Total": "8"
        }, 
        {
          "Date": "20/03/2021", 
          "Dead": "1", 
          "Description": "Five people were shot, one fatally, at a party in the Nicetown neighborhood.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "18/03/2021", 
          "Dead": "0", 
          "Description": "Four people were hospitalized after a shooting at a motel.", 
          "Injured": "4", 
          "State": "Oregon", 
          "Total": "4"
        }, 
        {
          "Date": "18/03/2021", 
          "Dead": "0", 
          "Description": "Four people were shot in the 7th Ward.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "17/03/2021", 
          "Dead": "0", 
          "Description": "Five people were wounded after a drive-by shooting at a vigil. Police say the victims are uncooperative.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "16/03/2021", 
          "Dead": "4", 
          "Description": "Four people died after a shooting at a home. One man was injured and is expected to survive.", 
          "Injured": "1", 
          "State": "Arizona", 
          "Total": "5"
        }, 
        {
          "Date": "16/03/2021", 
          "Dead": "8", 
          "Description": "2021 Atlanta spa shootings: A series of mass shootings occurred at massage parlors. Eight people were killed in the incidents and one person was wounded, six victims were women of Asian descent. The suspect was arrested in Crisp County and told police he planned to continue his massacre in Florida.", 
          "Injured": "1", 
          "State": "Georgia", 
          "Total": "9"
        }, 
        {
          "Date": "15/03/2021", 
          "Dead": "1", 
          "Description": "One person died and four were injured after an overnight shooting in the Northside.", 
          "Injured": "4", 
          "State": "Indiana", 
          "Total": "5"
        }, 
        {
          "Date": "14/03/2021", 
          "Dead": "0", 
          "Description": "Four people were shot outside a banquet hall.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "14/03/2021", 
          "Dead": "0", 
          "Description": "Four people were injured during a robbery in the South Side.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "14/03/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and 13 injured at an early morning party in South Side.", 
          "Injured": "13", 
          "State": "Illinois", 
          "Total": "15"
        }, 
        {
          "Date": "13/03/2021", 
          "Dead": "0", 
          "Description": "Five people were shot at a hookah parlor in Williamsburg, Brooklyn.", 
          "Injured": "5", 
          "State": "New York", 
          "Total": "5"
        }, 
        {
          "Date": "13/03/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and four injured at a parking lot.", 
          "Injured": "4", 
          "State": "Virginia", 
          "Total": "6"
        }, 
        {
          "Date": "13/03/2021", 
          "Dead": "4", 
          "Description": "Police found a woman who had been shot and learned there may be other victims at a different home. Police arrived at the home and found four dead, including a child.", 
          "Injured": "1", 
          "State": "Indiana", 
          "Total": "5"
        }, 
        {
          "Date": "13/03/2021", 
          "Dead": "1", 
          "Description": "One person was killed and three injured at an early morning party.", 
          "Injured": "3", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "12/03/2021", 
          "Dead": "0", 
          "Description": "Four people, including a minor, were injured in a shooting.", 
          "Injured": "4", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "11/03/2021", 
          "Dead": "1", 
          "Description": "Following an argument, a man shot at a car of people, killing one and wounding three.", 
          "Injured": "3", 
          "State": "New Mexico", 
          "Total": "4"
        }, 
        {
          "Date": "11/03/2021", 
          "Dead": "1", 
          "Description": "One person was killed and four injured outside a motorcycle business.", 
          "Injured": "4", 
          "State": "South Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "11/03/2021", 
          "Dead": "2", 
          "Description": "Four people were shot in Overbrook, two fatally. One of the deceased was 16-years-old.", 
          "Injured": "2", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "10/03/2021", 
          "Dead": "0", 
          "Description": "Four people were shot in Kensington.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "10/03/2021", 
          "Dead": "3", 
          "Description": "Three people were killed and one was injured in Southwest Houston. Two of the victims were 18-years-old.", 
          "Injured": "1", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "08/03/2021", 
          "Dead": "1", 
          "Description": "One man died and three people were injured in a shooting. Police believe the shooting was targeted.", 
          "Injured": "3", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "07/03/2021", 
          "Dead": "0", 
          "Description": "Three adults and a two-year-old child were injured at a child's birthday party, in a local apartment building. The shooter was arrested the next day.", 
          "Injured": "4", 
          "State": "Mississippi", 
          "Total": "4"
        }, 
        {
          "Date": "06/03/2021", 
          "Dead": "2", 
          "Description": "Two were killed and three injured after a drive-by shooting at a backyard gathering.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "06/03/2021", 
          "Dead": "1", 
          "Description": "One man was killed and four people were injured in an early-morning shooting.", 
          "Injured": "4", 
          "State": "North Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "05/03/2021", 
          "Dead": "1", 
          "Description": "A shooting at a restaurant killed a man from Pennsylvania and injured four others. Police say the shooting was gang-related.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "04/03/2021", 
          "Dead": "0", 
          "Description": "Several people were injured in a shooting at a convenience store in the Southwest section of the district.", 
          "Injured": "5", 
          "State": "Washington, D.C.", 
          "Total": "5"
        }, 
        {
          "Date": "03/03/2021", 
          "Dead": "1", 
          "Description": "One person died and three were injured after a shooting at a tavern.", 
          "Injured": "3", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "28/02/2021", 
          "Dead": "0", 
          "Description": "Four people were injured at a parking lot in Northwest Houston. Police say the incident was a case of road rage.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "28/02/2021", 
          "Dead": "4", 
          "Description": "A man shot and killed his wife and two others, wounding a fourth. He was later shot and injured by police in Detroit and was taken to a nearby hospital and died days later.", 
          "Injured": "2", 
          "State": "Ohio", 
          "Total": "6"
        }, 
        {
          "Date": "28/02/2021", 
          "Dead": "0", 
          "Description": "Four people were shot at a gas station. One of the wounded was a 7-year-old girl.", 
          "Injured": "4", 
          "State": "Indiana", 
          "Total": "4"
        }, 
        {
          "Date": "28/02/2021", 
          "Dead": "0", 
          "Description": "Four people were shot at an apartment complex. The shooting occurred at one of the wounded's apartments.", 
          "Injured": "4", 
          "State": "South Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "28/02/2021", 
          "Dead": "0", 
          "Description": "Five people were wounded in a drive-by shooting. Four were outside, and one was in a store.", 
          "Injured": "5", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "28/02/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in an IHOP parking lot during the early morning.", 
          "Injured": "4", 
          "State": "Delaware", 
          "Total": "4"
        }, 
        {
          "Date": "27/02/2021", 
          "Dead": "0", 
          "Description": "Four people were injured after a shooting in South Columbus.", 
          "Injured": "4", 
          "State": "Mississippi", 
          "Total": "4"
        }, 
        {
          "Date": "27/02/2021", 
          "Dead": "2", 
          "Description": "A conflict between two men led to a shooting at a birthday party, killing two and injuring three.", 
          "Injured": "3", 
          "State": "Mississippi", 
          "Total": "5"
        }, 
        {
          "Date": "26/02/2021", 
          "Dead": "1", 
          "Description": "Four were shot, one fatally, after a drive-by shooting outside a market.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "26/02/2021", 
          "Dead": "1", 
          "Description": "Six men were injured at a local car wash, with one man found by police and five others identified at a local hospital.", 
          "Injured": "5", 
          "State": "Texas", 
          "Total": "6"
        }, 
        {
          "Date": "26/02/2021", 
          "Dead": "0", 
          "Description": "Four people were shot and injured on Paige Street.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "21/02/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded after a shooting at a mobile home park.", 
          "Injured": "4", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "21/02/2021", 
          "Dead": "1", 
          "Description": "One man died and four people were injured after an overnight shooting at a club.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "5"
        }, 
        {
          "Date": "20/02/2021", 
          "Dead": "1", 
          "Description": "One man died and three people were injured after a shooting at a bowling alley.", 
          "Injured": "3", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "20/02/2021", 
          "Dead": "1", 
          "Description": "One man died and four people were injured after an overnight shooting in Springfield.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "20/02/2021", 
          "Dead": "3", 
          "Description": "A man shot and killed two people at a gun store. Several people then engaged the original shooter both inside and outside the store, causing injuries to two more people. It is still unclear whether the original shooter was shot dead by engaging responders or committed suicide.", 
          "Injured": "2", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "19/02/2021", 
          "Dead": "1", 
          "Description": "Four people were shot, one fatally, at a party. Most of the people at the party were of college-age.", 
          "Injured": "3", 
          "State": "Colorado", 
          "Total": "4"
        }, 
        {
          "Date": "18/02/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three others injured inside a barbershop.", 
          "Injured": "3", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "17/02/2021", 
          "Dead": "0", 
          "Description": "A shooter injured eight people, including a seventeen-year-old, near the Olney Transportation Center.", 
          "Injured": "8", 
          "State": "Pennsylvania", 
          "Total": "8"
        }, 
        {
          "Date": "16/02/2021", 
          "Dead": "3", 
          "Description": "A man suspected in a homicide shot several family members at a house where his grandmother and great-grandmother lived, killing them and his uncle. A woman with gunshot wounds was able to escape to a neighbor's house for help.", 
          "Injured": "1", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "13/02/2021", 
          "Dead": "0", 
          "Description": "A shooting in Bayview injured six people.", 
          "Injured": "6", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "13/02/2021", 
          "Dead": "0", 
          "Description": "One adult and three juveniles were discovered wounded by gunfire in a vehicle stopped at an intersection.", 
          "Injured": "4", 
          "State": "Indiana", 
          "Total": "4"
        }, 
        {
          "Date": "13/02/2021", 
          "Dead": "1", 
          "Description": "One person died and three others were wounded in an early morning shooting.", 
          "Injured": "3", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "13/02/2021", 
          "Dead": "0", 
          "Description": "Six wounded men were found after a Shot Spotter alert in the Old Oakland Historic District. The victims are uncooperative with officers.", 
          "Injured": "6", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "11/02/2021", 
          "Dead": "1", 
          "Description": "Five people were shot, one fatally in an evening shooting near the Signature Event Center.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "5"
        }, 
        {
          "Date": "10/02/2021", 
          "Dead": "0", 
          "Description": "Four people were injured during a shootout between two vehicles. Two of the injured were minors.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "09/02/2021", 
          "Dead": "0", 
          "Description": "Four men were shot and injured in a drive-by shooting at Acres Homes.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "09/02/2021", 
          "Dead": "1", 
          "Description": "2021 Buffalo clinic attack: A nurse was killed and four other people were shot and seriously wounded inside of a health care clinic. The perpetrator had made previous threats to commit a mass shooting at the clinic.", 
          "Injured": "4", 
          "State": "Minnesota", 
          "Total": "5"
        }, 
        {
          "Date": "08/02/2021", 
          "Dead": "0", 
          "Description": "Three adults and a juvenile were shot and injured in an evening shooting.", 
          "Injured": "4", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "06/02/2021", 
          "Dead": "0", 
          "Description": "Three teens and one adult were shot at a house party.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "06/02/2021", 
          "Dead": "1", 
          "Description": "A shooting at an illegal club killed one and injured three.", 
          "Injured": "3", 
          "State": "Washington", 
          "Total": "4"
        }, 
        {
          "Date": "06/02/2021", 
          "Dead": "1", 
          "Description": "One man was killed in a shooting at a party while two others were hospitalized. Another two were grazed by bullets but refused treatment.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "5"
        }, 
        {
          "Date": "06/02/2021", 
          "Dead": "1", 
          "Description": "A shooting at a hotel killed one man and wounded five others.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "05/02/2021", 
          "Dead": "3", 
          "Description": "A shooting at a club left three people dead and one injured.", 
          "Injured": "1", 
          "State": "Mississippi", 
          "Total": "4"
        }, 
        {
          "Date": "05/02/2021", 
          "Dead": "2", 
          "Description": "Two were killed in a shooting at a restaurant, while two others were injured. One of the shooters engaged in a gunfight with the police.", 
          "Injured": "2", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "05/02/2021", 
          "Dead": "1", 
          "Description": "Four men were shot at a hookah lounge, one fatally.", 
          "Injured": "3", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "04/02/2021", 
          "Dead": "2", 
          "Description": "During a hostage situation, a man killed a woman and shot three officers. The man was later killed by police.", 
          "Injured": "3", 
          "State": "North Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "03/02/2021", 
          "Dead": "3", 
          "Description": "A shooter attacked four people at an apartment complex near Fort Carson, killing three.", 
          "Injured": "1", 
          "State": "Colorado", 
          "Total": "4"
        }, 
        {
          "Date": "03/02/2021", 
          "Dead": "2", 
          "Description": "Police discovered a wounded man, who told them he had been shot by another man. The shooter was discovered shortly afterward in a home where he killed one and injured two before being killed by a resident of the home.", 
          "Injured": "3", 
          "State": "Colorado", 
          "Total": "5"
        }, 
        {
          "Date": "03/02/2021", 
          "Dead": "1", 
          "Description": "One person died in North Memphis and three others were injured in a shooting.", 
          "Injured": "3", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "02/02/2021", 
          "Dead": "6", 
          "Description": "2021 Muskogee shooting: Five children and one adult were shot and killed, and one other adult suffered life-threatening injuries, after a home shooting. The slain adult was the adult brother of the perpetrator.", 
          "Injured": "1", 
          "State": "Oklahoma", 
          "Total": "7"
        }, 
        {
          "Date": "02/02/2021", 
          "Dead": "3", 
          "Description": "2021 Sunrise, Florida shootout: Two FBI agents were shot and killed and three others wounded attempting to serve a warrant. The suspect barricaded himself in his home and opened fire before shooting and killing himself.", 
          "Injured": "3", 
          "State": "Florida", 
          "Total": "6"
        }, 
        {
          "Date": "01/02/2021", 
          "Dead": "1", 
          "Description": "A man was killed and a woman and two men injured in the early morning.", 
          "Injured": "3", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "30/01/2021", 
          "Dead": "1", 
          "Description": "A woman was shot and killed, and four other people were injured after a shooting.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "5"
        }, 
        {
          "Date": "29/01/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and three others injured after a shooting outside a club.", 
          "Injured": "3", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "28/01/2021", 
          "Dead": "1", 
          "Description": "A woman was killed and four others, including a baby boy, were injured in a drive-by shooting.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "5"
        }, 
        {
          "Date": "27/01/2021", 
          "Dead": "0", 
          "Description": "Four men were wounded in the early morning at an illegal gambling den.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "25/01/2021", 
          "Dead": "1", 
          "Description": "A shooting at a market killed a Virginia Union University student and wounded four others in the Southeast section of the nation's capital.", 
          "Injured": "4", 
          "State": "Washington, D.C.", 
          "Total": "5"
        }, 
        {
          "Date": "24/01/2021", 
          "Dead": "0", 
          "Description": "Five people were hospitalized in a shooting, two in critical condition.", 
          "Injured": "5", 
          "State": "Nevada", 
          "Total": "5"
        }, 
        {
          "Date": "24/01/2021", 
          "Dead": "6", 
          "Description": "Six people including a pregnant woman were killed and a teen was injured in a shooting at a house on the northeast side of Indianapolis. The teen suspect (Raymond Childs III) is currently in custody.", 
          "Injured": "1", 
          "State": "Indiana", 
          "Total": "7"
        }, 
        {
          "Date": "22/01/2021", 
          "Dead": "0", 
          "Description": "Five people were injured in a shooting at a bar. A suspect was arrested.", 
          "Injured": "5", 
          "State": "Kentucky", 
          "Total": "5"
        }, 
        {
          "Date": "21/01/2021", 
          "Dead": "1", 
          "Description": "One person died during a shoot-out in East Oakland, while three others were injured. The man who died was hit by a stray bullet.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "20/01/2021", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting just outside Crowley city limits.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "18/01/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in a string of connected shootings at three different locations.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "17/01/2021", 
          "Dead": "0", 
          "Description": "Five men were injured during a shooting near a strip mall. Police think there may have been a shootout.", 
          "Injured": "5", 
          "State": "Arizona", 
          "Total": "5"
        }, 
        {
          "Date": "17/01/2021", 
          "Dead": "1", 
          "Description": "A shooting at a nightclub killed one and injured six.", 
          "Injured": "6", 
          "State": "Arizona", 
          "Total": "7"
        }, 
        {
          "Date": "16/01/2021", 
          "Dead": "0", 
          "Description": "Four men and a woman were injured in an early morning shooting after an attendee at a house party opened fire.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "16/01/2021", 
          "Dead": "0", 
          "Description": "Five people were wounded after a shooting in the Tenderloin district.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "15/01/2021", 
          "Dead": "0", 
          "Description": "Four teenagers were injured in a shooting in the Logan neighborhood of North Philadelphia.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "11/01/2021", 
          "Dead": "0", 
          "Description": "Four teenagers were shot outside an apartment complex in Brownsville in the third mass shooting in Metropolitan Miami in eight days.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "09/01/2021", 
          "Dead": "1", 
          "Description": "A shooting at a nightclub left one person, a teenager, dead, and three others injured.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "09/01/2021", 
          "Dead": "6", 
          "Description": "A shooting that started in Chicago ended in Evanston left five people dead and two injured before the shooter was shot and killed by police.", 
          "Injured": "2", 
          "State": "Illinois", 
          "Total": "8"
        }, 
        {
          "Date": "07/01/2021", 
          "Dead": "0", 
          "Description": "Three men and two boys were wounded in an evening shooting in Columbia Heights.", 
          "Injured": "5", 
          "State": "Washington, D.C.", 
          "Total": "5"
        }, 
        {
          "Date": "06/01/2021", 
          "Dead": "1", 
          "Description": "A man opened fire on his family killing one man and injuring two women and a teenage boy before fleeing. He was discovered later by officers after dying in a car accident.", 
          "Injured": "3", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "06/01/2021", 
          "Dead": "1", 
          "Description": "Three men attempted to break into a home, and engaged in a gunfight with an occupant. The occupant was killed and two adults and a three-year-old girl were injured.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "05/01/2021", 
          "Dead": "0", 
          "Description": "A shootout injured five people near a convenience store in the Palm River-Clair Mel area.", 
          "Injured": "5", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "04/01/2021", 
          "Dead": "0", 
          "Description": "Seven people were injured in a shooting.", 
          "Injured": "7", 
          "State": "Florida", 
          "Total": "7"
        }, 
        {
          "Date": "04/01/2021", 
          "Dead": "0", 
          "Description": "Three men and a fifteen-year-old boy were involved in a shoot-out in the 7th ward, and subsequently wounded by gunfire.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "03/01/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded outside a nightclub in the evening.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "03/01/2021", 
          "Dead": "0", 
          "Description": "Six adults and two teenagers were wounded at a basketball court in Little River Park in Northwest Miami-Dade, when two people walked up and opened fire.", 
          "Injured": "8", 
          "State": "Florida", 
          "Total": "8"
        }, 
        {
          "Date": "03/01/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded at a private party.", 
          "Injured": "4", 
          "State": "Oregon", 
          "Total": "4"
        }, 
        {
          "Date": "03/01/2021", 
          "Dead": "1", 
          "Description": "A fight broke out, outside a Midtown Houston nightclub and a man opened fire. Three officers working a second job as security were wounded, along with the shooter, and a woman, who was the mother of the shooter, was killed.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "03/01/2021", 
          "Dead": "2", 
          "Description": "Two people were killed and two injured after another approached the group on foot and opened fire in the city's lower Eastside.", 
          "Injured": "2", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "03/01/2021", 
          "Dead": "2", 
          "Description": "Two groups of men opened fire at one another in the early morning. Two were killed and three wounded in the shooting.", 
          "Injured": "3", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "01/01/2021", 
          "Dead": "0", 
          "Description": "Four people were wounded in an early morning shooting while at home. Police believe the shooting was targeted.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "01/01/2021", 
          "Dead": "1", 
          "Description": "A woman was killed and four others injured after a shooting occurred at a house party. Multiple guns fired into the house, and attendees fled and drove themselves to different hospitals.", 
          "Injured": "4", 
          "State": "Iowa", 
          "Total": "5"
        }, 
        {
          "Date": "01/01/2021", 
          "Dead": "1", 
          "Description": "A man was killed and three others injured in an early morning shooting at a shopping center.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "01/01/2021", 
          "Dead": "0", 
          "Description": "Seven people were wounded in an early morning shooting at an event center hosting a New Year's party after two men in a disagreement shot at each other.", 
          "Injured": "7", 
          "State": "Arkansas", 
          "Total": "7"
        }, 
        {
          "Date": "05/06/2022", 
          "Dead": "0", 
          "Description": "Four people were injured in a drive-by shooting shortly before midnight.", 
          "Injured": "4", 
          "State": "South Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "05/06/2022", 
          "Dead": "3", 
          "Description": "Three people were killed and two others wounded in a shooting during the early morning.", 
          "Injured": "2", 
          "State": "Michigan", 
          "Total": "5"
        }, 
        {
          "Date": "05/06/2022", 
          "Dead": "2", 
          "Description": "Two people were killed and two others injured in a shooting outside a nightclub.", 
          "Injured": "2", 
          "State": "Arizona", 
          "Total": "4"
        }, 
        {
          "Date": "05/06/2022", 
          "Dead": "2", 
          "Description": "2022 Chattanooga shooting: Fourteen were shot, two of them fatally, at a nightclub during the early morning. A third person was killed by a vehicle attempting to flee.", 
          "Injured": "12", 
          "State": "Tennessee", 
          "Total": "14"
        }, 
        {
          "Date": "05/06/2022", 
          "Dead": "1", 
          "Description": "One person was killed and three others injured in an early morning shooting at the Festival of the Arts.", 
          "Injured": "3", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "04/06/2022", 
          "Dead": "1", 
          "Description": "Eight people, including six children, were shot during a graduation party after occupants in two cars opened fire at the partygoers in the yard of the house it was being held at. An adult woman was killed.", 
          "Injured": "7", 
          "State": "South Carolina", 
          "Total": "8"
        }, 
        {
          "Date": "04/06/2022", 
          "Dead": "3", 
          "Description": "2022 Philadelphia shooting: Fourteen people were shot, three of them fatally, by multiple shooters on South Street. One of the shooters may have been shot by a responding police officer.", 
          "Injured": "11", 
          "State": "Pennsylvania", 
          "Total": "14"
        }, 
        {
          "Date": "04/06/2022", 
          "Dead": "1", 
          "Description": "A teenager was fatally shot, and three others were wounded.", 
          "Injured": "3", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "04/06/2022", 
          "Dead": "0", 
          "Description": "A couple was arrested after the boyfriend shot three people during an argument. The boyfriend was also shot.", 
          "Injured": "4", 
          "State": "Nevada", 
          "Total": "4"
        }, 
        {
          "Date": "04/06/2022", 
          "Dead": "1", 
          "Description": "Four people were shot, one fatally, at an abandoned home.", 
          "Injured": "3", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "04/06/2022", 
          "Dead": "0", 
          "Description": "Five teenagers were wounded in a targeted shooting at an early morning graduation house party after two groups at the party began fighting.", 
          "Injured": "5", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "04/06/2022", 
          "Dead": "1", 
          "Description": "A fight during a party being held at a strip mall escalated into gunfire, with nine people being shot.", 
          "Injured": "8", 
          "State": "Arizona", 
          "Total": "9"
        }, 
        {
          "Date": "03/06/2022", 
          "Dead": "1", 
          "Description": "Four people were shot, one fatally, shortly before midnight near an apartment complex.", 
          "Injured": "3", 
          "State": "Nebraska", 
          "Total": "4"
        }, 
        {
          "Date": "03/06/2022", 
          "Dead": "1", 
          "Description": "Six people were shot, one fatally, during a party. One of the shooting victims also suffered a broken arm.", 
          "Injured": "5", 
          "State": "Virginia", 
          "Total": "6"
        }, 
        {
          "Date": "03/06/2022", 
          "Dead": "2", 
          "Description": "Two police officers responding to a domestic disturbance were fired upon by two men. In the ensuing gun battle, a shooter and a police officer were killed. The surviving officer and shooter were both shot.", 
          "Injured": "2", 
          "State": "West Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "01/06/2022", 
          "Dead": "5", 
          "Description": "Warren Clinic shooting: At least four people were killed and multiple were injured after a shooting inside a building on the Saint Francis Hospital campus. The shooter fatally shot himself.", 
          "Injured": "0", 
          "State": "Oklahoma", 
          "Total": "5"
        }, 
        {
          "Date": "31/05/2022", 
          "Dead": "0", 
          "Description": "Four people were shot in the Carver neighborhood.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "31/05/2022", 
          "Dead": "4", 
          "Description": "A concerned relative checked their family at their home and found four of them dead. A man had killed his girlfriend and her two eldest children before committing suicide. Three younger children were found unharmed in the home.", 
          "Injured": "0", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "30/05/2022", 
          "Dead": "0", 
          "Description": "Ten people were shot during a party in a vacant parking lot, including a teenager. A police officer who was arriving at the scene was shot at in his police cruiser and suffered a shrapnel injury.", 
          "Injured": "10", 
          "State": "South Carolina", 
          "Total": "10"
        }, 
        {
          "Date": "30/05/2022", 
          "Dead": "2", 
          "Description": "A shooting at a party in the Port Richmond neighborhood left two dead, including a teenager, and two others wounded.", 
          "Injured": "2", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "30/05/2022", 
          "Dead": "1", 
          "Description": "Seven people were shot, one fatally, outside a bar and a liquor store during the early morning.", 
          "Injured": "6", 
          "State": "Michigan", 
          "Total": "7"
        }, 
        {
          "Date": "29/05/2022", 
          "Dead": "0", 
          "Description": "Four people were shot in the Willow Springs neighborhood. A victim driving away from the scene fatally struck a motorcyclist.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "29/05/2022", 
          "Dead": "1", 
          "Description": "A man shot four people, one fatally, at a home in the Humboldt Park neighborhood before barricading himself inside during a domestic-related incident. The shooter was eventually shot by a SWAT team.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "29/05/2022", 
          "Dead": "1", 
          "Description": "One person was killed and seven others wounded after a shooting at a Memorial Day festival at the Old City Square.", 
          "Injured": "7", 
          "State": "Oklahoma", 
          "Total": "8"
        }, 
        {
          "Date": "29/05/2022", 
          "Dead": "0", 
          "Description": "Seven people were shot on U.S. Route 95, causing the highway to be shut down in both directions for several hours.", 
          "Injured": "7", 
          "State": "Nevada", 
          "Total": "7"
        }, 
        {
          "Date": "29/05/2022", 
          "Dead": "0", 
          "Description": "Six people were shot during a house party.", 
          "Injured": "6", 
          "State": "Arizona", 
          "Total": "6"
        }, 
        {
          "Date": "29/05/2022", 
          "Dead": "1", 
          "Description": "Four people were shot, one fatally, at a house party during the early morning.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "29/05/2022", 
          "Dead": "0", 
          "Description": "Five people, including a teenager, were shot in the West Garfield Park neighborhood in the early morning.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "28/05/2022", 
          "Dead": "0", 
          "Description": "Four people were shot during an illegal car show between the Hollywood and Hyde Park neighborhoods.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "28/05/2022", 
          "Dead": "0", 
          "Description": "A disturbance between two teenagers at a house party escalated into a shooting that wounded four after one of the teenagers opened fire shortly before midnight.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "28/05/2022", 
          "Dead": "1", 
          "Description": "One teenager was killed and three were wounded in a shooting in the McLane neighborhood.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "28/05/2022", 
          "Dead": "0", 
          "Description": "Six people were injured during an exchange of gunfire in the Riverfront neighborhood.", 
          "Injured": "6", 
          "State": "Tennessee", 
          "Total": "6"
        }, 
        {
          "Date": "28/05/2022", 
          "Dead": "1", 
          "Description": "Four people were shot, one fatally, in a shooting in a bar parking lot during the early morning hours.", 
          "Injured": "3", 
          "State": "Colorado", 
          "Total": "4"
        }, 
        {
          "Date": "27/05/2022", 
          "Dead": "4", 
          "Description": "A man fatally shot his wife and his step-children before non-fatally shooting himself in the head.", 
          "Injured": "1", 
          "State": "Michigan", 
          "Total": "5"
        }, 
        {
          "Date": "27/05/2022", 
          "Dead": "0", 
          "Description": "Six people, including several teenagers, were shot at a graduation party.", 
          "Injured": "6", 
          "State": "Alabama", 
          "Total": "6"
        }, 
        {
          "Date": "25/05/2022", 
          "Dead": "0", 
          "Description": "Four people were shot, including two teenagers, while on the way to a prom party in the Mantua neighborhood.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "24/05/2022", 
          "Dead": "22", 
          "Description": "Robb Elementary School shooting: An 18-year-old shot his grandmother at their home before driving to Robb Elementary School, where he entered the school unobstructed, barricading himself inside a classroom and fatally shooting twenty-one people, including nineteen children. Eighteen people in total were wounded. The shooter was eventually fatally shot by a Border Patrol officer, which was shot during the shootout.", 
          "Injured": "18", 
          "State": "Texas", 
          "Total": "40"
        }, 
        {
          "Date": "23/05/2022", 
          "Dead": "0", 
          "Description": "Five people were shot during a memorial service in the Collinwood neighborhood.", 
          "Injured": "5", 
          "State": "Ohio", 
          "Total": "5"
        }, 
        {
          "Date": "23/05/2022", 
          "Dead": "0", 
          "Description": "Five people were injured in an early morning shooting at a nightclub. Several others were injured by broken glass during the chaos of the shooting.", 
          "Injured": "5", 
          "State": "South Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "22/05/2022", 
          "Dead": "5", 
          "Description": "Police discovered five people shot to death at a public housing complex in the Caimito barrio.", 
          "Injured": "0", 
          "State": "Puerto Rico", 
          "Total": "5"
        }, 
        {
          "Date": "22/05/2022", 
          "Dead": "4", 
          "Description": "A man fatally shot his two teenage daughters and his wife before shooting himself.", 
          "Injured": "0", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "21/05/2022", 
          "Dead": "0", 
          "Description": "A drive-by shooting in the South End area left four wounded.", 
          "Injured": "4", 
          "State": "Washington", 
          "Total": "4"
        }, 
        {
          "Date": "21/05/2022", 
          "Dead": "2", 
          "Description": "A shooting occurred at a home, leaving two people dead and three injured.", 
          "Injured": "3", 
          "State": "Indiana", 
          "Total": "5"
        }, 
        {
          "Date": "20/05/2022", 
          "Dead": "1", 
          "Description": "A shooting occurred at an after-prom party, leaving one dead and nine injured.", 
          "Injured": "9", 
          "State": "California", 
          "Total": "10"
        }, 
        {
          "Date": "20/05/2022", 
          "Dead": "1", 
          "Description": "Four people were shot, one fatally, in the Holy Cross neighborhood.", 
          "Injured": "3", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "20/05/2022", 
          "Dead": "1", 
          "Description": "A drive-by shooting in front of a grocery store wounded three and killed one.", 
          "Injured": "3", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "19/05/2022", 
          "Dead": "2", 
          "Description": "Magnificent Mile shooting: An individual opened fire during an altercation between two groups of teenagers, killing two and injuring eight. The shooter engaged in a chase with police in the subway, during which a woman fell onto the train tracks and was electrocuted during the chaos.", 
          "Injured": "8", 
          "State": "Illinois", 
          "Total": "10"
        }, 
        {
          "Date": "19/05/2022", 
          "Dead": "4", 
          "Description": "An estranged husband opened fire on his wife, killing her, their daughter, and his mother-in-law before committing suicide.", 
          "Injured": "0", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "18/05/2022", 
          "Dead": "0", 
          "Description": "Five people were shot in the Cecil B. Moore neighborhood, including a teenager.", 
          "Injured": "5", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "17/05/2022", 
          "Dead": "1", 
          "Description": "Four people were shot, one of them fatally, at a park in a targeted attack.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "15/05/2022", 
          "Dead": "0", 
          "Description": "Seven people were shot in three connected shootings that preceded an exchange of gunfire.", 
          "Injured": "7", 
          "State": "North Carolina", 
          "Total": "7"
        }, 
        {
          "Date": "15/05/2022", 
          "Dead": "0", 
          "Description": "Two teenagers and two juveniles were shot at a house in the Shepard Street\ufffdCSouth Road Street Historic District.", 
          "Injured": "4", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "15/05/2022", 
          "Dead": "1", 
          "Description": "2022 Laguna Woods shooting: A man motivated by anti-Taiwanese sentiment opened fire at a church, killing one and wounding five others, before being physically restrained by churchgoers.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "15/05/2022", 
          "Dead": "2", 
          "Description": "Two people were killed, and three others were injured, at a flea market after an argument escalated into a shooting in the Meadowviewland neighborhood.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "15/05/2022", 
          "Dead": "1", 
          "Description": "Five people were shot at a nightclub in the morning, with one person dying.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "14/05/2022", 
          "Dead": "10", 
          "Description": "2022 Buffalo shooting: An 18-year-old white supremacist clad in body armor opened fire at a Tops supermarket, killing ten, including a security guard, and wounding three others.", 
          "Injured": "3", 
          "State": "New York", 
          "Total": "13"
        }, 
        {
          "Date": "13/05/2022", 
          "Dead": "0", 
          "Description": "A gunfight among several groups of people wounded seventeen people following an NBA game in the East Town neighborhood.", 
          "Injured": "17", 
          "State": "Wisconsin", 
          "Total": "17"
        }, 
        {
          "Date": "13/05/2022", 
          "Dead": "2", 
          "Description": "Two people were killed, and three were injured, in a shooting in the Deep Ellum neighborhood.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "12/05/2022", 
          "Dead": "0", 
          "Description": "A fight outside a convention center following a high school graduation ceremony led to a shooting that injured four. No students or graduates were involved in the shooting or the fight.", 
          "Injured": "4", 
          "State": "Arkansas", 
          "Total": "4"
        }, 
        {
          "Date": "11/05/2022", 
          "Dead": "1", 
          "Description": "A teenage girl was killed, and four men wounded, in a shooting in the Sandy Hill neighborhood.", 
          "Injured": "4", 
          "State": "New Jersey", 
          "Total": "5"
        }, 
        {
          "Date": "11/05/2022", 
          "Dead": "0", 
          "Description": "Four people, including two children, were shot while they drove together in a vehicle in the West Englewood neighborhood.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "11/05/2022", 
          "Dead": "1", 
          "Description": "Four people, including a teenager and a baby, were injured in an ambush while they drove in a car in the Mark Twain neighborhood. One of the adult victims later succumbed to his injuries.", 
          "Injured": "3", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "11/05/2022", 
          "Dead": "0", 
          "Description": "Four people, including two teenagers, were shot along the Canal Walk after two groups of people began shooting at each other across the water following an argument.", 
          "Injured": "4", 
          "State": "Indiana", 
          "Total": "4"
        }, 
        {
          "Date": "10/05/2022", 
          "Dead": "1", 
          "Description": "A shooter shot four people, one fatally, before fleeing and sparking a manhunt.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "10/05/2022", 
          "Dead": "0", 
          "Description": "Six people were shot by two men in a drive-by shooting in the Jackson Park neighborhood on the South Side.", 
          "Injured": "6", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "10/05/2022", 
          "Dead": "0", 
          "Description": "Five people were shot during a confrontation between two groups after at least one of the groups opened fire in northwestern Baltimore.", 
          "Injured": "5", 
          "State": "Maryland", 
          "Total": "5"
        }, 
        {
          "Date": "10/05/2022", 
          "Dead": "1", 
          "Description": "Five teenagers outside in the Back of the Yards neighborhood on the South Side were shot, one fatally, by multiple occupants of a stolen vehicle.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "10/05/2022", 
          "Dead": "1", 
          "Description": "Four people were shot, one fatally, in the Milton-Montford neighborhood.", 
          "Injured": "3", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "10/05/2022", 
          "Dead": "0", 
          "Description": "Four people were shot, including two teenagers, in the Kensington neighborhood.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "09/05/2022", 
          "Dead": "0", 
          "Description": "An argument in the common area of an apartment complex led to a shooting that injured five.", 
          "Injured": "5", 
          "State": "Alabama", 
          "Total": "5"
        }, 
        {
          "Date": "09/05/2022", 
          "Dead": "0", 
          "Description": "A fight amongst a group of people in the Chandler Park neighborhood on the city's east side led to four people, including three teenagers, being shot.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "08/05/2022", 
          "Dead": "3", 
          "Description": "Three people were killed, and another three were injured, in a shooting at a condominium complex. The shooter has not been found.", 
          "Injured": "3", 
          "State": "Georgia", 
          "Total": "6"
        }, 
        {
          "Date": "07/05/2022", 
          "Dead": "2", 
          "Description": "A shooting outside a house party left two teenagers dead, and two others injured, shortly before midnight.", 
          "Injured": "2", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "07/05/2022", 
          "Dead": "0", 
          "Description": "A fight during an informal car meet among a group of people led to a shooting that injured four, including two juveniles.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "07/05/2022", 
          "Dead": "2", 
          "Description": "A shooting during the very early morning killed two, and wounded three.", 
          "Injured": "3", 
          "State": "Kentucky", 
          "Total": "5"
        }, 
        {
          "Date": "06/05/2022", 
          "Dead": "2", 
          "Description": "A shooting in the Village de L'Est neighborhood left two killed, and four others wounded.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "6"
        }, 
        {
          "Date": "05/05/2022", 
          "Dead": "0", 
          "Description": "During a Cinco de Mayo festival, a gang member shot at a member of a rival gang who was in a crowd of people, wounding five bystanders--including four children. The shooting prompted the cancellation of the event. A 13-year old boy has now been arrested as the suspected shooter.", 
          "Injured": "5", 
          "State": "Washington", 
          "Total": "5"
        }, 
        {
          "Date": "03/05/2022", 
          "Dead": "0", 
          "Description": "A shooting at a casino in Kaw Nation territory wounded four.", 
          "Injured": "4", 
          "State": "Oklahoma", 
          "Total": "4"
        }, 
        {
          "Date": "03/05/2022", 
          "Dead": "0", 
          "Description": "An unknown shooter opened fire through an apartment window, and wounded five people.", 
          "Injured": "5", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "03/05/2022", 
          "Dead": "0", 
          "Description": "Five people were injured in a shooting incident during the evening.", 
          "Injured": "5", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "03/05/2022", 
          "Dead": "0", 
          "Description": "Three people were shot in the Chicago Loop as they sat at a red light at an intersection by two people. Another person was shot by a stray bullet as they crossed the street.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "01/05/2022", 
          "Dead": "0", 
          "Description": "An argument among a group of people led to someone opening fire, wounding six.", 
          "Injured": "6", 
          "State": "Florida", 
          "Total": "6"
        }, 
        {
          "Date": "01/05/2022", 
          "Dead": "1", 
          "Description": "Five people were shot, one fatally, on a street in the early morning.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "5"
        }, 
        {
          "Date": "01/05/2022", 
          "Dead": "0", 
          "Description": "Officers responding to shots fired engaged an active shooter and shot the attacker. Eleven people were shot before police stopped the shooter.", 
          "Injured": "12", 
          "State": "Louisiana", 
          "Total": "12"
        }, 
        {
          "Date": "01/05/2022", 
          "Dead": "1", 
          "Description": "A party being held at a park ended in gunfire, with four people being shot. One person succumbed to their injuries.", 
          "Injured": "3", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "30/04/2022", 
          "Dead": "1", 
          "Description": "A shooting by multiple people at a festival wounded five. One of the shooters was fatally shot by a responding officer.", 
          "Injured": "5", 
          "State": "Mississippi", 
          "Total": "6"
        }, 
        {
          "Date": "30/04/2022", 
          "Dead": "1", 
          "Description": "A fight in the Rosedale Heights neighborhood led to a shooting that killed one, and injured four others.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "5"
        }, 
        {
          "Date": "29/04/2022", 
          "Dead": "2", 
          "Description": "Four teenagers were shot, two fatally, in a drive by shooting.", 
          "Injured": "2", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "29/04/2022", 
          "Dead": "2", 
          "Description": "Two people were killed, and three others were injured, after a fight between two biker gangs led to a gunfight in a bar parking lot in the Fountain City neighborhood.", 
          "Injured": "2", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "29/04/2022", 
          "Dead": "0", 
          "Description": "A shootout at a bar between two groups of people wounded six people in the 11th Ward neighborhood.", 
          "Injured": "6", 
          "State": "Louisiana", 
          "Total": "6"
        }, 
        {
          "Date": "29/04/2022", 
          "Dead": "0", 
          "Description": "A shooting at a party injured four.", 
          "Injured": "4", 
          "State": "Mississippi", 
          "Total": "4"
        }, 
        {
          "Date": "28/04/2022", 
          "Dead": "1", 
          "Description": "A woman was killed, and three other people were injured, including a teenager, in a revenge shooting.", 
          "Injured": "3", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "27/04/2022", 
          "Dead": "2", 
          "Description": "An argument between two men escalated into a shooting that killed a young girl, and another man. Three children, including a toddler, were also shot.", 
          "Injured": "3", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "27/04/2022", 
          "Dead": "0", 
          "Description": "Four people, including a teenager, were wounded in a drive-by shooting in the West Garfield Park neighborhood.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "27/04/2022", 
          "Dead": "4", 
          "Description": "A man fatally shot three people, including the owner, at a motel in Biloxi before fleeing westward to Gulfport. In Gulfport, he fatally shot another man and carjacked his vehicle, before barricading himself inside a convenience store. The shooter assaulted two employees of the convenience store, but they escaped unharmed, after which he barricaded himself inside an office. The shooter set a fire in the room which caused him to die of smoke inhalation.", 
          "Injured": "0", 
          "State": "Mississippi", 
          "Total": "4"
        }, 
        {
          "Date": "27/04/2022", 
          "Dead": "0", 
          "Description": "Four people were shot during an argument in the Maryvale Village neighborhood.", 
          "Injured": "4", 
          "State": "Arizona", 
          "Total": "4"
        }, 
        {
          "Date": "27/04/2022", 
          "Dead": "0", 
          "Description": "During the filming of a music video at a barber shop, at least one person opened fire from a passing vehicle, wounding four. A fifth person was injured while trying to flee.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "26/04/2022", 
          "Dead": "3", 
          "Description": "Three teenagers were fatally shot on a road in northwest Rock Hill. Another person was shot but survived.", 
          "Injured": "1", 
          "State": "South Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "25/04/2022", 
          "Dead": "1", 
          "Description": "A shooting at a gathering at a Shell gas station wounded three people, and killed one.", 
          "Injured": "3", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "24/04/2022", 
          "Dead": "2", 
          "Description": "A fight at a house party led to six people being shot, with two dying from their injuries.", 
          "Injured": "4", 
          "State": "Indiana", 
          "Total": "6"
        }, 
        {
          "Date": "24/04/2022", 
          "Dead": "1", 
          "Description": "Four people were shot, one fatally, during the early morning hours.", 
          "Injured": "3", 
          "State": "South Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "23/04/2022", 
          "Dead": "1", 
          "Description": "Five people were shot, one fatally, in a shooting at a bar in the Muscupiabe neighborhood.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "23/04/2022", 
          "Dead": "0", 
          "Description": "Five people were shot in the Hotel District neighborhood during the late night hours.", 
          "Injured": "5", 
          "State": "Georgia", 
          "Total": "5"
        }, 
        {
          "Date": "23/04/2022", 
          "Dead": "2", 
          "Description": "Four people were shot, two fatally, in a drive-by shooting in the West Englewood neighborhood.", 
          "Injured": "2", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "23/04/2022", 
          "Dead": "0", 
          "Description": "A fight at a sports bar led to a shooting that injured four during the early morning hours in the Goldest East neighborhood.", 
          "Injured": "4", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "22/04/2022", 
          "Dead": "0", 
          "Description": "Four people were injured in a shooting during the night in central Petersburg.", 
          "Injured": "4", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "22/04/2022", 
          "Dead": "1", 
          "Description": "A 23-year old man shot at random people at Edmund Burke School from his apartment with a sniper-style set-up, wounding four\ufffd\ufffdincluding a child, in the Forest Hills neighborhood. The man committed suicide as officers entered his apartment.", 
          "Injured": "4", 
          "State": "Washington D.C.", 
          "Total": "5"
        }, 
        {
          "Date": "22/04/2022", 
          "Dead": "0", 
          "Description": "Four people were injured in the Walnut Hills neighborhood.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "21/04/2022", 
          "Dead": "4", 
          "Description": "A man shot to death his parents and another couple a quarter-mile apart from each other inside their homes.", 
          "Injured": "0", 
          "State": "Arkansas", 
          "Total": "4"
        }, 
        {
          "Date": "20/04/2022", 
          "Dead": "5", 
          "Description": "A man shot four of his family members, including two children, as they slept before shooting himself.", 
          "Injured": "0", 
          "State": "Minnesota", 
          "Total": "5"
        }, 
        {
          "Date": "18/04/2022", 
          "Dead": "4", 
          "Description": "A man shot his girlfriend and their two young children before shooting himself.", 
          "Injured": "0", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "17/04/2022", 
          "Dead": "1", 
          "Description": "A fight at an Easter party being held at a home ended in gunshots, with a man being killed and three others, including two juveniles, being injured.", 
          "Injured": "3", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "17/04/2022", 
          "Dead": "0", 
          "Description": "Five people were shot during the late evening hours.", 
          "Injured": "5", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "17/04/2022", 
          "Dead": "1", 
          "Description": "One teenage boy died, and three others are in a hospital, after a shooting in the Centennial neighborhood.", 
          "Injured": "3", 
          "State": "Oregon", 
          "Total": "4"
        }, 
        {
          "Date": "17/04/2022", 
          "Dead": "0", 
          "Description": "Four people were shot in the Fairhill neighborhood.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "17/04/2022", 
          "Dead": "0", 
          "Description": "A shooting at an Easter party being hosted at a nightclub wounded nine.", 
          "Injured": "9", 
          "State": "South Carolina", 
          "Total": "9"
        }, 
        {
          "Date": "17/04/2022", 
          "Dead": "1", 
          "Description": "A shooting in the Parkway neighborhood wounded three, and killed one, during the early morning hours.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "17/04/2022", 
          "Dead": "2", 
          "Description": "2022 Pittsburgh shooting: An early morning shooting at a party held at an Airbnb rental property in the East Allegheny neighborhood killed two juveniles, and wounded nine others. Five people sustained injuries such as broken bones and cuts when they jumped out windows to escape the gunfire.", 
          "Injured": "9", 
          "State": "Pennsylvania", 
          "Total": "11"
        }, 
        {
          "Date": "16/04/2022", 
          "Dead": "0", 
          "Description": "Four people were shot, including two children, during a house party.", 
          "Injured": "4", 
          "State": "Nevada", 
          "Total": "4"
        }, 
        {
          "Date": "16/04/2022", 
          "Dead": "0", 
          "Description": "An exchange of gunfire behind a bar left four wounded.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "16/04/2022", 
          "Dead": "1", 
          "Description": "Seven people were shot, one fatally, during a shooting at a pasture party and trail ride.", 
          "Injured": "6", 
          "State": "Texas", 
          "Total": "7"
        }, 
        {
          "Date": "16/04/2022", 
          "Dead": "1", 
          "Description": "A shooting killed one, and injured three others, in northwest Baltimore during the evening.", 
          "Injured": "3", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "16/04/2022", 
          "Dead": "0", 
          "Description": "Columbiana Centre shooting: Nine people were shot, and five others were injured while fleeing a shooting at the Columbiana Centre, after at least one person opened fire.", 
          "Injured": "9", 
          "State": "South Carolina", 
          "Total": "9"
        }, 
        {
          "Date": "16/04/2022", 
          "Dead": "0", 
          "Description": "An argument between two men at a bar escalated, with them opening fire on each other and wounding one another. Two bystanders were also shot.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "16/04/2022", 
          "Dead": "1", 
          "Description": "Shortly after midnight, five people were shot, one fatally, in the Armory Square neighborhood.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "5"
        }, 
        {
          "Date": "15/04/2022", 
          "Dead": "2", 
          "Description": "A group of people approached another group and opened fire, killing two and wounding two others in the Pacific neighborhood.", 
          "Injured": "2", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "15/04/2022", 
          "Dead": "1", 
          "Description": "Police officers responding to reports of a suspicious vehicle found a woman inside a Jeep, who refused to cooperate with officers. She then pulled out a gun when officers attempted to remove her from the vehicle and opened fire, wounding three officers before being fatally shot.", 
          "Injured": "3", 
          "State": "Kansas", 
          "Total": "4"
        }, 
        {
          "Date": "12/04/2022", 
          "Dead": "1", 
          "Description": "Four people were shot, one fatally, in the Allerton neighborhood of The Bronx.", 
          "Injured": "3", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "12/04/2022", 
          "Dead": "0", 
          "Description": "2022 New York City Subway attack: Ten people were shot when a gunman motivated by black supremacy opened fire on a New York City Subway train as it approached the 36th Street station in the Sunset Park neighborhood. Immediately before the attack, the assailant donned a gas mask and threw smoke bombs. The incident caused 19 others to be injured as they fled. The suspect was arrested the next day.", 
          "Injured": "10", 
          "State": "New York", 
          "Total": "10"
        }, 
        {
          "Date": "10/04/2022", 
          "Dead": "2", 
          "Description": "First responders found two men dead, and four others injured, after a shooting.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "10/04/2022", 
          "Dead": "2", 
          "Description": "A targeted shooting at a nightclub wounded ten, and killed two, after two men opened fire in the Oakhill Jackson neighborhood.", 
          "Injured": "10", 
          "State": "Iowa", 
          "Total": "12"
        }, 
        {
          "Date": "10/04/2022", 
          "Dead": "0", 
          "Description": "Police found three people shot at two related shootings, after a  victim flagged down a police cruiser.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "10/04/2022", 
          "Dead": "1", 
          "Description": "A fight at a birthday party being held at an event venue erupted into gunfire, with five people being injured, and another person being killed, both in and outside the building.", 
          "Injured": "5", 
          "State": "Indiana", 
          "Total": "6"
        }, 
        {
          "Date": "10/04/2022", 
          "Dead": "1", 
          "Description": "An early morning shooting at a gathering being held at an apartment complex killed one, and injured five.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "6"
        }, 
        {
          "Date": "09/04/2022", 
          "Dead": "0", 
          "Description": "A shooting carried out by two men across multiple blocks wounded four, including two teenagers.", 
          "Injured": "4", 
          "State": "Washington D.C.", 
          "Total": "4"
        }, 
        {
          "Date": "09/04/2022", 
          "Dead": "1", 
          "Description": "A fight inside a bar in the Wingate neighborhood spilled outside, where multiple men pulled out firearms and opened fire at each other, resulting in the death of one man, and injuries to three others.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "09/04/2022", 
          "Dead": "0", 
          "Description": "Four people were shot outside a convenience store in the Model City neighborhood during the early morning.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "07/04/2022", 
          "Dead": "4", 
          "Description": "A man fatally shot his estranged wife, a relative, and another person in a home before shooting himself.", 
          "Injured": "0", 
          "State": "Mississippi", 
          "Total": "4"
        }, 
        {
          "Date": "06/04/2022", 
          "Dead": "1", 
          "Description": "A man shot two women in the Frankford neighborhood before being pursued by police to an apartment building, where he barricaded himself inside and engaged in a gunfight with police. The man wounded a SEPTA police officer before fatally shooting himself.", 
          "Injured": "3", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "04/04/2022", 
          "Dead": "1", 
          "Description": "Four people were shot, one of them fatally, in the Clay Arsenal neighborhood.", 
          "Injured": "3", 
          "State": "Connecticut", 
          "Total": "4"
        }, 
        {
          "Date": "04/04/2022", 
          "Dead": "0", 
          "Description": "A large fight involving multiple juveniles erupted into gunfire. A shooter wounded three juveniles, and an adult man.", 
          "Injured": "4", 
          "State": "Kentucky", 
          "Total": "4"
        }, 
        {
          "Date": "03/04/2022", 
          "Dead": "2", 
          "Description": "Four people were shot, two fatally, near a playground in the Crocker-Amazon neighborhood.", 
          "Injured": "2", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "03/04/2022", 
          "Dead": "6", 
          "Description": "2022 Sacramento shooting: A shootout between the Crips and Bloods, and the Bloods' local ally the G-Mobb gang, ended with one member of each gang being killed, and one Crips member being injured. Three bystanders were killed, while another eleven were wounded.", 
          "Injured": "12", 
          "State": "California", 
          "Total": "18"
        }, 
        {
          "Date": "03/04/2022", 
          "Dead": "2", 
          "Description": "A man opened fire inside a home in Parkin, killing one and wounding another. Responding police spotted him as he drove west away from the scene, leading to a chase that ended in Wynne, where he engaged in a gunfight, wounding a police officer before being fatally shot.", 
          "Injured": "2", 
          "State": "Arkansas", 
          "Total": "4"
        }, 
        {
          "Date": "03/04/2022", 
          "Dead": "0", 
          "Description": "Four people were shot as they left a party in the Willert Park neighborhood in the early morning.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "03/04/2022", 
          "Dead": "1", 
          "Description": "During a concert just after midnight, a person fired a shot into the air, and immediately afterward, another person opened fire into the crowd of concertgoers. Sixteen people were shot, including three teenagers, and one person died.", 
          "Injured": "15", 
          "State": "Texas", 
          "Total": "16"
        }, 
        {
          "Date": "02/04/2022", 
          "Dead": "0", 
          "Description": "Five people were shot in two related shootings in the same neighborhood. Four people were shot in the first shooting, and a fifth was shot in the other.", 
          "Injured": "5", 
          "State": "Colorado", 
          "Total": "5"
        }, 
        {
          "Date": "02/04/2022", 
          "Dead": "1", 
          "Description": "Five people were shot, one fatally, in the parking lot of a bar in the early morning.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "02/04/2022", 
          "Dead": "1", 
          "Description": "Four people were shot in an early morning shooting outside a bar. One person was found dead by responding police.", 
          "Injured": "3", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "02/04/2022", 
          "Dead": "1", 
          "Description": "Four people were shot behind a bar, one fatally, just after midnight.", 
          "Injured": "3", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "01/04/2022", 
          "Dead": "0", 
          "Description": "An argument led to a gunfight that injured five near midnight.", 
          "Injured": "5", 
          "State": "South Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "31/03/2022", 
          "Dead": "2", 
          "Description": "Police officers responding to a home robbery were fired upon by the suspect, who wounded two, and killed one. Officers returned fire and killed the suspect.", 
          "Injured": "2", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "29/03/2022", 
          "Dead": "0", 
          "Description": "A motorist fleeing a traffic stop opened fire as he was being pursued by police, wounding three officers, before being shot by an officer at the end of a car chase.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "28/03/2022", 
          "Dead": "0", 
          "Description": "A shooting during an illegal street-racing event in the St. Johns neighborhood wounded four, including two teenagers, and one child. The suspect, an adult male, was also injured.", 
          "Injured": "4", 
          "State": "Oregon", 
          "Total": "4"
        }, 
        {
          "Date": "27/03/2022", 
          "Dead": "2", 
          "Description": "A shooting at an intersection in the Little Woods neighborhood killed two, and injured two others.", 
          "Injured": "2", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "26/03/2022", 
          "Dead": "2", 
          "Description": "A drive-by shooting in northern Hollister killed two, and injured three.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "26/03/2022", 
          "Dead": "0", 
          "Description": "A shooting at a downtown nightclub during the early morning hours wounded four.", 
          "Injured": "4", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "26/03/2022", 
          "Dead": "0", 
          "Description": "An argument between two groups of people outside a bar in Northwest Virginia Beach just after midnight led to a shooting that injured four. Officers nearby responded and fired at one of the shooters, but they escaped uninjured.", 
          "Injured": "4", 
          "State": "Virginia", 
          "Total": "4"
        }, 
        {
          "Date": "25/03/2022", 
          "Dead": "2", 
          "Description": "A fight outside The Citadel mall during the late evening escalated into a shooting that killed two, and wounded two others.", 
          "Injured": "2", 
          "State": "Colorado", 
          "Total": "4"
        }, 
        {
          "Date": "23/03/2022", 
          "Dead": "0", 
          "Description": "An argument between two groups of people at a Tanger Outlets mall led to a shooting that injured five, including a child and two teenagers.", 
          "Injured": "5", 
          "State": "Arizona", 
          "Total": "5"
        }, 
        {
          "Date": "23/03/2022", 
          "Dead": "0", 
          "Description": "An attempted burglary at a home led to a gunfight, with two residents being injured, and two robbers being injured.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "22/03/2022", 
          "Dead": "1", 
          "Description": "Four men, including a teenager, were shot in a parking lot just after midnight in the Valley Oak neighborhood. The teenager died as he was frantically driven to a hospital by a family member.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "21/03/2022", 
          "Dead": "2", 
          "Description": "Four men were shot by someone who approached them and opened fire as they stood on the sidewalk in the South Shore neighborhood. Two of the victims later died from their injuries.", 
          "Injured": "2", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "21/03/2022", 
          "Dead": "0", 
          "Description": "Four people were shot outside of a bar after an altercation.", 
          "Injured": "4", 
          "State": "Connecticut", 
          "Total": "4"
        }, 
        {
          "Date": "20/03/2022", 
          "Dead": "0", 
          "Description": "Crossfire between two gunmen injured 10 victims from a crowd of 1,000 spring break celebration attendees at the 'Space Dallas' party hall.", 
          "Injured": "10", 
          "State": "Texas", 
          "Total": "10"
        }, 
        {
          "Date": "20/03/2022", 
          "Dead": "0", 
          "Description": "An argument at a party led to someone opening fire, wounding four people, in the Franklin Heights neighborhood.", 
          "Injured": "4", 
          "State": "Wisconsin", 
          "Total": "4"
        }, 
        {
          "Date": "20/03/2022", 
          "Dead": "1", 
          "Description": "Four teenagers were shot outside another teen's birthday party being held at a production studio, with one dying from their injuries. The shooting was sparked by an argument in the parking lot of the studio.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "20/03/2022", 
          "Dead": "0", 
          "Description": "Four people were shot at the annual SXSW festival in Downtown Austin.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "19/03/2022", 
          "Dead": "3", 
          "Description": "Five people were shot, three fatally, in the parking lot of a Baymont Inn in the Terry Sanford neighborhood.", 
          "Injured": "2", 
          "State": "North Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "19/03/2022", 
          "Dead": "0", 
          "Description": "Ten people were shot during a drive-by shooting outside a party venue in the South Dallas neighborhood.", 
          "Injured": "10", 
          "State": "Texas", 
          "Total": "10"
        }, 
        {
          "Date": "19/03/2022", 
          "Dead": "1", 
          "Description": "A gunfight between two people at a car show killed one bystander, and wounded 26 others, including five children.", 
          "Injured": "26", 
          "State": "Arkansas", 
          "Total": "27"
        }, 
        {
          "Date": "19/03/2022", 
          "Dead": "1", 
          "Description": "During the early morning hours, five people were shot. A woman was found dead by responding police.", 
          "Injured": "4", 
          "State": "Virginia", 
          "Total": "5"
        }, 
        {
          "Date": "19/03/2022", 
          "Dead": "2", 
          "Description": "Five people were shot, one fatally, during the early morning hours in Downtown Norfolk.", 
          "Injured": "3", 
          "State": "Virginia", 
          "Total": "5"
        }, 
        {
          "Date": "18/03/2022", 
          "Dead": "0", 
          "Description": "Five people, including a baby, were shot in a drive by shooting. The baby and another person were critically injured.", 
          "Injured": "5", 
          "State": "Louisiana", 
          "Total": "5"
        }, 
        {
          "Date": "18/03/2022", 
          "Dead": "1", 
          "Description": "Four people were shot at a party being hosted at a house in the Far Greater Northside Historical neighborhood, with one dying.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "17/03/2022", 
          "Dead": "0", 
          "Description": "Gunfire erupted at a party being held in a parking lot being held in the Eastside neighborhood. Four people were injured.", 
          "Injured": "4", 
          "State": "Michigan", 
          "Total": "4"
        }, 
        {
          "Date": "17/03/2022", 
          "Dead": "2", 
          "Description": "As a Broward County Transit bus traveled westward along Broward Boulevard to the Fort Lauderdale Police Department, a shooter opened fire inside, killing two, and wounding two others. The shooting caused the bus driver to hop the median and drive on the wrong side of the road as she drove frantically towards the police station, striking an SUV and taxi cab along the way, injuring three others. The shooter surrendered to responding police.", 
          "Injured": "2", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "17/03/2022", 
          "Dead": "0", 
          "Description": "Four people were shot in a drive-by shooting in the West Garfield Park neighborhood, including a child.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "16/03/2022", 
          "Dead": "1", 
          "Description": "A shooter opened fire on a group of men standing outside a market in northern Irvington during the late-night hours, killing one, and injuring three.", 
          "Injured": "3", 
          "State": "New Jersey", 
          "Total": "4"
        }, 
        {
          "Date": "15/03/2022", 
          "Dead": "0", 
          "Description": "As a car idled at an intersection, another car pulled up to it and someone inside opened fire, wounding five people inside.", 
          "Injured": "5", 
          "State": "Alabama", 
          "Total": "5"
        }, 
        {
          "Date": "15/03/2022", 
          "Dead": "1", 
          "Description": "An attempted negotiation between a man and suspected thieves, who he thought stole a gun and cash from his car three days earlier, escalated into a gun battle after one of the suspects shot the man before the man returned fire and killed the suspect. As an employee of the man tried to render first-aid to the first suspect, a second suspect shot them before being shot themselves.", 
          "Injured": "3", 
          "State": "Hawaii", 
          "Total": "4"
        }, 
        {
          "Date": "14/03/2022", 
          "Dead": "2", 
          "Description": "A man shot three people, killing one, in the Glenwood Hills neighborhood. Responding police were attacked by the shooter, who injured two officers, before being shot and killed himself.", 
          "Injured": "4", 
          "State": "New Mexico", 
          "Total": "6"
        }, 
        {
          "Date": "14/03/2022", 
          "Dead": "1", 
          "Description": "A fight among a large group of teenagers at a park in southwest Reading led to gunfire, wounding three, and killing one. All of the victims were students of Governor Mifflin School District.", 
          "Injured": "3", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "13/03/2022", 
          "Dead": "0", 
          "Description": "A car pulled up to a group of people outside a Little Caesars in South Chicago and someone in the vehicle opened fire, wounding seven people.", 
          "Injured": "7", 
          "State": "Illinois", 
          "Total": "7"
        }, 
        {
          "Date": "13/03/2022", 
          "Dead": "1", 
          "Description": "An early morning shooting during a party being held at an apartment lead to the death of a woman, and injuries to four others, including two teenagers. The apartment complex is located just off the campus of the University of South Carolina, but no students were shot.", 
          "Injured": "4", 
          "State": "South Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "13/03/2022", 
          "Dead": "2", 
          "Description": "In the early morning hours at a hookah bar, four people were shot\ufffd\ufffdtwo fatally, in the Brown Square neighborhood.", 
          "Injured": "2", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "12/03/2022", 
          "Dead": "1", 
          "Description": "Four people were shot, one fatally, in the evening hours in the central part of the city.", 
          "Injured": "3", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "12/03/2022", 
          "Dead": "3", 
          "Description": "Police responding to a shots fired call found a car in the middle of an intersection between the Gwynn Oak and Howard Park neighborhoods with four men shot inside. Three of the men were pronounced dead at a hospital.", 
          "Injured": "1", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "11/03/2022", 
          "Dead": "1", 
          "Description": "Four people were shot, including a security guard, shortly after midnight after a fight broke out at a bar. One of the victims died from their injuries.", 
          "Injured": "3", 
          "State": "Ohio", 
          "Total": "4"
        }, 
        {
          "Date": "09/03/2022", 
          "Dead": "1", 
          "Description": "Four people were shot at a Quality Inn hotel near the pool in the Peterson neighborhood. A teen boy was found dead by responding police.", 
          "Injured": "3", 
          "State": "Colorado", 
          "Total": "4"
        }, 
        {
          "Date": "08/03/2022", 
          "Dead": "1", 
          "Description": "Five teenagers were shot by an attacker while they sat in a car in the Oceanway neighborhood. One of the teenagers died from their injuries.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "08/03/2022", 
          "Dead": "3", 
          "Description": "Police officers responding to a disturbance at Northpark Mall were fired upon by a shooter, leaving two officers injured. The perpetrator then fled the scene westward where another shooting between officers and the shooter occurred, leaving another officer injured as well as the attacker. One of the officers, as well as the attacker, died at a hospital later the same day, while another officer died a few days later.", 
          "Injured": "1", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "07/03/2022", 
          "Dead": "0", 
          "Description": "Three people were shot in a car in northwest Knoxville, with a fourth person also being shot a short distance away.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "06/03/2022", 
          "Dead": "0", 
          "Description": "Four people who were dining inside a seafood restaurant in the Phoenix Hill neighborhood were shot in a drive-by shooting.", 
          "Injured": "4", 
          "State": "Kentucky", 
          "Total": "4"
        }, 
        {
          "Date": "06/03/2022", 
          "Dead": "0", 
          "Description": "Four people were shot in the Parkway and Cherry Point neighborhood in the early morning hours.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "06/03/2022", 
          "Dead": "1", 
          "Description": "In the early morning hours, an argument at a home in the Whittier neighborhood escalated into a shooting that killed one, and injured three.", 
          "Injured": "3", 
          "State": "Minnesota", 
          "Total": "4"
        }, 
        {
          "Date": "06/03/2022", 
          "Dead": "1", 
          "Description": "A fight between a group of people spiraled into a shooting that injured five teenagers, one of whom died at a hospital.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "06/03/2022", 
          "Dead": "0", 
          "Description": "A fight at a party being hosted at an OYO Rooms hotel led to four people being shot shortly after midnight.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "06/03/2022", 
          "Dead": "2", 
          "Description": "Half an hour after midnight a man shot five people, killing two. The perpetrator escaped the scene of the shooting, leading to a manhunt.", 
          "Injured": "3", 
          "State": "South Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "05/03/2022", 
          "Dead": "1", 
          "Description": "A shooting injured three, including a teenager, and killed a man in eastern Glendale.", 
          "Injured": "3", 
          "State": "Arizona", 
          "Total": "4"
        }, 
        {
          "Date": "05/03/2022", 
          "Dead": "0", 
          "Description": "After a failed car chase to capture car thieves, the criminals crashed the car into the patrol car of another officer who hadn't participated in the earlier car chase. The occupants of the stolen car exited the vehicle and opened fire on the deputy, wounding him. The officer returned fire and wounded the two attackers. A bystander who was in an automotive shop nearby was struck in the leg by gunfire.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "05/03/2022", 
          "Dead": "0", 
          "Description": "Four people were shot when someone in a car opened fire on another car on I-75, wounding three people inside. Another car, whose occupants were not the intended target, was also shot, and one person inside was injured. A fifth victim was also struck by gunfire but was not injured.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "03/03/2022", 
          "Dead": "1", 
          "Description": "A dispute between neighbors led to a shooting that injured seven, one fatally, near the Las Vegas Strip.", 
          "Injured": "6", 
          "State": "Nevada", 
          "Total": "7"
        }, 
        {
          "Date": "02/03/2022", 
          "Dead": "1", 
          "Description": "Four men were shot in the Walbrook neighborhood. One of the victims was found dead in an alleyway by responding police.", 
          "Injured": "3", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "28/02/2022", 
          "Dead": "5", 
          "Description": "A man fatally shot his three children and the children's chaperone, before shooting himself, at a church during a supervised visit. A restraining order against the father prevented him from seeing his children, except for four-hour sessions, in which a friend of the mother had to be present.", 
          "Injured": "0", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "27/02/2022", 
          "Dead": "0", 
          "Description": "An argument between two groups of people at a Dave and Buster's late Sunday night led to shooting that injured four. All of the victims were members of the two groups.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "27/02/2022", 
          "Dead": "0", 
          "Description": "An argument at a business in the southeast part of the city led to four people being shot.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "26/02/2022", 
          "Dead": "1", 
          "Description": "Four people were shot in the southern part of the city, and one victim died at a hospital later the same day.", 
          "Injured": "3", 
          "State": "South Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "26/02/2022", 
          "Dead": "0", 
          "Description": "After the conclusion of a parade, a man fired at people in front of a store from his car, wounding several. Multiple people in the crowd fired back, seriously wounding the attacker.", 
          "Injured": "10", 
          "State": "Louisiana", 
          "Total": "10"
        }, 
        {
          "Date": "26/02/2022", 
          "Dead": "1", 
          "Description": "An exchange of gunfire between people in southwest Albuquerque led to four people being shot, and one victim dying from their injuries.", 
          "Injured": "3", 
          "State": "New Mexico", 
          "Total": "4"
        }, 
        {
          "Date": "26/02/2022", 
          "Dead": "1", 
          "Description": "An argument between two men at a hookah bar east of the Las Vegas strip led to the two men opening fire on each other. The subsequent shooting resulted in the death of one, and injuries to thirteen others.", 
          "Injured": "13", 
          "State": "Nevada", 
          "Total": "14"
        }, 
        {
          "Date": "25/02/2022", 
          "Dead": "2", 
          "Description": "A shooter inside a car opened fire on the occupants of another car near the entrance of the Mall of Louisiana, killing two of the people inside, and wounding the other two.", 
          "Injured": "2", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "24/02/2022", 
          "Dead": "4", 
          "Description": "Four people were shot and killed in a murder\ufffdCsuicide, including two children in northeastern Granbury.", 
          "Injured": "0", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "24/02/2022", 
          "Dead": "0", 
          "Description": "A shooter opened fire on three people inside a car in the Serna Station neighborhood. A fourth person who was not targeted by the shooter was also struck by gunfire.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "23/02/2022", 
          "Dead": "0", 
          "Description": "A man shot another man at a home in northern Claxton. When two family members of the victim arrived on the scene to check on him, the shooter shot them in their car, and was promptly shot by responding police.", 
          "Injured": "4", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "22/02/2022", 
          "Dead": "1", 
          "Description": "A man ambushed another man, some of his family members, and a neighbor who was a police officer in the victim's backyard due to a feud with his target. The deputy, who was not shot, returned fire and killed the shooter.", 
          "Injured": "3", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "21/02/2022", 
          "Dead": "1", 
          "Description": "Multiple shooters opened fire outside a funeral home hosting a memorial for a gun violence victim in the West Side neighborhood, resulting in the death of a man, and injuries to three others.", 
          "Injured": "3", 
          "State": "Minnesota", 
          "Total": "4"
        }, 
        {
          "Date": "20/02/2022", 
          "Dead": "0", 
          "Description": "A shooting at a grocery store in the Prospect Hill neighborhood left four injured, including a teenager.", 
          "Injured": "4", 
          "State": "Nebraska", 
          "Total": "4"
        }, 
        {
          "Date": "20/02/2022", 
          "Dead": "1", 
          "Description": "Four people were shot in a car in southeast Portland, with the female driver being killed. Among the injured were two young children.", 
          "Injured": "3", 
          "State": "Oregon", 
          "Total": "4"
        }, 
        {
          "Date": "20/02/2022", 
          "Dead": "1", 
          "Description": "A child was killed in a drive-by shooting targeting a group of people playing basketball at a park. Four others were injured.", 
          "Injured": "4", 
          "State": "Mississippi", 
          "Total": "5"
        }, 
        {
          "Date": "19/02/2022", 
          "Dead": "1", 
          "Description": "Normandale Park shooting: Near an racial justice protest, a man allegedly confronted a group of protestors and engaged in an argument with them, before pulling out a gun and opening fire, killing one and wounding four others. One of the people in the group allegedly returned fire and wounded the perpetrator.", 
          "Injured": "5", 
          "State": "Oregon", 
          "Total": "6"
        }, 
        {
          "Date": "19/02/2022", 
          "Dead": "0", 
          "Description": "A shooter opened fire in the food court of University Mall, shooting and injuring a woman. Three others were injured by shrapnel or bullet fragments.", 
          "Injured": "4", 
          "State": "Alabama", 
          "Total": "4"
        }, 
        {
          "Date": "19/02/2022", 
          "Dead": "2", 
          "Description": "An argument at a party being held at an abandoned building led to a shooting that injured fourteen, and killed two.", 
          "Injured": "14", 
          "State": "Missouri", 
          "Total": "16"
        }, 
        {
          "Date": "19/02/2022", 
          "Dead": "0", 
          "Description": "A man shot seven people outside a bar in the early morning hours in a targeted shooting perpetrated against one of the victims.", 
          "Injured": "7", 
          "State": "California", 
          "Total": "7"
        }, 
        {
          "Date": "19/02/2022", 
          "Dead": "2", 
          "Description": "Four men were shot at a Campus Apartments complex near North Carolina Central University and Duke University. Two were found dead by responding police, and none of the victims were students of either school.", 
          "Injured": "2", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "17/02/2022", 
          "Dead": "0", 
          "Description": "Four bystanders, including a teen girl, were shot when two men shot at each other outside a RiteAid drugstore in the East Germantown neighborhood.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "4"
        }, 
        {
          "Date": "17/02/2022", 
          "Dead": "0", 
          "Description": "During a biker event at a nightclub in the MacGregor neighborhood, an argument led to a shootout between patrons, which injured five people. Among the wounded was the club's bouncer.", 
          "Injured": "5", 
          "State": "Texas", 
          "Total": "5"
        }, 
        {
          "Date": "16/02/2022", 
          "Dead": "1", 
          "Description": "Three men were wounded, and one was killed, in an ambush-style shooting in the afternoon. Two sedans pulled up alongside them on the street and opened fire.", 
          "Injured": "3", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "15/02/2022", 
          "Dead": "1", 
          "Description": "Four men were shot in northeast Joliet in the evening. One of the men was found dead by responding police.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "13/02/2022", 
          "Dead": "1", 
          "Description": "Officers responding to an early morning shots fired call engaged in a foot chase with an armed man who had shot five people. After an attempted negotiation, he committed suicide.", 
          "Injured": "5", 
          "State": "Wisconsin", 
          "Total": "6"
        }, 
        {
          "Date": "12/02/2022", 
          "Dead": "0", 
          "Description": "Outside an Italian restaurant hosting a party by Justin Bieber, a fight between a group of men escalated when a shooter opened fire, wounding four, including musician Kodak Black.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "12/02/2022", 
          "Dead": "1", 
          "Description": "In the early morning hours, four people were shot in eastern Little Rock, with one person succumbing to their injuries.", 
          "Injured": "3", 
          "State": "Arkansas", 
          "Total": "4"
        }, 
        {
          "Date": "12/02/2022", 
          "Dead": "1", 
          "Description": "An argument outside a hookah bar in the early morning hours escalated when a shooter opened fire, wounding four, and killing one.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "5"
        }, 
        {
          "Date": "11/02/2022", 
          "Dead": "0", 
          "Description": "A driver shot at another car, wounding four people inside in northwest Springfield.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "11/02/2022", 
          "Dead": "2", 
          "Description": "Responding to a call of a woman being shot, a shooter ambushed a responding officer and shot him several times. As a man fled the home with a baby, and officers attempted to aid in protecting the baby, the shooter shot four more officers, with four more being injured by bullet shrapnel. The shooter then barricaded himself inside the home, and was later found dead, along with a female victim.", 
          "Injured": "9", 
          "State": "Arizona", 
          "Total": "11"
        }, 
        {
          "Date": "06/02/2022", 
          "Dead": "2", 
          "Description": "A chance encounter between two rival gangs at an apartment complex in Southwest Fresno escalated into a shootout, with four gang members being shot, including a teenager. Two men died from their injuries.", 
          "Injured": "2", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "06/02/2022", 
          "Dead": "0", 
          "Description": "A shooter fired at a crowd gathered to celebrate the life of a gun violence victim and wounded four, including a child and a teenager, in the Montgomery Place neighborhood.", 
          "Injured": "4", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "06/02/2022", 
          "Dead": "0", 
          "Description": "In the early morning hours, a fight at a bar led to a patron being removed from the building, after which the patron opened fire from outside the bar and wounded four other patrons.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "4"
        }, 
        {
          "Date": "06/02/2022", 
          "Dead": "0", 
          "Description": "A physical altercation in the early morning hours at a Bowlero bowling alley led to a shooting, with five people being wounded.", 
          "Injured": "5", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "05/02/2022", 
          "Dead": "6", 
          "Description": "A man shot four of his own family members, three fatally, in Corsicana before driving to Frost where he shot three more of his own family, killing two, including a child. After his vehicle was remotely shut off via a vehicle monitoring service, the Corsicana SWAT team closed in on his location. Before they could reach him, the shooter shot himself, and later died from his injuries.", 
          "Injured": "2", 
          "State": "Texas", 
          "Total": "8"
        }, 
        {
          "Date": "05/02/2022", 
          "Dead": "0", 
          "Description": "Four people were shot in southern Las Cruces, with two teenagers requiring medical evacuation via helicopter to El Paso.", 
          "Injured": "4", 
          "State": "New Mexico", 
          "Total": "4"
        }, 
        {
          "Date": "04/02/2022", 
          "Dead": "1", 
          "Description": "Five people, including a college student at nearby Virginia Tech, which went on lockdown, were shot at a hookah lounge. One person succumbed to their injuries.", 
          "Injured": "4", 
          "State": "Virginia", 
          "Total": "5"
        }, 
        {
          "Date": "02/02/2022", 
          "Dead": "1", 
          "Description": "Five people were wounded, one fatally, by a shooter in a Greyhound bus. The shooter was later apprehended by police at a nearby Walmart after he got into a physical altercation with a customer and took off all his clothes.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "01/02/2022", 
          "Dead": "0", 
          "Description": "A fight between two teenage girls about a Facebook post during a basketball game at Rufus King International High School escalated when a man opened fire, wounding four teenage girls, and an adult woman.", 
          "Injured": "5", 
          "State": "Wisconsin", 
          "Total": "5"
        }, 
        {
          "Date": "31/01/2022", 
          "Dead": "0", 
          "Description": "Four people were shot at a motel in the late evening hours. Two of the victims were shot in the motel parking lot, while the other two were shot in their rooms.", 
          "Injured": "4", 
          "State": "North Carolina", 
          "Total": "4"
        }, 
        {
          "Date": "30/01/2022", 
          "Dead": "1", 
          "Description": "Two cars engaged in a running gun battle. Four people, including two teenagers, were shot in one of the cars, with a fifth also being wounded in the other car. An adult passenger in the first vehicle was killed.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "30/01/2022", 
          "Dead": "1", 
          "Description": "Four people were shot in the early morning hours at a club. A man was found dead by responding police.", 
          "Injured": "3", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "29/01/2022", 
          "Dead": "0", 
          "Description": "Four people were shot at a bar during the late evening hours in the Polo Grounds neighborhood.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "29/01/2022", 
          "Dead": "3", 
          "Description": "Four men were shot near an intersection in the Kingsway East neighborhood, with two found dead at the scene. Another man died at a hospital, and the surviving victim ran to a nearby convenience store for help.", 
          "Injured": "1", 
          "State": "Missouri", 
          "Total": "4"
        }, 
        {
          "Date": "29/01/2022", 
          "Dead": "1", 
          "Description": "An argument escalated into a shooting outside a sports bar in the Vine City neighborhood shortly after midnight, with one person being fatally shot, and three others being injured by gunfire.", 
          "Injured": "3", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "28/01/2022", 
          "Dead": "4", 
          "Description": "A man shot his wife and two children in a murder\ufffdCsuicide at his home.", 
          "Injured": "0", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "27/01/2022", 
          "Dead": "2", 
          "Description": "Two people were fatally shot at a Shell gas station, with three others being wounded.", 
          "Injured": "3", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "27/01/2022", 
          "Dead": "1", 
          "Description": "Five people were shot at a Days Inn hotel in the Forest Hills neighborhood. A woman later succumbed to her injuries.", 
          "Injured": "4", 
          "State": "Washington D.C.", 
          "Total": "5"
        }, 
        {
          "Date": "23/01/2022", 
          "Dead": "6", 
          "Description": "Six people were found by police shot to death in a home after being called there for a welfare check in the Park West neighborhood.", 
          "Injured": "0", 
          "State": "Wisconsin", 
          "Total": "6"
        }, 
        {
          "Date": "23/01/2022", 
          "Dead": "4", 
          "Description": "Four people were fatally shot at a birthday party at a home in the morning in an ambush-style attack. A fifth person was shot but survived their injuries. The woman whose birthday was being celebrated, along with her older sister, were among the deceased.", 
          "Injured": "1", 
          "State": "California", 
          "Total": "5"
        }, 
        {
          "Date": "22/01/2022", 
          "Dead": "1", 
          "Description": "Four people were shot by an occupant in an approaching vehicle outside an apartment complex in the South End neighborhood while they were in two vehicles. Two of the victims drove away together to Tacoma, where one of them was found dead by police.", 
          "Injured": "3", 
          "State": "Washington", 
          "Total": "4"
        }, 
        {
          "Date": "19/01/2022", 
          "Dead": "1", 
          "Description": "Four people were wounded after a drive-by shooting at a bar. An off-duty officer returned fire, killing one of the suspects.", 
          "Injured": "4", 
          "State": "United States Virgin Islands", 
          "Total": "5"
        }, 
        {
          "Date": "19/01/2022", 
          "Dead": "3", 
          "Description": "Three men, including an on-duty violence-prevention worker, were fatally shot in the Milton-Monford neighborhood. Another man who was shot survived his injuries.", 
          "Injured": "1", 
          "State": "Maryland", 
          "Total": "4"
        }, 
        {
          "Date": "19/01/2022", 
          "Dead": "0", 
          "Description": "Four men were injured when a vehicle approached them and multiple occupants opened fire upon them. The victims returned fire, and the attackers fled.", 
          "Injured": "4", 
          "State": "Louisiana", 
          "Total": "4"
        }, 
        {
          "Date": "18/01/2022", 
          "Dead": "1", 
          "Description": "After a man was escorted out of a bar for assaulting his female companion, he drove away, and later returned with a gun and opened fire on the bar's security guards, with three female patrons and one security guard being wounded. A security guard inside the bar returned fire, and killed the shooter.", 
          "Injured": "4", 
          "State": "Florida", 
          "Total": "5"
        }, 
        {
          "Date": "17/01/2022", 
          "Dead": "0", 
          "Description": "Four people were shot at a Martin Luther King Jr. Day gathering in the Coliseum Willow Park neighborhood.", 
          "Injured": "4", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "16/01/2022", 
          "Dead": "1", 
          "Description": "Four people, including two teens, were shot in the Benjamin Van Clark Park neighborhood. A woman died from her injuries, and five vehicles were struck by gunfire.", 
          "Injured": "3", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "15/01/2022", 
          "Dead": "1", 
          "Description": "One person was killed, and five others injured, after two men shot at one another inside a club.", 
          "Injured": "5", 
          "State": "Georgia", 
          "Total": "6"
        }, 
        {
          "Date": "15/01/2022", 
          "Dead": "0", 
          "Description": "Four women were shot in a parked car in the early morning hours. The driver then drove them all to a hospital.", 
          "Injured": "4", 
          "State": "Tennessee", 
          "Total": "4"
        }, 
        {
          "Date": "14/01/2022", 
          "Dead": "0", 
          "Description": "A shooting broke out just before the start of a rap concert at W.O.W. Hall, resulting in six injuries.", 
          "Injured": "6", 
          "State": "Oregon", 
          "Total": "6"
        }, 
        {
          "Date": "14/01/2022", 
          "Dead": "3", 
          "Description": "A man shot three people in southern Augusta, two fatally, before committing suicide.", 
          "Injured": "1", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "13/01/2022", 
          "Dead": "0", 
          "Description": "Three men and a woman were shot inside of a rental hall in the Canarsie section of Brooklyn.", 
          "Injured": "4", 
          "State": "New York", 
          "Total": "4"
        }, 
        {
          "Date": "12/01/2022", 
          "Dead": "0", 
          "Description": "Four people were wounded at the Parkway Garden Homes apartment complex in the Greater Grand Crossing neighborhood on the South Side, while standing on the sidewalk. A man approached them and opened fire before fleeing.", 
          "Injured": "4", 
          "State": "Illinois", 
          "Total": "4"
        }, 
        {
          "Date": "09/01/2022", 
          "Dead": "1", 
          "Description": "A gunman opened fire at a large party in South Los Angeles, wounding five people, while another party-goer returned fire and wounded the shooter. The shooter fled in a vehicle, which later crashed, and died at a hospital.", 
          "Injured": "5", 
          "State": "California", 
          "Total": "6"
        }, 
        {
          "Date": "09/01/2022", 
          "Dead": "1", 
          "Description": "A man was killed, and six others, including four bystanders, were wounded inside a bowling alley after an argument escalated. The shooter fled afterwards.", 
          "Injured": "6", 
          "State": "Alabama", 
          "Total": "7"
        }, 
        {
          "Date": "09/01/2022", 
          "Dead": "0", 
          "Description": "Four people were wounded outside a nightclub after an argument between two people escalated.", 
          "Injured": "4", 
          "State": "California", 
          "Total": "4"
        }, 
        {
          "Date": "09/01/2022", 
          "Dead": "2", 
          "Description": "Responding officers found two people dead, and at least two injured, at an apartment complex in the early morning.", 
          "Injured": "2", 
          "State": "Colorado", 
          "Total": "4"
        }, 
        {
          "Date": "08/01/2022", 
          "Dead": "1", 
          "Description": "A gunman opened fire outside a club, killing one, and wounding three others.", 
          "Injured": "3", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "04/01/2022", 
          "Dead": "1", 
          "Description": "One teen was shot to death, while three other teens were injured while sitting in a car at a gas station.", 
          "Injured": "3", 
          "State": "Mississippi", 
          "Total": "4"
        }, 
        {
          "Date": "02/01/2022", 
          "Dead": "2", 
          "Description": "Two men were found deceased in a crashed car with multiple gunshots. Two other adults in the backseat were wounded.", 
          "Injured": "2", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "02/01/2022", 
          "Dead": "2", 
          "Description": "An altercation led to a shooting at an apartment complex. Two people were killed, and another was wounded, after bullets went through a wall. A fourth person was injured in another apartment.", 
          "Injured": "2", 
          "State": "Texas", 
          "Total": "4"
        }, 
        {
          "Date": "01/01/2022", 
          "Dead": "2", 
          "Description": "Two women were killed, and three others wounded, in an early morning shooting.", 
          "Injured": "3", 
          "State": "Illinois", 
          "Total": "5"
        }, 
        {
          "Date": "01/01/2022", 
          "Dead": "1", 
          "Description": "A teenager was killed, and three adults and another teenager were wounded, in a shooting near Temple University.", 
          "Injured": "4", 
          "State": "Pennsylvania", 
          "Total": "5"
        }, 
        {
          "Date": "01/01/2022", 
          "Dead": "0", 
          "Description": "A shooter opened fire outside a nightclub, and wounded five.", 
          "Injured": "5", 
          "State": "South Carolina", 
          "Total": "5"
        }, 
        {
          "Date": "01/01/2022", 
          "Dead": "1", 
          "Description": "After officers were dispatched to respond to a domestic dispute at a home and they were en route, the call was upgraded to shots fired. Upon arriving, officers found a man had killed himself after shooting three people, including two children.", 
          "Injured": "3", 
          "State": "Georgia", 
          "Total": "4"
        }, 
        {
          "Date": "01/01/2022", 
          "Dead": "1", 
          "Description": "A man was killed, and three others wounded, in a shooting in a parking lot in the early morning.", 
          "Injured": "3", 
          "State": "Wisconsin", 
          "Total": "4"
        }, 
        {
          "Date": "01/01/2022", 
          "Dead": "0", 
          "Description": "Four people were wounded at a shooting at a New Years party shortly after midnight.", 
          "Injured": "4", 
          "State": "Indiana", 
          "Total": "4"
        }, 
        {
          "Date": "01/01/2022", 
          "Dead": "2", 
          "Description": "Two adults were killed, and two wounded, in an early morning shooting in the LoDo district.", 
          "Injured": "2", 
          "State": "Colorado", 
          "Total": "4"
        }, 
        {
          "Date": "01/01/2022", 
          "Dead": "0", 
          "Description": "Four adults were wounded in the early morning in a shooting at a local bar.", 
          "Injured": "4", 
          "State": "Missouri", 
          "Total": "4"
        }
      ]
      
  }
}

module.exports = ShootController;
