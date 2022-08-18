// import React, {useEffect, useState} from "react";
// import styles from "./Feedback.module.css";
// import circle from '../../../../media/images/circle.svg'

// const Feedback = () => {

// 	const [feedBack, setFeedBack] = useState([]);


// 	useEffect(() => {
// 	  fetch("http://localhost:3001/feedBack")
// 		.then(response => {
// 		  if (response.status === 200) {
// 			return response.json();
// 		  } else{
// 			alert('Error. Error: ' + response.status);
// 		  }
// 		})
// 		.then(data => setFeedBack(data))
// 	}, [])

// 	return (
// 		<div className={styles.Feedback}>
// 				<h3>Отзывы</h3>
// 			<div className={styles.Content}>
// 					{feedBack.map((post) => (
// 						<div className={styles.feedback} key={post.id}>
// 							<img src={circle} alt="" />
// 							<h4>{post.name}</h4>
// 							<p className={styles.opinion}>{post.description}</p>
// 							<h4>{post.date}</h4>
// 						</div>
// 					))}
// 			</div>
// 		</div>
// 	);
// };

// export default Feedback;

import React, {useEffect, useState} from 'react';
import styles from './Feedback.module.css';
import bigPen from '../../../../media/icons/big-pen.svg';
import smallPen from '../../../../media/icons/small-pen.svg';
import {useParams} from "react-router-dom";

const FeedBack = () => {

  const params = useParams();
  const [feedBack, setFeedBack] = useState([]);
  useEffect(() => {
    fetch(' http://localhost:3001/feedBack')
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          alert('Error. Status:' + response.status);
        }
      })
      .then(data => setFeedBack(data))
  }, [])

	return (
    <div className={styles.feedBack}>
      <h2>Отзывы</h2>
      <div className={styles.feedBacks}>
        {
          feedBack.map(item => {
            return <div key={item.id} className={styles.feedBackBox}>
              <img className={styles.pen} src={bigPen} alt="/"/>
              <img className={styles.image} src={item.img} alt=""/>
              <div className={styles.user}>
                <p>{item.name}</p>
                <img src={smallPen} alt="/"/>
              </div>
              <p className={styles.desc}>{item.description}</p>
              <p>{item.date}</p>
            </div>
          })
        }
      </div>
    </div>
  );
};

export default FeedBack;