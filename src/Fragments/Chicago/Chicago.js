
export default function Chicago() {
    return (
      <div className="little-lemon">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant,
            <br />
            Our cuisine is rooted in traditional <br />
            recipes but with a modern flair.
            <br />
            We offer a unique dining experience <br />
            with a focus on high-quality <br />
            ingredients and exceptional service.
          </p>
        </div>
        <div>
          <img
            src={require("../../assets/Chefs/Mario and Adrian A.jpg")}
            alt="chefsa"
            className="chefsa"
          />
          <img
            src={require("../../assets/Chefs/Mario and Adrian b.jpg")}
            alt="chefsb"
            className="chefsb"
          />
        </div>
      </div>
    );
  }

