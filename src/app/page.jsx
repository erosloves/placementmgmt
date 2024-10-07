import css from "./page.module.css";
export default function Page() {
  return (
    <div className={css.home} style={{ fontSize: 0 }}>
      <section className={css.promo}>
        <span className={css.ticker}>
          <span className={css.ticker_item}>
            models | fashion | agencies | beauty | creators | networking |
            education | photographers | knowleges | blogging | people | models |
            fashion | agencies | beauty | creators | networking | education |
            photographers | knowleges | blogging | people |
          </span>
          <span className={css.ticker_item}>
            models | fashion | agencies | beauty | creators | networking |
            education | photographers | knowleges | blogging | people | models |
            fashion | agencies | beauty | creators | networking | education |
            photographers | knowleges | blogging | people |
          </span>
          <span className={css.ticker_item}>
            models | fashion | agencies | beauty | creators | networking |
            education | photographers | knowleges | blogging | people | models |
            fashion | agencies | beauty | creators | networking | education |
            photographers | knowleges | blogging | people |
          </span>
          <span className={css.ticker_item}>
            models | fashion | agencies | beauty | creators | networking |
            education | photographers | knowleges | blogging | people | models |
            fashion | agencies | beauty | creators | networking | education |
            photographers | knowleges | blogging | people |
          </span>
        </span>
        <div className={css.layout}></div>
        <video autoPlay playsInline muted loop>
          <source src="/header.mp4" />
        </video>
        <span className={css.ticker}>
          models | fashion | agencies | beauty | creators | networking |
          education | photographers | knowleges | blogging | people | models |
          fashion | agencies | beauty | creators | networking | education |
          photographers | knowleges | blogging | people |
        </span>
      </section>
    </div>
  );
}
