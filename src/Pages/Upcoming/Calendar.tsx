import React, { useEffect } from 'react';
import { useTheme } from "../../Pages/Home/useTheme";

const Calendar: React.FC = () => {
    const { isDark } = useTheme();
  
    const calendarEmbed = isDark 
      ? `<iframe src="https://embed.styledcalendar.com/#hUd5KfchH6GnoJDBxOhr" title="Styled Calendar" class="styled-calendar-container" style="width: 100%; height: 800px; border: none;" data-cy="calendar-embed-iframe"></iframe>
  <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>`
      : `<iframe src="https://embed.styledcalendar.com/#ofAM0ag248PuRZKOck99" title="Styled Calendar" class="styled-calendar-container" style="width: 100%; height: 800px; border: none;" data-cy="calendar-embed-iframe"></iframe>
  <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>`;
  
    return (
      <div className={`w-[90%] max-w-[1204px] mx-auto my-auto min-h-[500px]`}>
        <div dangerouslySetInnerHTML={{ __html: calendarEmbed }} />
      </div>
    );
  };
  
  export default Calendar;
  