import pyautogui
import time

print("Press Ctrl+C to stop.")

try:
    while True:
        x, y = pyautogui.position()
        print(f"Mouse position: (x:{x}, y:{y})")
        time.sleep(1)  # Adjust the delay as needed
except KeyboardInterrupt:
    print("\nTracking stopped.")
