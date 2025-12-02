"use client";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { subjects } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SubjectFilter = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedSubject, setSelectedSubject] = useState<string>("");

  useEffect(() => {
    let newUrl = "";
    if (selectedSubject === "all") {
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["subject"],
      });
    } else {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value: selectedSubject,
      });
    }
    router.push(newUrl, { scroll: false });
  }, [selectedSubject, router, searchParams, pathname]);
  return (
    <Select onValueChange={setSelectedSubject} value={selectedSubject}>
      <SelectTrigger className="input capitalize">
        <SelectValue placeholder="Select subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Subjects</SelectItem>
        {subjects.map((subject) => (
          <SelectItem value={subject} key={subject} className="capitalize">
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SubjectFilter;
