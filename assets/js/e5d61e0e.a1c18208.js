"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4743],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var r=n.createContext({}),p=function(e){var t=n.useContext(r),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=p(e.components);return n.createElement(r.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(i),m=a,h=c["".concat(r,".").concat(m)]||c[m]||d[m]||o;return i?n.createElement(h,l(l({ref:t},u),{},{components:i})):n.createElement(h,l({ref:t},u))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,l=new Array(o);l[0]=m;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=i[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},36926:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=i(87462),a=(i(67294),i(3905));const o={},l="Record, Visualize & Listen to Muscle Signals Using Muscle BioAmp Shield",s={unversionedId:"Experiments/EMG Experiments/BisCute Visualize EMG/Record, Visualize & Listen to Muscle Signals Using Muscle BioAmp Shield",id:"Experiments/EMG Experiments/BisCute Visualize EMG/Record, Visualize & Listen to Muscle Signals Using Muscle BioAmp Shield",title:"Record, Visualize & Listen to Muscle Signals Using Muscle BioAmp Shield",description:"dodge gif",source:"@site/docs/Experiments/EMG Experiments/BisCute Visualize EMG/Record, Visualize & Listen to Muscle Signals Using Muscle BioAmp Shield.md",sourceDirName:"Experiments/EMG Experiments/BisCute Visualize EMG",slug:"/Experiments/EMG Experiments/BisCute Visualize EMG/Record, Visualize & Listen to Muscle Signals Using Muscle BioAmp Shield",permalink:"/docs/next/Experiments/EMG Experiments/BisCute Visualize EMG/Record, Visualize & Listen to Muscle Signals Using Muscle BioAmp Shield",draft:!1,editUrl:"https://github.com/upsidedownlabs/upsidedownlabs.github.io/docs/Experiments/EMG Experiments/BisCute Visualize EMG/Record, Visualize & Listen to Muscle Signals Using Muscle BioAmp Shield.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using Muscle BioAmp Candy (Candy Size Muscle Sensor)",permalink:"/docs/next/Experiments/EMG Experiments/BisCute Visualize EMG/Candy_Visualize EMG"},next:{title:"Controlling Servo Claw With Muscle Signals Using Muscle BioAmp Shield",permalink:"/docs/next/Experiments/EMG Experiments/Controlling Servo Claw With Muscle Signals Using Muscle BioAmp Shield/"}},r={},p=[{value:"What is Electromyography (EMG)?",id:"what-is-electromyography-emg",level:2},{value:"About Muscle BioAmp Shield:",id:"about-muscle-bioamp-shield",level:3},{value:"Supplies",id:"supplies",level:2},{value:"HARDWARE:",id:"hardware",level:3},{value:"SKIN PREPARATION KIT &amp; ELECTRODE GEL:",id:"skin-preparation-kit--electrode-gel",level:3},{value:"SOFTWARE:",id:"software",level:3},{value:"Step 1: Assembly",id:"step-1-assembly",level:2},{value:"Step 2: Stacking on Arduino Uno",id:"step-2-stacking-on-arduino-uno",level:2},{value:"Step 3: Connecting Electrode Cable",id:"step-3-connecting-electrode-cable",level:2},{value:"Step 4: Skin Preparation",id:"step-4-skin-preparation",level:2},{value:"About Nuprep Gel:",id:"about-nuprep-gel",level:3},{value:"Step 5: Electrode Placements",id:"step-5-electrode-placements",level:2},{value:"Measuring EMG using Gel electrodes:",id:"measuring-emg-using-gel-electrodes",level:3},{value:"Measuring EMG using Muscle BioAmp Band, a dry electrode based EMG band:",id:"measuring-emg-using-muscle-bioamp-band-a-dry-electrode-based-emg-band",level:3},{value:"Step 6: Download Arduino IDE",id:"step-6-download-arduino-ide",level:2},{value:"Step 7: Coding Time!",id:"step-7-coding-time",level:2},{value:"Step 8: Enjoy &amp; Flex Your Arm",id:"step-8-enjoy--flex-your-arm",level:2},{value:"Step 9: Listen to Your Muscles",id:"step-9-listen-to-your-muscles",level:2},{value:"Listening on a wired earphones/headphones:",id:"listening-on-a-wired-earphonesheadphones",level:3},{value:"Listening on a speaker using BioAmp AUX Cable:",id:"listening-on-a-speaker-using-bioamp-aux-cable",level:3},{value:"Step 10: Make It Portable",id:"step-10-make-it-portable",level:2},{value:"Step 11: Some Other Projects",id:"step-11-some-other-projects",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"record-visualize--listen-to-muscle-signals-using-muscle-bioamp-shield"},"Record, Visualize & Listen to Muscle Signals Using Muscle BioAmp Shield"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dodge gif",src:i(36462).Z,width:"768",height:"432"})),(0,a.kt)("p",null,"In this tutorial, we are going to show you how to create a simple EMG system at your home so that you can record the muscle signals, visualize them on LEDs and even listen to your muscles using the Arduino Uno shield for EMG, Muscle BioAmp Shield."),(0,a.kt)("p",null,"But before moving forward, let's understand a brief about Electromyography."),(0,a.kt)("h2",{id:"what-is-electromyography-emg"},"What is Electromyography (EMG)?"),(0,a.kt)("p",null,"Electromyography is a technique that measures muscle response or electrical activity in response to a nerve\u2019s stimulation of the muscle. We can use this electrical activity to detect neuromuscular abnormalities or create solutions for some crazy real-world problems like making artificial limbs for amputees."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(12966).Z,width:"1366",height:"603"})),(0,a.kt)("h3",{id:"about-muscle-bioamp-shield"},"About Muscle BioAmp Shield:"),(0,a.kt)("p",null,"Muscle BioAmp Shield is an all-in-one Arduino Uno Shield for Electromyography (EMG). It is perfect for beginners as it can be stacked on top of Arduino Uno to record, visualize and listen to the muscle signals to make amazing Human-Computer Interface (HCI) projects. It also comes with various plug-and-play options so you can connect hundreds of devices like OLED screens, character displays, accelerometers, and servo claws to name just a few using the I2C interface."),(0,a.kt)("p",null,"This is one of the products in the entire BioAmp series of sensors from Upside Down Labs which is designed in a way to teach you the basics of the instrumentation amplifier, active bandpass filtering, soldering, programming, neuroscience, Human-Computer Interface (HCI), Brain-Computer Interface (BCI), etc."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(38659).Z,width:"1414",height:"2000"})),(0,a.kt)("h2",{id:"supplies"},"Supplies"),(0,a.kt)("h3",{id:"hardware"},"HARDWARE:"),(0,a.kt)("p",null,"1 x Muscle BioAmp Shield Kit (",(0,a.kt)("a",{parentName:"p",href:"https://store.upsidedownlabs.tech/product/muscle-bioamp-shield-v0-3/"},"Upside Down Labs Store")," | ",(0,a.kt)("a",{parentName:"p",href:"https://www.amazon.in/dp/B09Z32M3PP?ref_=cm_sw_r_cp_ud_dp_N6R5671596GFW0C3JAF0"},"Amazon India")," | ",(0,a.kt)("a",{parentName:"p",href:"https://www.tindie.com/products/upsidedownlabs/muscle-bioamp-shield-v03-arduino-shield-for-emg/"},"Tindie India"),")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Kit includes:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Muscle BioAmp Shield PCB x 1"),(0,a.kt)("li",{parentName:"ul"},"Components",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ceramic capacitors."),(0,a.kt)("li",{parentName:"ul"},"Electrolytic capacitors"),(0,a.kt)("li",{parentName:"ul"},"Resistors"),(0,a.kt)("li",{parentName:"ul"},"LEDs"),(0,a.kt)("li",{parentName:"ul"},"Audio Jack"),(0,a.kt)("li",{parentName:"ul"},"Connectors"),(0,a.kt)("li",{parentName:"ul"},"Tactical Switch"),(0,a.kt)("li",{parentName:"ul"},"Optocoupler"),(0,a.kt)("li",{parentName:"ul"},"Quad OpAmp, etc."))),(0,a.kt)("li",{parentName:"ul"},"BioAmp Cable (100cm) x 1"),(0,a.kt)("li",{parentName:"ul"},"Gel Electrodes x 24"),(0,a.kt)("li",{parentName:"ul"},"Muscle BioAmp Band x 1"),(0,a.kt)("li",{parentName:"ul"},"BioAmp AUX Cable x 1"),(0,a.kt)("li",{parentName:"ul"},"9V Snap Cable x 1"),(0,a.kt)("li",{parentName:"ul"},"STEMMA Cables x 6")))),(0,a.kt)("p",null,"1 x Arduino uno with USB cable (Type A to Type B)"),(0,a.kt)("p",null,"1 x 9V Battery (Optional, only if you want to make the system portable)"),(0,a.kt)("p",null,"Soldering iron and other equipments to solder the components on the PCB"),(0,a.kt)("h3",{id:"skin-preparation-kit--electrode-gel"},"SKIN PREPARATION KIT & ELECTRODE GEL:"),(0,a.kt)("p",null,"1 x NuPrep skin preparation gel (",(0,a.kt)("a",{parentName:"p",href:"https://store.upsidedownlabs.tech/product/nuprep-gel/"},"Upside Down Labs Store")," | ",(0,a.kt)("a",{parentName:"p",href:"https://www.tindie.com/products/upsidedownlabs/nuprep-skin-preparation-gel/"},"Tindie India"),")"),(0,a.kt)("p",null,"1 x Wet wipe"),(0,a.kt)("p",null,"1 x Electrode Gel (only if using Muscle BioAmp Band) (",(0,a.kt)("a",{parentName:"p",href:"https://store.upsidedownlabs.tech/product/electrode-gel/"},"Upside Down Labs Store")," | ",(0,a.kt)("a",{parentName:"p",href:"https://www.tindie.com/products/upsidedownlabs/electrode-gel-250ml/"},"Tindie India"),")"),(0,a.kt)("h3",{id:"software"},"SOFTWARE:"),(0,a.kt)("p",null,"Arduino IDE"),(0,a.kt)("h2",{id:"step-1-assembly"},"Step 1: Assembly"),(0,a.kt)("iframe",{width:"100%",height:"444",src:"https://www.youtube.com/embed/eaIDXosPSbs?feature=oembed&autoplay=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("p",null,"First of all, you have to assemble all the passive components on the Muscle BioAmp Shield PCB. For a step-by-step guide for the assembly, you can follow the video above or take a look at this (",(0,a.kt)("a",{parentName:"p",href:"https://docs.upsidedownlabs.tech/DIY-Muscle-BioAmp-Shield/ibom.html"},"interactive BOM"),")"),(0,a.kt)("h2",{id:"step-2-stacking-on-arduino-uno"},"Step 2: Stacking on Arduino Uno"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dodge gif",src:i(75435).Z,width:"768",height:"432"})),(0,a.kt)("p",null,"Stack the Muscle BioAmp Shield on top of Arduino Uno properly."),(0,a.kt)("h2",{id:"step-3-connecting-electrode-cable"},"Step 3: Connecting Electrode Cable"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dodge gif",src:i(70538).Z,width:"768",height:"432"})),(0,a.kt)("p",null,"Connect the BioAmp Cable to Muscle BioAmp Shield as shown in the connection diagram."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Don't place the electrodes on the skin at this moment."),(0,a.kt)("h2",{id:"step-4-skin-preparation"},"Step 4: Skin Preparation"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dodge gif",src:i(32965).Z,width:"768",height:"432"}),"\nApply Nuprep Skin Preparation Gel on the skin surface where electrodes would be placed to remove dead skin cells and clean the skin from dirt. After rubbing the skin surface thoroughly, clean it with a wet wipe."),(0,a.kt)("h3",{id:"about-nuprep-gel"},"About Nuprep Gel:"),(0,a.kt)("p",null,"Nuprep skin preparation gel is a mildly abrasive, highly conductive gel that should be applied before placing the electrodes on the skin to improve measurements. When applied gently, it strips away the top layer of skin and moistens the underlying skin layer which reduces the skin impedance with minimal skin irritation and discomfort."),(0,a.kt)("h2",{id:"step-5-electrode-placements"},"Step 5: Electrode Placements"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dodge gif",src:i(20076).Z,width:"768",height:"432"}),"\n",(0,a.kt)("img",{alt:"dodge gif",src:i(90030).Z,width:"768",height:"432"})),(0,a.kt)("p",null,"We have 2 options to measure the EMG signals, either using the gel electrodes or using dry electrode based EMG band. You can try both of them one by one."),(0,a.kt)("h3",{id:"measuring-emg-using-gel-electrodes"},"Measuring EMG using Gel electrodes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Connect the BioAmp Cable to gel electrodes,"),(0,a.kt)("li",{parentName:"ol"},"Peel the plastic backing from electrodes"),(0,a.kt)("li",{parentName:"ol"},"Place the IN+ and IN- cables on the arm near the ulnar nerve & REF (reference) at the back of your hand.")),(0,a.kt)("h3",{id:"measuring-emg-using-muscle-bioamp-band-a-dry-electrode-based-emg-band"},"Measuring EMG using Muscle BioAmp Band, a dry electrode based EMG band:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Connect the BioAmp Cable to Muscle BioAmp Band in a way such that IN+ and IN- are placed on the arm near the ulnar nerve & REF (reference) on the far side of the band."),(0,a.kt)("li",{parentName:"ol"},"Now put a small drop of electrode gel between the skin and metallic part of BioAmp Cable to get the best results.")),(0,a.kt)("h2",{id:"step-6-download-arduino-ide"},"Step 6: Download Arduino IDE"),(0,a.kt)("p",null,"Download the Arduino IDE from the link given below:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/software"},"https://www.arduino.cc/en/software")),(0,a.kt)("p",null,"(We have used Arduino IDE version 1.8.19 for this project)"),(0,a.kt)("p",null,"After downloading, connect the Arduino Uno to your laptop using the USB Cable (Type A to Type B)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Make sure your laptop is not connected to a charger and sit 5m away from any AC appliances for best signal acquisition."),(0,a.kt)("h2",{id:"step-7-coding-time"},"Step 7: Coding Time!"),(0,a.kt)("p",null,"Copy paste the Arduino Sketch given below in Arduino IDE:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"LED Bar Graph: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/upsidedownlabs/BioAmp-EXG-Pill/blob/main/software/LEDBarGraph/LEDBarGraph.ino"},"https://github.com/upsidedownlabs/BioAmp-EXG-Pill/blob/main/software/LEDBarGraph/LEDBarGraph.ino"))),(0,a.kt)("p",null,"After flashing the code, open the serial plotter to visualize the EMG signals."),(0,a.kt)("h2",{id:"step-8-enjoy--flex-your-arm"},"Step 8: Enjoy & Flex Your Arm"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dodge gif",src:i(32360).Z,width:"768",height:"432"})),(0,a.kt)("p",null,"Now flex your arm to visualize the muscle signals (EMG) in real time on your laptop (on serial plotter of Arduino IDE) as well as on the onboard LEDs of Muscle BioAmp Shield."),(0,a.kt)("p",null,"More strength you apply, more the LED bar goes up."),(0,a.kt)("p",null,"Similarly you can try to record EMG from other parts of your body like biceps, triceps, cheeks, thighs, etc."),(0,a.kt)("h2",{id:"step-9-listen-to-your-muscles"},"Step 9: Listen to Your Muscles"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dodge gif",src:i(16149).Z,width:"768",height:"432"})),(0,a.kt)("p",null,"Here comes the most interesting part of the project which is listening to your muscles."),(0,a.kt)("p",null,"You can either listen it on a speaker or wired earphones/headphones. Let's try both of them."),(0,a.kt)("h3",{id:"listening-on-a-wired-earphonesheadphones"},"Listening on a wired earphones/headphones:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Plug your wired earphones or headphones on the 3.5mm jack of Muscle BioAmp Shield"),(0,a.kt)("li",{parentName:"ol"},"Plug it in your ears"),(0,a.kt)("li",{parentName:"ol"},"Flex and listen to your muscles")),(0,a.kt)("h3",{id:"listening-on-a-speaker-using-bioamp-aux-cable"},"Listening on a speaker using BioAmp AUX Cable:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Plug the BioAmp AUX Cable on Muscle BioAmp Shield"),(0,a.kt)("li",{parentName:"ol"},"Connect the BioAmp AUX cable on the speaker"),(0,a.kt)("li",{parentName:"ol"},"Flex and listen to your muscles.\nIsn't it AMAZING? How did you feel?")),(0,a.kt)("p",null,"Let us know your feedback in the comments and feel free to ask any questions."),(0,a.kt)("p",null,"You can also mail us at ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@upsidedownlabs.tech"},"support@upsidedownlabs.tech")," for any kind of support while you are making this project."),(0,a.kt)("h2",{id:"step-10-make-it-portable"},"Step 10: Make It Portable"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dodge gif",src:i(54097).Z,width:"768",height:"432"})),(0,a.kt)("p",null,"Till now, the power for the EMG system was coming from the laptop via USB cable of Arduino Uno but there can be 2 ways in which you can make the system portable:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Using 9V battery: Directly connect a 9V battery to Muscle BioAmp Shield using a 9V snap cable.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Using Power Bank: Instead of connecting the USB cable of Arduino Uno to laptop, you can directly connect it to power bank."))),(0,a.kt)("h2",{id:"step-11-some-other-projects"},"Step 11: Some Other Projects"),(0,a.kt)("iframe",{width:"100%",height:"444",src:"https://www.youtube.com/embed/kgvK51UIXdo?feature=oembed&autoplay=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("p",null,"You can also make various other projects using Muscle BioAmp Shield like:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Controlling a servo claw by muscle signals (EMG): ",(0,a.kt)("a",{parentName:"li",href:"https://www.instructables.com/Controlling-a-Servo-Claw-With-Muscle-Signals-EMG-U/"},"https://www.instructables.com/Controlling-a-Servo-Claw-With-Muscle-Signals-EMG-U/"))))}d.isMDXComponent=!0},54097:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Connecting 9V battery-0a125a82eee2db88d97d70c19ffb36a5.gif"},70538:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Connecting Electrode Cable-7a205ffb00859df201b1c946b22ec73b.gif"},12966:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/EMGEnvelop-d34ecf470c414769dc0b18b6fb7f0e9d.png"},32360:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/LED Bar Graph-7745bf991b68ded57273e56611984cc7.gif"},16149:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Listening music-8f70d7402f262a307453af2151b02070.gif"},38659:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Muscle BioAmp Shield-4340b76b8874aa773668c6cb3e7e07ca.jpg"},32965:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Skin Preparation-cf8d399e35186ce01c8576e34794b995.gif"},75435:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Stacking on Arduino Uno-99a27d290d02161f66b0c83c2de90e79.gif"},36462:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Thumbnail-ca400f68ef4bd2cf67861fcd2a8cf587.gif"},90030:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Using EMG Band-def7f5f26a1bf88379bc3881df4a7934.gif"},20076:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/Using Gel Electrodes-0c104176787c59335e79ed7bbaf3bab1.gif"}}]);