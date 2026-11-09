import { doctors, supportingTeam } from "@/lib/team";
import { BookingButton } from "./booking-provider";
import { Icon } from "./icons";

export default function MedicalTeam() {
  return <section className="section medical-roster" id="medical-team" aria-labelledby="team-title">
    <div className="container">
      <header className="roster-heading">
        <div><span className="eyebrow">آشنایی با همراهان مسیر سلامت شما</span><h2 id="team-title">تیم دکتر رسون،<br /><em>در کنار شما.</em></h2></div>
        <p>پزشکان، پرستاران و کارشناسان همراه ما؛<br />برای مراقبتی متناسب با نیاز و شرایط شما.</p>
      </header>
      <div className="roster-label"><span className="roster-line" aria-hidden="true" /><h3>پزشکان دکتر رسون</h3><span lang="en" dir="ltr">MEET YOUR CARE TEAM</span></div>
      <p className="roster-swipe-hint" id="roster-swipe-hint">برای دیدن پزشکان، کارت‌ها را به طرفین ورق بزنید.</p>
      <ul className="roster-track" tabIndex={0} aria-label="پزشکان دکتر رسون" aria-describedby="roster-swipe-hint">
        {doctors.map((doctor, index) => <li className="doctor-card" key={doctor.id}>
          <div className="doctor-portrait-frame">
            <picture>
              <source type="image/avif" srcSet={[320, 640, 960].map(width => `/images/team/${doctor.id}-${width}.avif ${width}w`).join(", ")} sizes="(max-width: 640px) 78vw, (max-width: 900px) 31vw, 370px" />
              <img src={`/images/team/${doctor.id}-640.webp`} srcSet={[320, 640, 960].map(width => `/images/team/${doctor.id}-${width}.webp ${width}w`).join(", ")} sizes="(max-width: 640px) 78vw, (max-width: 900px) 31vw, 370px" width="960" height="1200" loading="lazy" decoding="async" alt={`پرترهٔ ${doctor.name}؛ ویرایش با هوش مصنوعی`} />
            </picture>
            <span className={`doctor-role-chip${index === 0 ? " doctor-role-chip--founder" : ""}`}><Icon name={index === 0 ? "heart" : "stethoscope"} size={15} />{doctor.label}</span>
          </div>
          <div className="doctor-card-copy">
            <span className="doctor-card-number" lang="en" aria-hidden="true">0{index + 1}</span>
            <h4>{doctor.name}</h4><p className="doctor-role-text">{doctor.role}</p>
            <div className="doctor-card-divider" />
            {doctor.registration ? <p className="doctor-registration"><Icon name="shield" size={17} /><span>شمارهٔ نظام پزشکی <bdi>{doctor.registration}</bdi></span></p> : doctor.profile ? <a className="doctor-founder-link" href={doctor.profile}>آشنایی با مدیر و مؤسس<Icon name="arrow" size={17} /></a> : null}
          </div>
        </li>)}
      </ul>
      <section className="supporting-team" aria-labelledby="supporting-team-title">
        <div className="supporting-heading"><span className="eyebrow">مراقبت، حاصل همراهی یک تیم است</span><h3 id="supporting-team-title">تیم ما همچنین متشکل است از</h3></div>
        <div className="supporting-team-grid">
          {supportingTeam.map(group => <article className="supporting-team-card" key={group.id}>
            <span className="supporting-team-icon"><Icon name={group.icon} size={29} /></span>
            <div><span className="supporting-team-count">{group.count}</span><h4>{group.title}</h4><p>{group.description}</p></div>
          </article>)}
        </div>
      </section>
      <div className="roster-footer"><p>پرتره‌های پزشکان با هوش مصنوعی ویرایش شده‌اند.<br />ارائهٔ خدمت پس از بررسی نیاز شما و هماهنگی نهایی انجام می‌شود.</p><BookingButton service="online-consultation">ثبت درخواست ویزیت آنلاین<Icon name="arrow" size={18} /></BookingButton></div>
    </div>
  </section>;
}
