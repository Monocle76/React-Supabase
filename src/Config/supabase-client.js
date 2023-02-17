import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    "https://bzqxhxjnhivwnpfenzyn.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6cXhoeGpuaGl2d25wZmVuenluIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NjYyODkxNSwiZXhwIjoxOTkyMjA0OTE1fQ.OTR7AHHqy11u9hsYnF3V_rgpswM5mOsVQS_jxe-Jpvo"
)

export default supabase
