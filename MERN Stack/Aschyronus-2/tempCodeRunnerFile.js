    setTimeout(() => {
        if (duration > 0) {
          resolve(duration);
        } else {
          reject("Invalid duration. Please provide a positive number.");
        }
      },5000);