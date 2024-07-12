const today=()=>{const t=new Date;return{date:t.getDate(),month:t.toLocaleString("en-US",{month:"long"}),year:t.getFullYear()}},MODES={dev:"development",prod:"production"},TYPES={DTC:"DTC",FF:"FF"},TYPE=TYPES.FF,MODE=MODES.dev,geo=MODE===MODES.dev?"Location":document.body.dataset.geo,price=MODE===MODES.dev?"$price":document.body.dataset.price,url=document.body.dataset.url,BASE_URL=TYPE===TYPES.FF?"/Yeti-Backpack-FF-Stav1":"/Yeti-Backpack-DTC-Stav1",PREFIX=MODE===MODES.dev?".":BASE_URL,EMOJIS={sad:"sad.webp",wow:"wow.webp",heart:"heart.webp",haha:"haha.webp",care:"care.webp",like:"like.webp"},OFFICIAL_AUTHOR={avatar:"authors/yeti-official.png",fullName:"YETI Official",isOfficial:!0},THUMBS=["home-page-product.png"],CLARITY_ID="",WITH_CLARITY=!1,COMMENTS=[{author:{avatar:"authors/salie-hull.png",fullName:"Salie Hull"},text:"I didn't win 😭 but congrats to everyone who did! Maybe next time.",time:"5m ago",reactions:{count:4,emojis:[EMOJIS.sad]},comments:[{author:{avatar:"authors/linda-brown.png",fullName:"Linda Brown"},text:"Don't give up, Mark! There's always hope for the next giveaway.",time:"4m ago"},{author:OFFICIAL_AUTHOR,text:"Try next time!",time:"4m ago"}]},{author:{avatar:"authors/jane-smith.png",fullName:"Jane Smith"},text:"Just finished the survey and I won! Can't wait to use my new YETI cooler this summer. Thank you! 🙌",time:"5m ago",reactions:{count:8,emojis:[EMOJIS.heart]},comments:[]},{author:{avatar:"authors/lucas-silva.png",fullName:"Lucas Silva"},text:"I can't believe it, I won! 🎉 Thanks so much, YETI!",time:"11m ago",attachment:"attachments/lucas-silva.png",reactions:{count:36,emojis:[EMOJIS.like,EMOJIS.heart,EMOJIS.sad]},comments:[{author:OFFICIAL_AUTHOR,text:"Awesome, Lucas! Enjoy your time at the beach with your new YETI Cooler.",time:"4m ago",reactions:{count:4,emojis:[EMOJIS.heart]}}]},{author:{avatar:"authors/sarah-lee.png",fullName:"Sarah Lee"},text:"Did anyone else have trouble with the link? It keeps taking me to an error page.",time:"16m ago",comments:[{author:{avatar:"authors/kai-zhang.png",fullName:"Kai Zhang"},text:"Worked fine for me. Maybe try a different browser?",time:"14m ago"}]},{author:{avatar:"authors/tom-harris.png",fullName:"Tom Harris"},text:"Scam alert! This is too good to be true. No way they’re giving away 1000 coolers.",time:"5m ago",comments:[{author:{avatar:"authors/sofia-martinez.png",fullName:"Sofia Martinez"},text:"It’s legit! I just won one. Sometimes good things do happen, Tom.",time:"4m ago",reactions:{count:2,emojis:[EMOJIS.heart,EMOJIS.sad]}},{author:{avatar:"authors/liam-o-connor.png",fullName:"Liam O'Connor"},text:"@Tom Harris Ok boomer 😂 ",time:"5m ago",reactions:{count:7,emojis:[EMOJIS.haha]}},{author:{avatar:"authors/jason-wright.png",fullName:"Jason Wright"},text:"Sofia, can you prove it? Post a screenshot or something.",time:"5m ago"},{author:{avatar:"authors/sofia-martinez.png",fullName:"Sofia Martinez"},text:"Here! Gonna go kayaking with it next weekend. So excited!!",time:"5m ago",attachment:"attachments/sofia-martinez.png",reactions:{count:57,emojis:[EMOJIS.like,EMOJIS.heart,EMOJIS.care,EMOJIS.wow]}}]},{author:{avatar:"authors/james-thompson.png",fullName:"James Thompson"},text:"How long does it take to get the confirmation email? I won but haven't received anything yet.",time:"16m ago",comments:[{author:{avatar:"authors/alice-martinez.png",fullName:"Alice Martinez"},text:"I got mine within minutes. Maybe check your spam folder?",reactions:{count:1,emojis:[EMOJIS.like]},time:"14m ago"}]},{author:{avatar:"authors/katie-evans.png",fullName:"Katie Evans"},text:"No luck here either 😞 but congrats to everyone who won!",time:"16m ago"},{author:{avatar:"authors/chris-robinson.png",fullName:"Chris Robinson"},text:"What are the questions on the survey? Are they hard?",time:"16m ago",comments:[{author:{avatar:"authors/jenna-adams.png",fullName:"Jenna Adams"},text:"Super easy! Just basic questions about you!",time:"14m ago"}]},{author:{avatar:"authors/igor-petrov.png",fullName:"Igor Petrov"},text:"Finally won something! Thanks, YETI! Can't wait to take this on my next hiking trip.",time:"5m ago",attachment:"attachments/igor-petrov.png",reactions:{count:16,emojis:[EMOJIS.heart,EMOJIS.wow]}},{author:{avatar:"authors/laura-peterson.png",fullName:"Laura Peterson"},text:"Another scam, I bet. Did anyone actually get a cooler yet?",time:"16m ago",comments:[{author:{avatar:"authors/paul-green.png",fullName:"Paul Green"},text:"I just got the confirmation email. Seems real to me!",time:"14m ago"},{author:{avatar:"authors/laura-peterson.png",fullName:"Laura Peterson"},text:"I’ll believe it when I see someone post a picture with their cooler.",time:"14m ago"}]},{author:{avatar:"authors/nick-foster.png",fullName:"Nick Foster"},text:"For those who won, how long did the survey take?",time:"16m ago",comments:[{author:{avatar:"authors/julia-simmons.png",fullName:"Julia Simmons"},text:"Just a few minutes. Super quick!",time:"5m ago",reactions:{count:1,emojis:[EMOJIS.like]}}]},{author:{avatar:"authors/megan-butler.png",fullName:"Megan Butler"},text:"Got an error on the last question and now I can't finish the survey. So frustrating!",time:"16m ago"},{author:{avatar:"authors/eric-sanders.png",fullName:"Eric Sanders"},text:"Winning this would be perfect for my camping trips! Fingers crossed 🤞",time:"5m ago",reactions:{count:6,emojis:[EMOJIS.like]},comments:[{author:{avatar:"authors/kelly-brooks.png",fullName:"Kelly Brooks"},text:"Good luck, Eric! I hope you win!",time:"14m ago"}]},{author:{avatar:"authors/hawk-tuah.png",fullName:"Hawk Tuah"},text:`Is this open worldwide or just for the ${geo}?`,time:"16m ago",comments:[{author:{avatar:"authors/steve-young.png",fullName:"Steve Young"},text:`I think it’s just for the ${geo}, but not 100% sure.`,time:"14m ago"},{author:OFFICIAL_AUTHOR,text:`Hi Hawk, the giveaway is only open to ${geo} residents. Sorry for any inconvenience!`,time:"5m ago",reactions:{count:5,emojis:[EMOJIS.like,EMOJIS.heart]}}]},{author:{avatar:"authors/timothy-rossi.png",fullName:"Timothy Rossi"},text:"Another giveaway I didn’t win. My luck is the worst!",time:"16m ago",comments:[{author:{avatar:"authors/amy-white.png",fullName:"Amy White"},text:"Don't worry, Tim! There will be more opportunities. Keep trying!",time:"5m ago",reactions:{count:1,emojis:[EMOJIS.heart]}}]},{author:{avatar:"authors/santiago-gonzalez.png",fullName:"Santiago Gonzalez"},text:"I actually won! Can't wait to go on my next fishing trip with this, already planning it!",time:"5m ago",attachment:"attachments/santiago-gonzalez.png",reactions:{count:47,emojis:[EMOJIS.heart,EMOJIS.wow]},comments:[{author:OFFICIAL_AUTHOR,text:"Congratulations, Santiago! Enjoy your prize and have a great fishing trip!",time:"5m ago",reactions:{count:5,emojis:[EMOJIS.heart]}}]},{author:{avatar:"authors/noah-johnston.png",fullName:"Noah Johnston"},text:"I won the YETI Backpack Cooler giveaway last year. It’s been my trusty companion on all my camping trips. Love this bugger! 🛶 🌞",time:"5m ago",attachment:"attachments/noah-johnston.png",reactions:{count:19,emojis:[EMOJIS.heart,EMOJIS.like]},comments:[{author:OFFICIAL_AUTHOR,text:"That's great to hear, Noah!",time:"5m ago",reactions:{count:1,emojis:[EMOJIS.like]}}]}],QUESTIONS=[{question:"Are you a man or a woman?",answers:["MAN","WOMAN"]},{question:"How old are you?",answers:["18-29","30-39","40-49","50+"]},{question:"How many members are there in your family?",answers:["alone","1","2","3+"]},{question:"Have you bought anything at YETI before?",answers:["yes","no"]}],HOW_IT_WORKS_STEPS=[{title:"Answer 4 Simple Questions",text:"Complete the short survey"},{title:"Try Your Luck",text:"Guess the winning box in 3 tries."},{title:"Fill Contact Info",text:"Provide your details if you win."}],CHECKS=["You answered 4 out of 4 questions","There are no previous polls from your IP address.","There are still prizes available!"],ASSOCIATIONS={firstName:"first_name",lastName:"last_name",address:"address",city:"city",postalCode:"zip",phone:"phone",email:"email"},currentDate=today(),todayText=`${currentDate.month} ${currentDate.date}, ${currentDate.year}`,HOME_PAGE={title:"Congratulations, You can win YETI M20 Back Pack Cooler!",text1:`Today, ${todayText}, you have been chosen to participate in this  survey. <span>It will only take a minute,</span> and by completing it, <span>you could win a fantastic prize:</span> YETI M20 Back Pack Cooler!`,text2:`Your Opinion Matters! Complete  our brief survey today for a chance to win an YETI M20 Back Pack Cooler. This  giveaway is part of our initiative to find enthusiastic product testers who can provide valuable feedback. Only available to ${geo} residents.`,text3:"<span>Hurry! The number of prizes is limited!</span>"},SUCCESS_MODAL={title:"YOU DID IT 🎉",subtitle:"Congratulations! You won the YETI M20 Back Pack Cooler!",rules:["1) You will be directed to the website of our certified distributors.",`2) Enter your address & pay a small shipping fee of ${price} to get your YETI M20 Back Pack Cooler.`,"3) The YETI M20 Back Pack Cooler will be delivered within 5-7 days"]},COMMENTS_SECTION={title:"Hear What people say About YETI giveaway"},START_MODAL={title:"You can now participate in a game to win YETI",text:"You have the chance to win one of our prizes. Simply choose one of the boxes and try your luck!"},CONTACT_PAGE={title:"the YETI M20 BackPack Cooler!",text:"The last step is to fill contact information so we can delivery YETI to you"},LOADER_TIMEOUT=1e3,CONFIRMED_TIMEOUT=500,TIMER_INIT_VALUE=240;window.CONFIG={questions:QUESTIONS,prefix:PREFIX,comments:COMMENTS,howItWorksSteps:HOW_IT_WORKS_STEPS,checks:CHECKS,associations:ASSOCIATIONS,type:TYPE,timerInitValue:240,loaderTimeout:1e3,confirmedTimeout:1500,thumbs:THUMBS,clarity:{id:"",enabled:!1},withEmptyPopup:WITH_EMPTY_POPUP,url,successModal:SUCCESS_MODAL,homePage:HOME_PAGE,commentsSection:COMMENTS_SECTION,startModal:START_MODAL,contactPage:CONTACT_PAGE};