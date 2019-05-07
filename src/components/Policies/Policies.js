import React from 'react';
import { Section, Title } from 'reactbulma';
import PoliciesSidebar from '../PoliciesSidebar/PoliciesSidebar';
import './Policies.css';

const Policies = ({ policies, faq }) => (
      <Section className="policies">
          <Title> Policies</Title>
          <div className="is-size-5-desktop">
            <p className="withSpace">
              Here at Lake Monroe Boat Rental we strive to provide the best boat rental experience on Lake Monroe. We do our best to ensure customer safety and satisfaction during the rental period. Venture out to Lake Monroe and have a safe, fun day on a boat!
            </p>
          </div>
          <div>
            <p className="wthSpace">
              Lake Monroe Boat Rental Policies are as follows:
            </p>
            
            <ul className="left is-size-5-desktop">
              {policies.map(policy =>
              <li key={policy.id}>
                {policy.acf.policy}
              </li>)}
            </ul>
          </div>
          <Title className="titleSpace">Refunds & Cancellations</Title>
          <div>
            <ul className="left is-size-5-desktop">
              <li>There are no refunds due to late check-ins, early return, change of plans, illness, weather, or car problems</li>
              <li>Pontoon & Jet Ski cancellations: must be made 72 HOURS prior to reservation time</li>
              <li>Fishing Boats & Non-motoriezed cancellations: must be made 72 HOURS prior to reservation time</li>
              <li>Double Decker and Ski Boat cancellations: must be made TWO WEEKS prior to scheduled reservation</li>
              <li>Multiple boat reservation cancellations: must be made ONE MONTH prior to the scheduled reservation</li>
            </ul>
          </div>
          <div className="is-hidden-desktop">
            <PoliciesSidebar />
          </div>
          <div>
            <Title className="titleSpace">Weather Policy</Title>
            <div className="left is-size-5-desktop">
            <p>
              Inclement weather is defined as weather where there are unsafe conditions. This includes: severe storms, lightning, high wind advisory, or tornado. If there are inclement weather conditions at Lake Monroe you will be able to reschedule your reservation or delay your departure time.
            </p>
            <p>
              Reschedules are based on actual weather conditions on the lake at the time of the rental, not future weather forecasts. If weather conditions are overcast, cold, cloudy, or rainy, your rental still stands for the day.
            </p>
            <p>
              We cannot give refunds for time not used during a pop-up storm
            </p>
            </div>
          </div>
          <div id="faq">
            <Title className="titleSpace">FAQ</Title>
            <div className="left is-size-5-desktop">
              <ul>
                {faq.map(faq =>
                <div id={faq.id}>
                  <li className="faQuestion" id={faq.id * 2}>
                    {faq.acf.question}
                  </li>
                  <li className="faAnswer" id={faq.id * 3}>
                    {faq.acf.answer}
                  </li>
                </div>)}
              </ul>
            </div>
          </div>
      </Section>
);

export default Policies;
