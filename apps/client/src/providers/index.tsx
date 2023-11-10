import { TooltipProvider } from "@reactive-resume/ui";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";

import { queryClient } from "../libs/query-client";
import { DialogProvider } from "./dialog";
import { LocaleProvider } from "./locale";
import { ThemeProvider } from "./theme";
import { Toaster } from "./toaster";

export const Providers = () => (
  <LocaleProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <DialogProvider>
            <HelmetProvider>
              <Outlet />

              <Toaster />
            </HelmetProvider>
          </DialogProvider>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </LocaleProvider>
);
