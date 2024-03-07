SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.5 (Ubuntu 15.5-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', '38e6f3ec-238b-471e-9aa4-8f24143c1c9f', '{"action":"user_signedup","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-03-05 12:10:30.326455+00', ''),
	('00000000-0000-0000-0000-000000000000', '12a46809-2152-4863-b236-3e87d3cf1ec3', '{"action":"login","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-03-05 12:10:30.33046+00', ''),
	('00000000-0000-0000-0000-000000000000', '671b4ab8-cabf-49da-80f7-7db00058fd75', '{"action":"logout","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-03-05 12:12:45.429782+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bc213fa4-95dd-49ea-ab9e-bfd99a9b5990', '{"action":"login","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-03-05 12:13:52.952016+00', ''),
	('00000000-0000-0000-0000-000000000000', '7b30bee8-c042-4312-8022-dbb1a5721ef9', '{"action":"logout","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-03-05 12:21:58.130485+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f9e86ed2-2b6d-47e4-970a-439259c3affa', '{"action":"user_signedup","actor_id":"ed3f514f-a1cb-4912-99c3-cbe92fb35b6e","actor_username":"petrinich.shadow@gmal.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-03-05 12:25:45.944067+00', ''),
	('00000000-0000-0000-0000-000000000000', '070bd5f5-1c8d-46a2-b1ec-c5033d87638b', '{"action":"login","actor_id":"ed3f514f-a1cb-4912-99c3-cbe92fb35b6e","actor_username":"petrinich.shadow@gmal.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-03-05 12:25:45.946505+00', ''),
	('00000000-0000-0000-0000-000000000000', '9e727b5b-a471-4285-a0c5-f8808a6fa85f', '{"action":"logout","actor_id":"ed3f514f-a1cb-4912-99c3-cbe92fb35b6e","actor_username":"petrinich.shadow@gmal.com","actor_via_sso":false,"log_type":"account"}', '2024-03-05 13:16:26.334912+00', ''),
	('00000000-0000-0000-0000-000000000000', '087769ce-b4f3-4068-bc13-53d89d7502aa', '{"action":"login","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-03-05 13:19:04.994369+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e9fc146c-8a15-42b5-993a-ea1e4ca0fc39', '{"action":"token_refreshed","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-03-05 14:17:11.196071+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cd4d726d-82d1-4f32-87f6-8099af5c8434', '{"action":"token_revoked","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-03-05 14:17:11.196647+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e0636236-0c8b-41c9-8960-b41e3b51a14f', '{"action":"token_refreshed","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-03-05 15:15:41.143924+00', ''),
	('00000000-0000-0000-0000-000000000000', '6a41a40e-3418-4eb9-86f8-0b2a88b955ad', '{"action":"token_revoked","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-03-05 15:15:41.14455+00', ''),
	('00000000-0000-0000-0000-000000000000', '1429d130-fc1e-4f0c-9ed8-2aa3e4c736c7', '{"action":"token_refreshed","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-03-05 16:14:11.564455+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e47678e8-d5ca-4e3f-9027-9f03663280da', '{"action":"token_revoked","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-03-05 16:14:11.565312+00', ''),
	('00000000-0000-0000-0000-000000000000', '64766bd8-f359-46e3-afd8-3cd5ee6dd1a6', '{"action":"token_refreshed","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-03-05 17:12:34.078182+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e520e56b-5c42-408b-88f8-76fdd39ee550', '{"action":"token_revoked","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-03-05 17:12:34.079016+00', ''),
	('00000000-0000-0000-0000-000000000000', '2f74b3bb-e3f0-4bba-907f-46bd28a6b987', '{"action":"logout","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-03-05 17:14:54.094078+00', ''),
	('00000000-0000-0000-0000-000000000000', '9463596d-5f46-4581-b914-5d731ff87a09', '{"action":"login","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-03-05 17:15:26.354752+00', ''),
	('00000000-0000-0000-0000-000000000000', '89790777-c24e-45e9-8c73-58194ddf53ee', '{"action":"logout","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-03-05 17:16:07.074356+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c75507a7-be43-4f3b-9b5b-ee48fcc27b07', '{"action":"login","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-03-05 17:18:05.524449+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e5ab4020-9e01-4f2f-afc8-5d49d624cb86', '{"action":"logout","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-03-05 17:19:12.455598+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bb70ed99-55bd-427c-96cd-eedb0de88755', '{"action":"login","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-03-05 17:19:30.166386+00', ''),
	('00000000-0000-0000-0000-000000000000', '358dcdec-4928-465d-b8a3-bc03fe4701fd', '{"action":"logout","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-03-05 17:19:50.965569+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e3b6bb35-3581-44af-9b85-d409b5b992dd', '{"action":"user_signedup","actor_id":"77b0df36-40f1-4963-9394-a2c58b0f169b","actor_username":"petrinich.sergey+1@gmail.com","actor_via_sso":false,"log_type":"team","traits":{"provider":"email"}}', '2024-03-05 17:20:31.860089+00', ''),
	('00000000-0000-0000-0000-000000000000', '6b4803f4-1b79-4257-a1ac-3368498950d8', '{"action":"login","actor_id":"77b0df36-40f1-4963-9394-a2c58b0f169b","actor_username":"petrinich.sergey+1@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-03-05 17:20:31.862594+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fb65cde4-f492-40bc-a356-dc113963353b', '{"action":"logout","actor_id":"77b0df36-40f1-4963-9394-a2c58b0f169b","actor_username":"petrinich.sergey+1@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-03-05 17:21:34.735149+00', ''),
	('00000000-0000-0000-0000-000000000000', '3a236d80-3d04-4322-9152-cbb21d1c2705', '{"action":"login","actor_id":"77b0df36-40f1-4963-9394-a2c58b0f169b","actor_username":"petrinich.sergey+1@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-03-05 17:22:13.060748+00', ''),
	('00000000-0000-0000-0000-000000000000', '330b199f-ec9c-4675-bc60-35f7fee68cca', '{"action":"logout","actor_id":"77b0df36-40f1-4963-9394-a2c58b0f169b","actor_username":"petrinich.sergey+1@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-03-05 17:38:03.969424+00', ''),
	('00000000-0000-0000-0000-000000000000', '8b50b354-d2ea-4dd7-8913-3dd43557ce7c', '{"action":"login","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-03-05 17:42:43.307571+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f7df15ca-781c-4054-8c0b-8a00559319a1', '{"action":"logout","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-03-05 17:44:49.628709+00', ''),
	('00000000-0000-0000-0000-000000000000', '350fe20c-baa6-4744-bbfa-1bd8dc9566ee', '{"action":"login","actor_id":"77b0df36-40f1-4963-9394-a2c58b0f169b","actor_username":"petrinich.sergey+1@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-03-05 17:45:10.404393+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b17b0e00-d729-465a-990d-dfaf143f557b', '{"action":"logout","actor_id":"77b0df36-40f1-4963-9394-a2c58b0f169b","actor_username":"petrinich.sergey+1@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-03-05 17:56:07.678976+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bd67de67-afb1-4737-8a37-d3218b7a7a34', '{"action":"login","actor_id":"77b0df36-40f1-4963-9394-a2c58b0f169b","actor_username":"petrinich.sergey+1@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-03-05 17:57:24.758472+00', ''),
	('00000000-0000-0000-0000-000000000000', '9a0cd6b1-7a62-45b0-b508-feccaad82b35', '{"action":"logout","actor_id":"77b0df36-40f1-4963-9394-a2c58b0f169b","actor_username":"petrinich.sergey+1@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-03-05 18:01:14.697274+00', ''),
	('00000000-0000-0000-0000-000000000000', '86fa02b5-ed2a-444d-809a-f1bdf5bc2963', '{"action":"login","actor_id":"77b0df36-40f1-4963-9394-a2c58b0f169b","actor_username":"petrinich.sergey+1@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-03-05 18:05:05.546067+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e6e1c6a8-cf4d-424f-b0ab-439ea493a581', '{"action":"token_refreshed","actor_id":"77b0df36-40f1-4963-9394-a2c58b0f169b","actor_username":"petrinich.sergey+1@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-03-06 08:12:04.581871+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fc038e94-b935-4a26-9e84-00862f2e2d5f', '{"action":"token_revoked","actor_id":"77b0df36-40f1-4963-9394-a2c58b0f169b","actor_username":"petrinich.sergey+1@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-03-06 08:12:04.582478+00', ''),
	('00000000-0000-0000-0000-000000000000', '8bd2e733-672c-4704-9773-6b82c11ea6fa', '{"action":"token_refreshed","actor_id":"77b0df36-40f1-4963-9394-a2c58b0f169b","actor_username":"petrinich.sergey+1@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-03-06 09:10:09.661835+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cfd28e75-c618-4967-b064-cd5bdbd68fdb', '{"action":"token_revoked","actor_id":"77b0df36-40f1-4963-9394-a2c58b0f169b","actor_username":"petrinich.sergey+1@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-03-06 09:10:09.66249+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e844b9e5-bfd7-4ab6-9874-370c918b42c0', '{"action":"logout","actor_id":"77b0df36-40f1-4963-9394-a2c58b0f169b","actor_username":"petrinich.sergey+1@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-03-06 09:13:48.78981+00', ''),
	('00000000-0000-0000-0000-000000000000', '0c5a774d-42a0-4074-87fe-870cb94f8c83', '{"action":"login","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-03-06 11:46:22.493042+00', ''),
	('00000000-0000-0000-0000-000000000000', '413f9bd5-3329-46d5-b14b-04cc42eb247b', '{"action":"logout","actor_id":"6d583bf6-b7ea-44c8-9ebe-a865748e156f","actor_username":"petrinich.sergey@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-03-06 11:46:58.60822+00', ''),
	('00000000-0000-0000-0000-000000000000', '818f427a-9def-4d19-a24e-7ddbbdfdcd55', '{"action":"login","actor_id":"77b0df36-40f1-4963-9394-a2c58b0f169b","actor_username":"petrinich.sergey+1@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-03-06 11:47:17.827859+00', ''),
	('00000000-0000-0000-0000-000000000000', '63f719f4-d03a-42c6-9e35-11f039377c4d', '{"action":"logout","actor_id":"77b0df36-40f1-4963-9394-a2c58b0f169b","actor_username":"petrinich.sergey+1@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-03-06 11:50:55.536305+00', ''),
	('00000000-0000-0000-0000-000000000000', '915566d0-2cd4-43f9-b5c1-472aedcd7382', '{"action":"login","actor_id":"77b0df36-40f1-4963-9394-a2c58b0f169b","actor_username":"petrinich.sergey+1@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-03-06 11:51:15.100073+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b96209d4-1f10-4397-9729-cf3ea770efce', '{"action":"token_refreshed","actor_id":"77b0df36-40f1-4963-9394-a2c58b0f169b","actor_username":"petrinich.sergey+1@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-03-06 12:49:18.468821+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e346875b-166c-4054-82b6-44e4c2ef095d', '{"action":"token_revoked","actor_id":"77b0df36-40f1-4963-9394-a2c58b0f169b","actor_username":"petrinich.sergey+1@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-03-06 12:49:18.470525+00', ''),
	('00000000-0000-0000-0000-000000000000', '7f107b04-b34b-4bad-9e5e-735258addcbf', '{"action":"token_refreshed","actor_id":"77b0df36-40f1-4963-9394-a2c58b0f169b","actor_username":"petrinich.sergey+1@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-03-06 13:47:21.871064+00', ''),
	('00000000-0000-0000-0000-000000000000', 'eb9714e6-adf1-4e27-92a6-efd237d17d1c', '{"action":"token_revoked","actor_id":"77b0df36-40f1-4963-9394-a2c58b0f169b","actor_username":"petrinich.sergey+1@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-03-06 13:47:21.871688+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fd0fd1e3-3d4f-42f0-b288-325c80130ce0', '{"action":"token_refreshed","actor_id":"77b0df36-40f1-4963-9394-a2c58b0f169b","actor_username":"petrinich.sergey+1@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-03-06 14:45:35.320236+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e61dfac3-c39d-48d4-992a-0ae564cfc256', '{"action":"token_revoked","actor_id":"77b0df36-40f1-4963-9394-a2c58b0f169b","actor_username":"petrinich.sergey+1@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-03-06 14:45:35.321892+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at") VALUES
	('00000000-0000-0000-0000-000000000000', '6d583bf6-b7ea-44c8-9ebe-a865748e156f', 'authenticated', 'authenticated', 'petrinich.sergey@gmail.com', '$2a$10$KFha/DIazBUrysZt19KNSu90igepwPBiEcNcJMzhgBPCBP7I8BzyW', '2024-03-05 12:10:30.327408+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-03-06 11:46:22.493806+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-03-05 12:10:30.318574+00', '2024-03-06 11:46:22.496052+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL),
	('00000000-0000-0000-0000-000000000000', 'ed3f514f-a1cb-4912-99c3-cbe92fb35b6e', 'authenticated', 'authenticated', 'petrinich.shadow@gmal.com', '$2a$10$RMtO84b8OHv6lhF1qh4FJepS79u7wQRatnUhXAwog1cF7jNEhsWM.', '2024-03-05 12:25:45.944575+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-03-05 12:25:45.946986+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-03-05 12:25:45.939582+00', '2024-03-05 12:25:45.948804+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL),
	('00000000-0000-0000-0000-000000000000', '77b0df36-40f1-4963-9394-a2c58b0f169b', 'authenticated', 'authenticated', 'petrinich.sergey+1@gmail.com', '$2a$10$tfWF6fGedoKdskO3N/.afOwVJQ1iSukYQsG7lbaNvmTNuMbBTuMFe', '2024-03-05 17:20:31.860638+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-03-06 11:51:15.101027+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-03-05 17:20:31.853047+00', '2024-03-06 14:45:35.328263+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('6d583bf6-b7ea-44c8-9ebe-a865748e156f', '6d583bf6-b7ea-44c8-9ebe-a865748e156f', '{"sub": "6d583bf6-b7ea-44c8-9ebe-a865748e156f", "email": "petrinich.sergey@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2024-03-05 12:10:30.32522+00', '2024-03-05 12:10:30.325271+00', '2024-03-05 12:10:30.325271+00', '8122fa20-248b-445c-8ef9-eb3fd0e63559'),
	('ed3f514f-a1cb-4912-99c3-cbe92fb35b6e', 'ed3f514f-a1cb-4912-99c3-cbe92fb35b6e', '{"sub": "ed3f514f-a1cb-4912-99c3-cbe92fb35b6e", "email": "petrinich.shadow@gmal.com", "email_verified": false, "phone_verified": false}', 'email', '2024-03-05 12:25:45.943193+00', '2024-03-05 12:25:45.943243+00', '2024-03-05 12:25:45.943243+00', '4e418654-4532-4578-9f6b-f1b246faf330'),
	('77b0df36-40f1-4963-9394-a2c58b0f169b', '77b0df36-40f1-4963-9394-a2c58b0f169b', '{"sub": "77b0df36-40f1-4963-9394-a2c58b0f169b", "email": "petrinich.sergey+1@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2024-03-05 17:20:31.85901+00', '2024-03-05 17:20:31.859068+00', '2024-03-05 17:20:31.859068+00', 'f96b1641-aafe-4c6f-87b3-f9e996023fec');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('87bc79dd-3efe-4da2-b93c-450b55fec12f', '77b0df36-40f1-4963-9394-a2c58b0f169b', '2024-03-06 11:51:15.101112+00', '2024-03-06 14:45:35.329667+00', NULL, 'aal1', NULL, '2024-03-06 14:45:35.329588', 'okhttp/4.9.2', '46.53.253.140', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('87bc79dd-3efe-4da2-b93c-450b55fec12f', '2024-03-06 11:51:15.104136+00', '2024-03-06 11:51:15.104136+00', 'password', 'f8a938d9-b72d-4abc-868d-9f59088e4ba8');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 22, 'xsXDAi9zXLBRpMSam-T3mw', '77b0df36-40f1-4963-9394-a2c58b0f169b', true, '2024-03-06 11:51:15.102256+00', '2024-03-06 12:49:18.471066+00', NULL, '87bc79dd-3efe-4da2-b93c-450b55fec12f'),
	('00000000-0000-0000-0000-000000000000', 23, '16pkvz6S20Aj6DjerHOUZw', '77b0df36-40f1-4963-9394-a2c58b0f169b', true, '2024-03-06 12:49:18.473425+00', '2024-03-06 13:47:21.872215+00', 'xsXDAi9zXLBRpMSam-T3mw', '87bc79dd-3efe-4da2-b93c-450b55fec12f'),
	('00000000-0000-0000-0000-000000000000', 24, 'AdzpmzArubKQppyO1b7BZA', '77b0df36-40f1-4963-9394-a2c58b0f169b', true, '2024-03-06 13:47:21.872687+00', '2024-03-06 14:45:35.322442+00', '16pkvz6S20Aj6DjerHOUZw', '87bc79dd-3efe-4da2-b93c-450b55fec12f'),
	('00000000-0000-0000-0000-000000000000', 25, 'osT1KcV6bsOLO9a0cp_ZDA', '77b0df36-40f1-4963-9394-a2c58b0f169b', false, '2024-03-06 14:45:35.325037+00', '2024-03-06 14:45:35.325037+00', 'AdzpmzArubKQppyO1b7BZA', '87bc79dd-3efe-4da2-b93c-450b55fec12f');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."profiles" ("id", "updated_at", "username", "full_name", "avatar_url", "website", "group") VALUES
	('ed3f514f-a1cb-4912-99c3-cbe92fb35b6e', NULL, NULL, NULL, NULL, NULL, 'ADMIN'),
	('77b0df36-40f1-4963-9394-a2c58b0f169b', NULL, NULL, NULL, NULL, NULL, 'ADMIN');


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."orders" ("id", "created_at", "status", "total", "user_id") VALUES
	(2, '2024-03-06 09:05:07.733444+00', 'Delivered', 1241, '77b0df36-40f1-4963-9394-a2c58b0f169b'),
	(3, '2024-03-06 12:32:42.710698+00', 'Delivering', 14.99, '77b0df36-40f1-4963-9394-a2c58b0f169b'),
	(1, '2024-03-06 09:04:55.936289+00', 'Cooking', 123, 'ed3f514f-a1cb-4912-99c3-cbe92fb35b6e'),
	(4, '2024-03-06 13:08:50.620028+00', 'New', 0, NULL);


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."products" ("id", "created_at", "name", "image", "price") VALUES
	(1, '2024-03-05 13:25:23.18245+00', 'Lisizza', NULL, 14.99),
	(4, '2024-03-06 13:41:27.994987+00', 'tEST', '802f63dd-76f6-4505-b86a-8d5223423251.png', 9.99);


--
-- Data for Name: order_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."order_items" ("id", "created_at", "size", "quantity", "order_id", "product_id") VALUES
	(1, '2024-03-06 12:32:42.996365+00', 'L', 1, 3, 1);


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id") VALUES
	('avatars', 'avatars', NULL, '2024-03-05 12:21:30.185499+00', '2024-03-05 12:21:30.185499+00', false, false, NULL, NULL, NULL),
	('product-images', 'product-images', NULL, '2024-03-06 13:48:12.896647+00', '2024-03-06 13:48:12.896647+00', false, false, NULL, NULL, NULL);


--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."objects" ("id", "bucket_id", "name", "owner", "created_at", "updated_at", "last_accessed_at", "metadata", "version", "owner_id") VALUES
	('6034627d-fce7-4edd-a7df-304cded236b2', 'product-images', '802f63dd-76f6-4505-b86a-8d5223423251.png', '77b0df36-40f1-4963-9394-a2c58b0f169b', '2024-03-06 13:55:00.020647+00', '2024-03-06 13:55:00.020647+00', '2024-03-06 13:55:00.020647+00', '{"eTag": "\"25ab22efb85c6561e1339f757cd5c19f\"", "size": 40293, "mimetype": "image/png", "cacheControl": "max-age=3600", "lastModified": "2024-03-06T13:55:00.000Z", "contentLength": 40293, "httpStatusCode": 200}', 'ef1ad9f1-156f-4b22-971f-0f8b7923178d', '77b0df36-40f1-4963-9394-a2c58b0f169b');


--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 25, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: order_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."order_items_id_seq"', 1, true);


--
-- Name: orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."orders_id_seq"', 4, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."products_id_seq"', 6, true);


--
-- PostgreSQL database dump complete
--

RESET ALL;
