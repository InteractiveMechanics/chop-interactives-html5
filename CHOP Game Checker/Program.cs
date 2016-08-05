using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CHOP_Game_Checker
{
    class Program
    {
        static void Main(string[] args)
        {
            bool isRunning = CheckIfProcessIsRunning();

            if (!isRunning)
            {
                //Kill All Script
                ProcessStartInfo killAllProcess = new ProcessStartInfo("cmd.exe", "/c " + "C:\\tasks\\killtask.bat");
                killAllProcess.CreateNoWindow = true;
                killAllProcess.UseShellExecute = false;

                Process killAll = Process.Start(killAllProcess);
                killAll.WaitForExit();

                //Run Launcher
                ProcessStartInfo launchGameProcess = new ProcessStartInfo("cmd.exe", "/c " + "C:\\tasks\\launch.bat");
                launchGameProcess.CreateNoWindow = true;
                launchGameProcess.UseShellExecute = false;

                Process launchGame = Process.Start(launchGameProcess);
                launchGame.WaitForExit();
            }
        }

        static bool CheckIfProcessIsRunning()
        {
            foreach (Process p in Process.GetProcessesByName("WWAHost"))
            {
                if (p.Responding)
                {
                    return true;
                }
            }
            return false;
        }


    }
}
