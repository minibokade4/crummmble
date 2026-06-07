// export default function Reviews() {
//   return (
//     <section id="reviews">

//       <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

//         <p className="section-eyebrow fade-up">
//           Happy neighbours
//         </p>

//         <h2 className="section-title fade-up">
//           They tried it first.
//         </h2>

//         <div className="reviews-grid">

//           <div className="review-card fade-up">

//             <div className="review-stars">
//               ★★★★★
//             </div>

//             <p className="review-text">
//               "Healthy cookies that actually taste amazing."
//             </p>

//             <p className="review-author">
//               Priya S.
//             </p>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }



export default function Reviews() {

  const reviews = [
  {
    id: 1,
    text: "Healthy cookies that actually taste amazing.",
    author: "Priya S.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C4844A"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    )
  },

  {
    id: 2,
    text: "Best homemade cookies in town.",
    author: "Rahul K.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="orange"
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
    )
  }
]

  return (
    <section id="reviews">

      <div className="reviews-grid">

        {
          reviews.map((review) => (

            <div
              className="review-card"
              key={review.id}
            >

              <div className="review-stars">
                {review.icon}
              </div>

              <p className="review-text">
                {review.text}
              </p>

              <p className="review-author">
                {review.author}
              </p>

            </div>

          ))
        }

      </div>

    </section>
  )
}