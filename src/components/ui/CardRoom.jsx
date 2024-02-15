import interior01 from "../../assets/img/hotel-interior-01.jpeg";

export default function Card({ title }) {
  return (
    <div className="card">
      <img src={interior01} alt="hotel-interior-01" />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-primary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis unde
          enim tempora excepturi dignissimos corporis in! Sed unde perspiciatis
          libero rerum ut blanditiis culpa repellat eum consectetur totam,
          assumenda iste.
        </p>
      </div>
    </div>
  );
}
