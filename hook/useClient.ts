"use client";
import { useEffect, useState } from "react";

export const useClient = () => {
	const [isClient, setIsClient] = useState<boolean>(false);

	useEffect(() => {
		setIsClient(true);
	});

	return { isClient };
};
