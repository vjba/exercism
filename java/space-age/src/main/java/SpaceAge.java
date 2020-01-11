import java.time.LocalDateTime;

class SpaceAge {

  double ageInSec;
  double earthYear = 31557600;

  SpaceAge(double seconds) {
    if (seconds <= 0) {
      this.ageInSec = 0;
    } else {
      this.ageInSec = seconds;
    }
  }

  double getSeconds() {
    return ageInSec;
  }

  double onEarth() {
    return ageInSec / earthYear;
  }

  double onMercury() {
    return ageInSec / (earthYear * 0.2408467);
  }

  double onVenus() {
    return ageInSec / (earthYear * 0.61519726);
  }

  double onMars() {
    return ageInSec / (earthYear * 1.8808158);
  }

  double onJupiter() {
    return ageInSec / (earthYear * 11.862615);
  }

  double onSaturn() {
    return ageInSec / (earthYear * 29.447498);
  }

  double onUranus() {
    return ageInSec / (earthYear * 84.016846);
  }

  double onNeptune() {
    return ageInSec / (earthYear * 164.79132);
  }
}