
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import bg from "../../../assets/images/appointment.png";

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
 
  return (
    <header
      className="my-6"
      style={{
          background: `url(${bg})`,
          
      }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className=" rounded-lg shadow-2xl lg:w-1/2"
            alt="dentist chair"
          />
          <div className="md:w-1/2">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
                      ></DayPicker>
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
