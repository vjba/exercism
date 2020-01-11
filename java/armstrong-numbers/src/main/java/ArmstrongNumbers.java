class ArmstrongNumbers {

	boolean isArmstrongNumber(int numberToCheck) {
		String _toString = Integer.toString(numberToCheck); // needed for reference (length)
		int total_sum = 0;

		for (int i = 0; i < _toString.length(); i++) {
			if (numberToCheck <= 0) {
				return false;
			} else {
				int temp = Integer.parseInt(_toString.substring(i,i+1));
				total_sum += (int) Math.pow(temp, _toString.length());
			}
		}

		if (total_sum == numberToCheck) {
			return true;
		} else {
			return false;
		}
	}
}