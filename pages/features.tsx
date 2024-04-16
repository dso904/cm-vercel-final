/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { RemoveCurtain } from "@/components/curtain/Curtain";
import styles from "@/styles/Contribute.module.css";
import Okfe from "@/components/okfe/Okfe";
import Head from "next/head";
import Image from 'next/image';

const Contribute = () => {
  React.useEffect(() => {
    const handleLoad = () => RemoveCurtain();
    const images = document.querySelectorAll("img");
    const bgVid = document.querySelector(".fsBgVid") as HTMLVideoElement;
    let imagesToLoad = images.length + 1;
    const reduceImagesToLoad = () => {
      imagesToLoad--;
      if (imagesToLoad === 0) handleLoad();
    };

    if (bgVid.readyState === 4) handleLoad();
    else bgVid.addEventListener("loadeddata", reduceImagesToLoad);

    images.forEach((image) => {
      if (image.complete) reduceImagesToLoad();
      else image.addEventListener("load", reduceImagesToLoad);
    });
    return () => {
      images.forEach((image) =>
        image.removeEventListener("load", reduceImagesToLoad)
      );
    };
  }, []);
  return (
    <>
      <Head>
        <title>Carbon Manager — Features</title>
      </Head>
      <main id="goalsPage">
        <article className={styles.article}>
          <div className={styles.article__content}>
          <a href="https://teamhackminors.github.io/carbonfootprintmanager/" target="_blank" rel="noopener noreferrer">
            <h1>AI Carbon Footprint Manager </h1>
            
          </a>
          
            <p className={styles.p}><br></br>
            It is perhaps world's first ever, most accurate, most user-friendly, AI-powered platform designed to empower individuals to calculate, understand and reduce their own carbon footprints through answering just a few of questions regarding their day to day activities, which even a 5+ child can use.<br></br><br></br>
  
Apart from this, it also has the following features:-<br></br><br></br>
🌳 Very Accurate AI Carbon footprint Calculation along with a creative graph.<br></br><br></br>
</p>
<Image src="/images/calculator.jpeg" alt="Forum"width={450} height={450} className={styles.page}/>
<p className={styles.p}>
🌳 Did You Know?- This feature, visible at the bottom of the main Question & Answer tab seeks to part and improve your knowledge(facts) about Carbon in the global scenario.<br></br><br></br>



🌳 Offset Options- It is an extremely important component that can be used to offset the emission caused by us and one of the natural ways to do so is by planting more trees. We all have learnt in our junior schools about it. Therefore based on the Carbon Footprint, it tells the person how many trees he/she will have to plant to offset it. However there are people, who would not want to plant it themselves for some reasons like inadequate space, lack of time, lack of maintainance and lack of will, and it is for them that we have introduced a feature where people, if planting by themselves, can plant under the guidance and supervision of a reputed authority which provides them a certificate on successful planting or if they want they can give Carbon Credits to an NGO to plant and maintain a certain number of trees on behalf of them, in their respective area.<br></br><br></br>

🌳 Report & Offset Proof Submission and Blockchain Verificaion- The monthly calculated report can be easily printed by Ctrl+P or by selecting the option from the ⋮(top-right). Then on clicking the Send My Report & Offset Proof button it prepares a message, which must be read and filled up properly along with attaching the report and the Offset proof for the month, which may include the certificates from the authority or the bill from the NGO, and finally send it to us. Once the mail reaches us, it undergoes a strict verification process (both by blockchain techniques & manually), after which we update the status on our database for a better administration.<br></br><br></br>

🌳 Carbon Reward Points & Leaderboard-Based on the monthly inputs sent and verification, users will be provided Carbon Reward Points which they can redeem and purchase any eco-friendly or carbon-friendly item from anywhere on Earth they wish to. Also adding to the glory, a leaderboard will be set up soon based on the top Carbon Warriors of the previous month, which would not only provide people fame, but also tend to inspire millions to join the race in saving the world.<br></br><br></br>
🌳 Correction Factor- To ensure an even more accurate result, we introduce yet another amazing feature named "Correction Factor". We invite all the experts from reputed industries and authorities to try our app and compare the calculated footprint on our app with the data their sensors generated or from their own mathematical and scientific calculations, and present any anomalies or abrasions in the results to us, by clicking on the "Report Correction Factor" button. On submitting a detailed report with adequate proof and information, we shall soon review it and if there is (really) any noticable deviation between the true findings and our findings, we shall try to improve our neural network to obtain even more accurate results of for our project by using a Correction Factor and make the platform even more powerful and effective.<br></br><br></br>
🌳 AI Chatbot plugin- This is the plugin version of our specially designed LLM powered chatbot, which is integrated on the documentation page as well as on the AI Carbon Footprint Manager interface at the bottom right corner. It is finetuned to answer all types of questions related to carbon footprint, reduction of carbon emission, and on topics related to environmental conservation. Thus, it can help to generate new, innovative, unique, and creative ideas, choices and suggestions and present it to the users, based on their data to reduce their Carbon Footprint and other tasks as well.
</p>
            
            <hr></hr>
            <br />
            <a href="https://chatbot-apon.onrender.com/" target="_blank" rel="noopener noreferrer">
            
            <h1>Chat2Eco-The AI Chatbot</h1>
            </a>
            <Image src="/images/ChatUI.jpeg" alt="Forum"width={450} height={450} className={styles.page}/>
            <p className={styles.p}>
            The Chat2Eco-180B base model serves as the cornerstone of the ChatUI, embodying a sophisticated architecture rooted in a Mixture of Experts (MoE) framework. It seamlessly integrates slices from esteemed models such as the gemini 7b, llama 70b-chat, and mixtral 8x7b, orchestrated through a meticulously designed merge mechanism employing the "slerp" interpolation method. Drawing inspiration from pioneering techniques like Mixtral, the Chat2Eco-180B model boasts a sparse decoder-only network, where a dynamic router network selects two distinct parameter groups ("experts") per token at each layer. This strategic parameter selection enhances model capacity while optimizing computational resources, epitomizing the model's commitment to both performance and efficiency.<br /><br />
            In contrast, the fine-tuned Chat2Eco-180B-Chat model represents the culmination of advanced training techniques and domain-specific adaptation. Leveraging a fine-grained MoE architecture, Chat2Eco-180B-Chat features 132B total parameters, with 36B active per input, ensuring unparalleled scalability and versatility. Through meticulous fine-tuning using Qlora and Sft trainers on a meticulously curated dataset comprising approximately 12T tokens of text and code data, supplemented by data from the Common Crawl and the Wikipedia API, the Chat2Eco-180B-Chat model surpasses its predecessors in both data quality and model performance. This tailored training approach, coupled with rigorous data preprocessing using industry-standard tools such as Jupyter Notebooks, Apache Spark, and other advanced data analytical techniques, ensures the Chat2Eco-180B-Chat model's robustness and relevance across diverse linguistic contexts and applications. <br /><br /> Features:- <br /><br />
              <ul><li><b className={styles.black}>Multilingual Communication:</b></li> Proficient in understanding and communicating in multiple languages, catering to diverse linguistic preferences and facilitating global outreach in environmental advocacy and education.<br /><br />
              <li><b className={styles.black}>Innovative Idea Generation:</b></li> Excels in generating novel, unique, and creative ideas, choices, and suggestions within the domain of environmental conservation, surpassing conventional approaches and fostering innovative solutions to complex environmental challenges.<br /><br />
              <li><b className={styles.black}>Accurate Domain-specific Responses:</b></li> Demonstrates a high level of accuracy and precision in answering questions within its specialized domain of environmental science, conservation, and sustainable development, providing reliable and insightful information to users.<br /><br />
              <li><b className={styles.black}>Creative Writing Proficiency:</b></li> Exhibits exceptional prowess in producing engaging and impactful creative writing pieces, including poems, lyrics, reports, articles, speeches, essays, and slogans, centered around themes of environmental conservation and sustainability, in any desired language.<br /><br />
              </ul>
            <h5>
              DISCLAIMER: Please remember that like any other LLM this can also sometimes give undesirable or inaccurate results and it is advised to correlated responses generated by this LLM with real world information. But quite amazingly, we are overwhelmed with the performance of our LLM under fixed resources.
            </h5>
            </p>
            
            <hr /><br />
            <a href="https://bit.ly/CarbonManagerForum" target="_blank" rel="noopener noreferrer">
        <h1 className="heading">Carbon Manager- Forum</h1>
      </a>
      {/* Notice */}
      <p className={styles.notice}>Please note that, the WIX platform has been used to get access to resources free like php connections, firebase database, etc. Most of the work has been done using Velo API.</p>
      {/* Image */}
      <Image src="/images/forum.jpeg" alt="Forum" width={450} height={450} className={styles.page} />
      {/* Paragraph */}
      <p className={styles.p}>
            🌐 The development of a Community Discussion Forum for the Carbon Manager project aims to provide a dynamic platform where individuals can engage in discussions, share insights, and collaborate on ideas to combat carbon emissions and promote sustainability. The forum is designed with the familiar look and feel of social media platforms, making it intuitive and user-friendly. Users can participate in various activities such as asking questions, initiating discussions, sharing their own strategies for reducing carbon emissions, and learning from others' experiences and expertise.<br></br><br></br>
            🌐 The forum is designed with the familiar look and feel of social media platforms, making it intuitive and user-friendly. Users can participate in various activities such as asking questions, initiating discussions, sharing their own strategies for reducing carbon emissions, and learning from others' experiences and expertise. One of the key features is the ability for users to showcase their work and initiatives related to carbon emission reduction. This not only fosters a sense of community but also serves as inspiration for others looking to make a positive impact on the environment.<br></br><br></br>
            🌐 One of the key features is the ability for users to showcase their work and initiatives related to carbon emission reduction. This not only fosters a sense of community but also serves as inspiration for others looking to make a positive impact on the environment. Similar to social media platforms, users have the flexibility to customize their profiles, choose privacy settings, and connect with others by following their profiles or joining groups dedicated to specific topics or initiatives.<br></br><br></br>
            🌐 Similar to social media platforms, users have the flexibility to customize their profiles, choose privacy settings, and connect with others by following their profiles or joining groups dedicated to specific topics or initiatives. A unique aspect of the forum is the implementation of a badge system to recognize and reward users for their contributions and efforts in reducing carbon emissions. These badges serve as a form of recognition and motivation, encouraging continued engagement and participation within the community.
            <br></br><br></br>
            🌐 A unique aspect of the forum is the implementation of a badge system to recognize and reward users for their contributions and efforts in reducing carbon emissions. These badges serve as a form of recognition and motivation, encouraging continued engagement and participation within the community. Overall, the Community Discussion Forum for Carbon Manager aims to be a comprehensive platform where individuals can come together to exchange ideas, collaborate on solutions, and contribute to building a sustainable, carbon-friendly future.
            </p>
            
            <hr />
            <br />

          </div>
        </article>
      </main>
    </>
  );
};

export default Contribute;
