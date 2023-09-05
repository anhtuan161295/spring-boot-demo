package backend.services;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import backend.models.HostBean;

@Service
public class NMapService {
	private static final Logger logger = LoggerFactory.getLogger(NMapService.class);


	public static List<String> scan() {
		List<String> result = new ArrayList<>();


		return Collections.emptyList();
	}

	public static void main(String[] args) {

		try {
			String[] command = new String[]{"/bin/bash", "-c", "nmap 10.0.4.1-255 -sP"};
			ProcessBuilder processBuilder = new ProcessBuilder();
			processBuilder.command(command);
			Process process = processBuilder.start();

			List<String> lines = IOUtils.readLines(process.getInputStream(), StandardCharsets.UTF_8);

			List<HostBean> list = lines.stream().map(Objects::toString)
					.filter(i -> StringUtils.contains(i, "Nmap scan report for"))
					.filter(i -> StringUtils.contains(i, "("))
					.map(i -> StringUtils.remove(i, "Nmap scan report for "))
					.map(i -> {
						HostBean bean = new HostBean();
						String name = StringUtils.substringBefore(Objects.toString(i), " (");
						String address = StringUtils.substringBetween(Objects.toString(i), "(", ")");
						bean.setName(name);
						bean.setIpAddress(address);
						return bean;
					})
					.collect(Collectors.toList());


			for (HostBean hostBean : list) {
				logger.info(hostBean.getName());
				logger.info(hostBean.getIpAddress());
			}

		} catch (Exception e) {
			logger.error("Error in executing nmap");
		}


	}

}
