import java.time.LocalDate;
import java.time.LocalDateTime;

class Gigasecond {

  LocalDateTime result;

  Gigasecond(LocalDate birthDate) {
    if (birthDate == null) {
      this.result = LocalDateTime.parse("0000,00,00,00,00,00");
      this.result = result.plusSeconds(1000000000);
    } else if (birthDate != null) {
      this.result = birthDate.atStartOfDay().plusSeconds(1000000000);
    }
  }

  Gigasecond(LocalDateTime birthDateTime) {
    this.result = birthDateTime.plusSeconds(1000000000);
  }

  LocalDateTime getDate() {
    return result;
  }
}