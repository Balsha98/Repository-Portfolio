import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <div className="hero__eyebrow">Available for hire</div>

        <h1 className="hero__title">
          Frontend<br />
          <em>Engineer</em>
        </h1>

        <p className="hero__desc">
          I build fast, accessible interfaces that people actually enjoy using.
          6 years turning design into pixel-perfect, performant reality.
        </p>

        <div className="hero__cta">
          <a href="#projects" className="btn btn-primary">View Work</a>
          <a href="#contact"  className="btn btn-ghost">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}
