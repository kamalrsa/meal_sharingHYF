import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Review() {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [desc, setDesc] = useState("");
  const [star, setStar] = useState("");
  const [filterMeal, setFilterMeal] = useState({});
  console.log(filterMeal);
  useEffect(() => {
    (async () => {
      const result = await fetch("/api/reviews/" + id).then((res) =>
        res.json()
      );

      console.log(result);
      setFilterMeal(result);
    })();
  }, [id]);

  function onSubmit() {
    async function fetchReview() {
      await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: comment,
          description: desc,
          stars: star,
          meal_id: id,
        }),
      });
    }
    fetchReview();
    alert("Thanks for your comment");
  }

  return (
    <div className="mealName">
      <div id="card">
        <h3 class="card-header badge-warning mb-3 text-white">Review</h3>
        <div class="card-body">
          <form>
            <div class="col-7 col-md-3">
              <label>Comment</label>
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></input>
            </div>
            <div class="col-7 col-md-3">
              <label className="col-md-2 col-form-label">Description</label>
              <input
                type="text"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></input>
            </div>
            <div class="col-7 col-md-3">
              <label className="col-md-2 col-form-label">Star</label>
              <input
                type="text"
                value={star}
                onChange={(e) => setStar(e.target.value)}
              ></input>
            </div>

            <div class="form-group row">
              <div class="offset-md-2 col-md-5">
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={onSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
