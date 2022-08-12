--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.4

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: bill
--

CREATE TABLE public.ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.ar_internal_metadata OWNER TO bill;

--
-- Name: passwordless_sessions; Type: TABLE; Schema: public; Owner: bill
--

CREATE TABLE public.passwordless_sessions (
    id bigint NOT NULL,
    authenticatable_type character varying,
    authenticatable_id bigint,
    timeout_at timestamp without time zone NOT NULL,
    expires_at timestamp without time zone NOT NULL,
    claimed_at timestamp without time zone,
    user_agent text NOT NULL,
    remote_addr character varying NOT NULL,
    token character varying NOT NULL,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


ALTER TABLE public.passwordless_sessions OWNER TO bill;

--
-- Name: passwordless_sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: bill
--

CREATE SEQUENCE public.passwordless_sessions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.passwordless_sessions_id_seq OWNER TO bill;

--
-- Name: passwordless_sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: bill
--

ALTER SEQUENCE public.passwordless_sessions_id_seq OWNED BY public.passwordless_sessions.id;


--
-- Name: prompt_grammars; Type: TABLE; Schema: public; Owner: bill
--

CREATE TABLE public.prompt_grammars (
    id bigint NOT NULL,
    content character varying,
    weight integer DEFAULT 1,
    added_by_id bigint NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.prompt_grammars OWNER TO bill;

--
-- Name: prompt_grammars_id_seq; Type: SEQUENCE; Schema: public; Owner: bill
--

CREATE SEQUENCE public.prompt_grammars_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.prompt_grammars_id_seq OWNER TO bill;

--
-- Name: prompt_grammars_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: bill
--

ALTER SEQUENCE public.prompt_grammars_id_seq OWNED BY public.prompt_grammars.id;


--
-- Name: prompt_lengths; Type: TABLE; Schema: public; Owner: bill
--

CREATE TABLE public.prompt_lengths (
    id bigint NOT NULL,
    content character varying,
    weight integer DEFAULT 1,
    added_by_id bigint NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.prompt_lengths OWNER TO bill;

--
-- Name: prompt_lengths_id_seq; Type: SEQUENCE; Schema: public; Owner: bill
--

CREATE SEQUENCE public.prompt_lengths_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.prompt_lengths_id_seq OWNER TO bill;

--
-- Name: prompt_lengths_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: bill
--

ALTER SEQUENCE public.prompt_lengths_id_seq OWNED BY public.prompt_lengths.id;


--
-- Name: prompt_topics; Type: TABLE; Schema: public; Owner: bill
--

CREATE TABLE public.prompt_topics (
    id bigint NOT NULL,
    content character varying,
    weight integer DEFAULT 1,
    added_by_id bigint NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.prompt_topics OWNER TO bill;

--
-- Name: prompt_topics_id_seq; Type: SEQUENCE; Schema: public; Owner: bill
--

CREATE SEQUENCE public.prompt_topics_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.prompt_topics_id_seq OWNER TO bill;

--
-- Name: prompt_topics_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: bill
--

ALTER SEQUENCE public.prompt_topics_id_seq OWNED BY public.prompt_topics.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: bill
--

CREATE TABLE public.schema_migrations (
    version character varying NOT NULL
);


ALTER TABLE public.schema_migrations OWNER TO bill;

--
-- Name: submissions; Type: TABLE; Schema: public; Owner: bill
--

CREATE TABLE public.submissions (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    prompt text,
    response text,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.submissions OWNER TO bill;

--
-- Name: submissions_id_seq; Type: SEQUENCE; Schema: public; Owner: bill
--

CREATE SEQUENCE public.submissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.submissions_id_seq OWNER TO bill;

--
-- Name: submissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: bill
--

ALTER SEQUENCE public.submissions_id_seq OWNED BY public.submissions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: bill
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    email character varying,
    name character varying,
    japanese_name character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    locale character varying,
    discord_username character varying,
    discord_id character varying,
    discord_discriminator integer,
    discord_reminders boolean
);


ALTER TABLE public.users OWNER TO bill;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: bill
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO bill;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: bill
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: passwordless_sessions id; Type: DEFAULT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.passwordless_sessions ALTER COLUMN id SET DEFAULT nextval('public.passwordless_sessions_id_seq'::regclass);


--
-- Name: prompt_grammars id; Type: DEFAULT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.prompt_grammars ALTER COLUMN id SET DEFAULT nextval('public.prompt_grammars_id_seq'::regclass);


--
-- Name: prompt_lengths id; Type: DEFAULT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.prompt_lengths ALTER COLUMN id SET DEFAULT nextval('public.prompt_lengths_id_seq'::regclass);


--
-- Name: prompt_topics id; Type: DEFAULT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.prompt_topics ALTER COLUMN id SET DEFAULT nextval('public.prompt_topics_id_seq'::regclass);


--
-- Name: submissions id; Type: DEFAULT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.submissions ALTER COLUMN id SET DEFAULT nextval('public.submissions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: ar_internal_metadata; Type: TABLE DATA; Schema: public; Owner: bill
--

COPY public.ar_internal_metadata (key, value, created_at, updated_at) FROM stdin;
environment	development	2022-07-30 21:31:46.215462	2022-07-30 21:31:46.215462
schema_sha1	4bec666c582ac64973887a4dd85f6de52729df91	2022-07-30 21:31:46.229931	2022-07-30 21:31:46.229931
\.


--
-- Data for Name: passwordless_sessions; Type: TABLE DATA; Schema: public; Owner: bill
--

COPY public.passwordless_sessions (id, authenticatable_type, authenticatable_id, timeout_at, expires_at, claimed_at, user_agent, remote_addr, token, created_at, updated_at) FROM stdin;
1	User	1	2022-07-31 00:54:43.598441	2023-07-30 23:54:43.598287	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	l_Xal_F0EXTqNz3P43gqi34-eRmibdvwjVCxjfQZKc4	2022-07-30 23:54:43.602108	2022-07-30 23:54:43.602108
2	User	1	2022-07-31 00:59:49.119632	2023-07-30 23:59:49.119482	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	bWOWjbiPak40TLuy3x0f0_lzVNTArG8bfWIMRTMwNSU	2022-07-30 23:59:49.122841	2022-07-30 23:59:49.122841
3	User	1	2022-07-31 01:00:09.041579	2023-07-31 00:00:09.041375	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	IQk8k7-nKhse14l8erOwXx1AF-SFmhJ8aPtjCqrf004	2022-07-31 00:00:09.044034	2022-07-31 00:00:09.044034
4	User	1	2022-07-31 01:00:26.079358	2023-07-31 00:00:26.079232	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	dSoxMprCS-HBvHZtoxYsbWo_DcrLv1Z4jJvh2Q87BSo	2022-07-31 00:00:26.081671	2022-07-31 00:00:26.081671
5	User	1	2022-07-31 01:00:33.331708	2023-07-31 00:00:33.331594	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	uAUmyvNzixt6qF2UiZKbRB0IbLJRcHPmgVkct68Runk	2022-07-31 00:00:33.334185	2022-07-31 00:00:33.334185
6	User	1	2022-07-31 01:00:44.68861	2023-07-31 00:00:44.688478	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	DpY9GsENA6yWpgXMQdsR2jBtBIbDI4T9aIgh83k4Siw	2022-07-31 00:00:44.6913	2022-07-31 00:00:44.6913
7	User	1	2022-07-31 01:00:47.266352	2023-07-31 00:00:47.266246	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	oYC552dcza7suqu4C2DaD3imUhGlLSeRYExSVbpmzDg	2022-07-31 00:00:47.268283	2022-07-31 00:00:47.268283
8	User	5	2022-07-31 01:38:40.746397	2023-07-31 00:38:40.746167	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	wmWZxdFCeW0wmABt-R4U_uI7RdMFCmv2rBBwG0KyPas	2022-07-31 00:38:40.75063	2022-07-31 00:38:40.75063
9	User	5	2022-07-31 01:39:23.543026	2023-07-31 00:39:23.54289	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	XZknU9-12r4rRESin24dTlu5LWv0WDadZdrcn4t0Pzs	2022-07-31 00:39:23.546461	2022-07-31 00:39:23.546461
10	User	5	2022-07-31 01:40:37.426735	2023-07-31 00:40:37.426457	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	HUx9nNgjjyOZRxe7pujCJjFINgu3mtXo5wCpprPQ2VA	2022-07-31 00:40:37.432708	2022-07-31 00:40:37.432708
11	User	5	2022-07-31 01:41:49.212748	2023-07-31 00:41:49.212048	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	GL-lDrREyFmiwb9belNnLzLc2UakDrjFt7JVXDrdVDY	2022-07-31 00:41:49.21882	2022-07-31 00:41:49.21882
12	User	5	2022-07-31 08:21:14.251261	2023-07-31 07:21:14.251106	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	dgK7I-l_VkJhlLts0SA5j_fJuxGDrFRxX-xREo5QBQU	2022-07-31 07:21:14.255602	2022-07-31 07:21:14.255602
13	User	5	2022-07-31 08:25:00.229049	2023-07-31 07:25:00.228739	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	ho34p6Zs8gLpWYbdMuUQQY71nCpjlvSFNAb4rQKmHHw	2022-07-31 07:25:00.235201	2022-07-31 07:25:00.235201
14	User	5	2022-07-31 08:25:39.540166	2023-07-31 07:25:39.539915	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	dFXZdV-KOjJs66zR9_tyMOTA2eYFClURkjzOJxHJ7no	2022-07-31 07:25:39.546504	2022-07-31 07:25:39.546504
15	User	5	2022-07-31 08:32:24.418263	2023-07-31 07:32:24.418023	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	mJ9KhMjGLa7MgnjVCg3i6_7ZM1Cvs68FK-ZQb_fjXNI	2022-07-31 07:32:24.424169	2022-07-31 07:32:24.424169
16	User	5	2022-07-31 08:37:31.351277	2023-07-31 07:37:31.351089	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	cu_YGX9ro8OYHFLOZ00nCsHynca120e4Tz1dRGwTf-w	2022-07-31 07:37:31.356881	2022-07-31 07:37:31.356881
17	User	5	2022-07-31 08:38:04.732978	2023-07-31 07:38:04.732686	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	jJFTg9xWjFkoJq_mWfwwI6iaPM5wQzy9ipS9OvmFYvU	2022-07-31 07:38:04.739392	2022-07-31 07:38:04.739392
18	User	5	2022-07-31 09:26:23.224657	2023-07-31 08:26:23.224504	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	jseX9O8mB30V6nLnJprhpWjsY5uHdgeIaJ5M6cOAjVE	2022-07-31 08:26:23.228424	2022-07-31 08:26:23.228424
19	User	6	2022-07-31 09:27:16.281682	2023-07-31 08:27:16.281581	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	v2X2-u9zOQ42cCj3lwURAmGjmk7iu9PxPY-YdKyCMiQ	2022-07-31 08:27:16.285009	2022-07-31 08:27:16.285009
20	User	7	2022-07-31 09:29:28.538397	2023-07-31 08:29:28.538291	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	l_CnYyNsJ7g0jmk0lmbVen_-ay02i68H3xywOEAp_uo	2022-07-31 08:29:28.540933	2022-07-31 08:29:28.540933
21	User	8	2022-07-31 09:30:57.657995	2023-07-31 08:30:57.657875	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	0TqqwVdTNGo1bKmoHVATm_CVZ57CSBnHC0U-EGYJvI4	2022-07-31 08:30:57.660875	2022-07-31 08:30:57.660875
22	User	6	2022-07-31 09:38:50.978317	2023-07-31 08:38:50.978181	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	IJ5GAvug8ZFmVa2ghDOWzf9Bm8MmEyDEMtKkgy9_tM0	2022-07-31 08:38:50.981337	2022-07-31 08:38:50.981337
23	User	6	2022-07-31 09:40:57.470769	2023-07-31 08:40:57.470295	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	3ahlGyaCTWBe00MOn2lURlxxzdjs04eAROK6oq1JAx4	2022-07-31 08:40:57.476866	2022-07-31 08:40:57.476866
24	User	6	2022-07-31 11:30:05.52998	2023-07-31 10:30:05.529784	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	mZuGpt1g7N_iMGG6AdK0P1FL3pEJp0bV4DU4K9ZreuE	2022-07-31 10:30:05.534127	2022-07-31 10:30:05.534127
25	User	6	2022-07-31 11:36:58.792249	2023-07-31 10:36:58.792104	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	JG34LWnups0a8AgI1_sNCsAc-X3iEpgRiZqOsE_vMJo	2022-07-31 10:36:58.795888	2022-07-31 10:36:58.795888
26	User	6	2022-07-31 11:41:23.083395	2023-07-31 10:41:23.083218	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	AKJ98iGrb2jyuGFLolov4jQUlzlNq7I8I49MmeUywa8	2022-07-31 10:41:23.086445	2022-07-31 10:41:23.086445
27	User	6	2022-07-31 11:41:42.500298	2023-07-31 10:41:42.500103	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36	::1	TwkZPayy5jVxbJqNjo9-KsX8B4bQ_HFxgAKhQBMY3pA	2022-07-31 10:41:42.50481	2022-07-31 10:41:42.50481
28	User	6	2022-07-31 11:46:45.134407	2023-07-31 10:46:45.134267	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	zK4Aj2EWIgIMsZwC30cHI9vYrwhPevq84idWllXU0Bg	2022-07-31 10:46:45.138082	2022-07-31 10:46:45.138082
29	User	5	2022-07-31 11:51:09.973825	2023-07-31 10:51:09.973663	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	TQetzqBBJ00_BXwM1E1b_O_l0bYWM5DDmHS6Rs8PBBA	2022-07-31 10:51:09.977877	2022-07-31 10:51:09.977877
30	User	5	2022-07-31 11:52:06.490521	2023-07-31 10:52:06.490411	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	KpJAu4MzbDpwykHukF2lFjixpdJZfc4JsZO_xVxm8NA	2022-07-31 10:52:06.495873	2022-07-31 10:52:06.495873
31	User	5	2022-07-31 12:18:59.652024	2023-07-31 11:18:59.651861	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	Jqq51RpDWdFubHnvMRAzNy4DP0U6HoJhmCfiePLsB2k	2022-07-31 11:18:59.655226	2022-07-31 11:18:59.655226
32	User	6	2022-07-31 12:20:06.701824	2023-07-31 11:20:06.701702	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	fQ0y5JpRQgYSxoQbvil5tWMQQBbLqroe4Hm2n4DnegE	2022-07-31 11:20:06.704983	2022-07-31 11:20:06.704983
33	User	6	2022-07-31 12:20:11.398904	2023-07-31 11:20:11.398778	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	qN5nx-iN5m6i9ApRfZ-j8W5ajwSn6Ln6viNGlIzhGLQ	2022-07-31 11:20:11.402059	2022-07-31 11:20:11.402059
34	User	5	2022-07-31 12:48:53.869107	2023-07-31 11:48:53.868947	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	K2J5FKM3UyaqfG-IdnC3lmIJXzovouu2l16s5bABthU	2022-07-31 11:48:53.872759	2022-07-31 11:48:53.872759
35	User	5	2022-08-02 23:31:08.39319	2023-08-02 22:31:08.392995	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	QU0117I3cXxZ6245jZPdJPlYCDEAZw0SsScCaCLCdz8	2022-08-02 22:31:08.396442	2022-08-02 22:31:08.396442
36	User	5	2022-08-02 23:32:20.694173	2023-08-02 22:32:20.69401	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	QBYpbJAONcz2uOJvclwy91WYruXCk2Qg4SCk3X8Q8uI	2022-08-02 22:32:20.697	2022-08-02 22:32:20.697
37	User	5	2022-08-02 23:34:26.622937	2023-08-02 22:34:26.622776	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	Skflf461yCza92KepGtkkYTZqPP0FAqC58dZs3o8rFE	2022-08-02 22:34:26.626922	2022-08-02 22:34:26.626922
38	User	5	2022-08-06 13:59:55.864891	2023-08-06 12:59:55.863762	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	dv4z34oGbwRdx7gBJEdzfsttTF93TwYLzdTNJXS7N3w	2022-08-06 12:59:55.868435	2022-08-06 12:59:55.868435
39	User	5	2022-08-06 14:13:00.913479	2023-08-06 13:13:00.913077	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	wqBuXilRp2x9S4QVCCaGQBM76DzS3SQOy3bYjYE4DBs	2022-08-06 13:13:00.917233	2022-08-06 13:13:00.917233
40	User	5	2022-08-06 14:14:31.088072	2023-08-06 13:14:31.087902	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	YNv9ZsyI8JT5ByPjuKHuhyfZgfgj41ZnmChYF3bSTis	2022-08-06 13:14:31.092093	2022-08-06 13:14:31.092093
41	User	5	2022-08-06 14:15:29.57249	2023-08-06 13:15:29.571749	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	AqYc6vfzI7Dpm5hHtbATjhgcURiN8VsogJOqiTlPY50	2022-08-06 13:15:29.575999	2022-08-06 13:15:29.575999
42	User	5	2022-08-06 14:15:49.957951	2023-08-06 13:15:49.957639	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	L7DeAZSf72MADZkhZFipHTxzwuTw5GyuGayinw5OlUQ	2022-08-06 13:15:49.961302	2022-08-06 13:15:49.961302
43	User	5	2022-08-06 14:16:30.395208	2023-08-06 13:16:30.395068	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	mGVzZtsVvRwkDVskXDJdQOQ8Z-uX83OeAL62vaMWS5o	2022-08-06 13:16:30.398377	2022-08-06 13:16:30.398377
44	User	6	2022-08-06 14:43:02.158724	2023-08-06 13:43:02.158567	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	CuGuHv8qb_1UBZkrozP6xoZpFaycy19LJvubY5Z0Sfg	2022-08-06 13:43:02.163014	2022-08-06 13:43:02.163014
45	User	5	2022-08-06 14:43:18.432105	2023-08-06 13:43:18.431752	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	hW4NmCiq9IZKV_XLhskeLW1zM5PYNTZQMZHyyxlZML0	2022-08-06 13:43:18.435588	2022-08-06 13:43:18.435588
46	User	6	2022-08-06 18:42:44.550507	2023-08-06 17:42:44.550311	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	etUIl4IMJGo2VrJpxBSSPtHkrnVFVKPXgR2LwQSQYYM	2022-08-06 17:42:44.554451	2022-08-06 17:42:44.554451
47	User	5	2022-08-08 00:51:44.476199	2023-08-07 23:51:44.47561	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:102.0) Gecko/20100101 Firefox/102.0	127.0.0.1	_OXxzIalMpyy8-yGmfo010U1eF_BUH4-67Tylc4uUGI	2022-08-07 23:51:44.479208	2022-08-07 23:51:44.479208
48	User	5	2022-08-10 10:55:21.006676	2023-08-10 09:55:21.006408	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:104.0) Gecko/20100101 Firefox/104.0	127.0.0.1	DncH7zWx4LstYd2-leqHbftWmm8FswNADXmwxtnV2cw	2022-08-10 09:55:21.011875	2022-08-10 09:55:21.011875
49	User	5	2022-08-10 10:59:05.427018	2023-08-10 09:59:05.426815	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:104.0) Gecko/20100101 Firefox/104.0	127.0.0.1	ui9_U30fARFby1AFU4YJ8obd2VtAx_oGm-cUdBmHQ7k	2022-08-10 09:59:05.430721	2022-08-10 09:59:05.430721
50	User	5	2022-08-10 10:59:44.449873	2023-08-10 09:59:44.449729	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:104.0) Gecko/20100101 Firefox/104.0	127.0.0.1	ivDHS-Nzkti2n11Rj2AT2RJSOlVTUZOU4hggdDhqm6s	2022-08-10 09:59:44.4536	2022-08-10 09:59:44.4536
51	User	5	2022-08-11 10:45:42.633436	2023-08-11 09:45:42.633123	\N	Mozilla/5.0 (Linux; Android 11; moto g power (2021)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36	192.168.0.12	ysTmP2DsflbbdNVgGImPZkPBmakOhkrTh04oLWLgIas	2022-08-11 09:45:42.637232	2022-08-11 09:45:42.637232
52	User	6	2022-08-12 02:29:01.972838	2023-08-12 01:29:01.972612	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:104.0) Gecko/20100101 Firefox/104.0	127.0.0.1	q3eExUaGE6WljIYuBpaVZcmHn6AvZLxrv0g3YMpGWTw	2022-08-12 01:29:01.97645	2022-08-12 01:29:01.97645
53	User	6	2022-08-12 02:36:16.092419	2023-08-12 01:36:16.092125	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:104.0) Gecko/20100101 Firefox/104.0	127.0.0.1	p7QCv-CKLgFdw-renAkiT4cGRMiDY-s1IxvFlpCXA0E	2022-08-12 01:36:16.108314	2022-08-12 01:36:16.108314
54	User	5	2022-08-12 16:41:51.644233	2023-08-12 15:41:51.644067	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:104.0) Gecko/20100101 Firefox/104.0	127.0.0.1	5V6nXwIW5GoCJuHOcCsJeLdINWGm5pQXjJtjd5gq1uA	2022-08-12 15:41:51.647211	2022-08-12 15:41:51.647211
55	User	5	2022-08-12 17:01:57.682	2023-08-12 16:01:57.681753	\N	Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:104.0) Gecko/20100101 Firefox/104.0	127.0.0.1	-tRohsxJSkjv_J0MoRS9PU3FuscdvX24Df2uj62fYYM	2022-08-12 16:01:57.685585	2022-08-12 16:01:57.685585
\.


--
-- Data for Name: prompt_grammars; Type: TABLE DATA; Schema: public; Owner: bill
--

COPY public.prompt_grammars (id, content, weight, added_by_id, created_at, updated_at) FROM stdin;
1	the ーている form	1	5	2022-07-31 19:09:10.845199	2022-07-31 19:09:10.845199
2	past-tense clyde	1	5	2022-08-01 22:01:52.414845	2022-08-07 23:22:58.58032
3	qwdqwed	1	5	2022-08-12 16:22:01.486315	2022-08-12 16:22:01.486315
4	THIR	1	5	2022-08-12 16:22:12.580144	2022-08-12 16:22:12.580144
\.


--
-- Data for Name: prompt_lengths; Type: TABLE DATA; Schema: public; Owner: bill
--

COPY public.prompt_lengths (id, content, weight, added_by_id, created_at, updated_at) FROM stdin;
4	one sentence	1	5	2022-07-31 19:08:00.679726	2022-07-31 19:08:00.679726
6	two sentences	1	5	2022-08-01 21:57:35.037521	2022-08-01 21:57:35.037521
7	three sentences	1	5	2022-08-01 21:57:35.047366	2022-08-01 21:57:35.047366
8	four sentences	1	5	2022-08-01 22:01:52.402958	2022-08-01 22:01:52.402958
9	five sentences	2	5	2022-08-02 22:54:49.947545	2022-08-02 22:54:49.947545
12	eighteen	8	5	2022-08-02 22:58:25.52359	2022-08-07 23:13:39.80548
11	sevenwoeidjwe	7	5	2022-08-02 22:58:25.514717	2022-08-07 23:13:51.811974
10	sixhundred	5	5	2022-08-02 22:58:13.849439	2022-08-07 23:14:34.282249
15	qwkd	12	6	2022-08-07 23:19:04.564161	2022-08-07 23:47:05.769992
16	ewf	1	6	2022-08-12 09:40:16.589178	2022-08-12 09:42:48.725027
17	arfelfwefwefd	1	6	2022-08-12 15:41:32.601127	2022-08-12 16:01:34.072941
18	FIRST	1	5	2022-08-12 16:22:12.563879	2022-08-12 16:22:12.563879
\.


--
-- Data for Name: prompt_topics; Type: TABLE DATA; Schema: public; Owner: bill
--

COPY public.prompt_topics (id, content, weight, added_by_id, created_at, updated_at) FROM stdin;
1	a family member	10	5	2022-07-31 19:10:24.217835	2022-07-31 19:10:24.217835
2	your plans for the weekend	3	5	2022-07-31 19:10:24.217835	2022-07-31 19:10:24.217835
3	your last visit to the doctor	5	5	2022-08-01 22:01:16.114677	2022-08-01 22:01:16.114677
4	your worst clydewoeifj	1	5	2022-08-01 22:01:52.411262	2022-08-12 15:41:32.61005
6	chraf	1	5	2022-08-12 15:53:04.192026	2022-08-12 15:53:04.192026
5	blinkySEDONCC	1	6	2022-08-07 23:22:58.573729	2022-08-12 16:22:12.572033
\.


--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: public; Owner: bill
--

COPY public.schema_migrations (version) FROM stdin;
20220730211718
20220730211633
20220731000606
20220731085556
20220731111412
20220731222939
20220809003135
20220809101812
\.


--
-- Data for Name: submissions; Type: TABLE DATA; Schema: public; Owner: bill
--

COPY public.submissions (id, user_id, prompt, response, created_at, updated_at) FROM stdin;
2	6	woowiejkoj	wscknksdn	2022-07-30 09:09:28.300152	2022-07-31 09:09:28.300152
1	6	Herp derp	yep blep	2022-07-30 09:08:44.592453	2022-07-31 09:08:44.592453
3	5	Write a sentence about a family member using the ーている form	You can't tell me what to do	2022-08-31 22:56:45.591327	2022-08-31 22:56:45.591327
7	5	Write one sentence about your plans for the weekend using the ーている form	この週末、湖に行って　泳いでいます	2022-08-01 01:28:29.983958	2022-08-01 01:28:29.983958
8	5	nothing	special	2022-08-06 21:19:34.829035	2022-08-01 21:19:34.829035
18	5	Write six about a family member using past-tense adjectives	お父さんは太いでした	2022-08-07 12:13:00.574631	2022-08-07 12:13:00.574631
20	6			2022-08-12 10:37:32.710711	2022-08-12 10:37:32.710711
21	6	Write sevenwoeidjwe about a family member using past-tense clyde	Something like that	2022-08-12 15:25:29.083721	2022-08-12 15:25:29.083721
22	5	test	test123	2022-08-12 15:49:04.549098	2022-08-12 15:49:04.549098
23	5	test	345345	2022-08-12 15:52:45.345285	2022-08-12 15:52:45.345285
24	5	idu	owkmc	2022-08-12 16:01:21.456317	2022-08-12 16:01:21.456317
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: bill
--

COPY public.users (id, email, name, japanese_name, created_at, updated_at, locale, discord_username, discord_id, discord_discriminator, discord_reminders) FROM stdin;
7	bob	jim	bobbu	2022-07-31 08:29:28.525678	2022-07-31 08:29:28.525678	\N	\N	\N	\N	\N
8	weoidj	wodij	ksdmc	2022-07-31 08:30:57.64833	2022-07-31 08:30:57.64833	\N	\N	\N	\N	\N
6	test	Testingowdj	テスト	2022-07-31 08:27:16.277945	2022-08-12 15:41:21.360382	en			\N	\N
5	bassguitarbill@gmail.com	Bill	ビル	2022-07-31 00:38:40.716062	2022-08-12 16:33:13.338855	en	bassguitarbill	117802485220900865	8620	t
\.


--
-- Name: passwordless_sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: bill
--

SELECT pg_catalog.setval('public.passwordless_sessions_id_seq', 55, true);


--
-- Name: prompt_grammars_id_seq; Type: SEQUENCE SET; Schema: public; Owner: bill
--

SELECT pg_catalog.setval('public.prompt_grammars_id_seq', 2, true);


--
-- Name: prompt_lengths_id_seq; Type: SEQUENCE SET; Schema: public; Owner: bill
--

SELECT pg_catalog.setval('public.prompt_lengths_id_seq', 12, true);


--
-- Name: prompt_topics_id_seq; Type: SEQUENCE SET; Schema: public; Owner: bill
--

SELECT pg_catalog.setval('public.prompt_topics_id_seq', 4, true);


--
-- Name: submissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: bill
--

SELECT pg_catalog.setval('public.submissions_id_seq', 24, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: bill
--

SELECT pg_catalog.setval('public.users_id_seq', 8, true);


--
-- Name: ar_internal_metadata ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- Name: passwordless_sessions passwordless_sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.passwordless_sessions
    ADD CONSTRAINT passwordless_sessions_pkey PRIMARY KEY (id);


--
-- Name: prompt_grammars prompt_grammars_pkey; Type: CONSTRAINT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.prompt_grammars
    ADD CONSTRAINT prompt_grammars_pkey PRIMARY KEY (id);


--
-- Name: prompt_lengths prompt_lengths_pkey; Type: CONSTRAINT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.prompt_lengths
    ADD CONSTRAINT prompt_lengths_pkey PRIMARY KEY (id);


--
-- Name: prompt_topics prompt_topics_pkey; Type: CONSTRAINT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.prompt_topics
    ADD CONSTRAINT prompt_topics_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: submissions submissions_pkey; Type: CONSTRAINT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.submissions
    ADD CONSTRAINT submissions_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: authenticatable; Type: INDEX; Schema: public; Owner: bill
--

CREATE INDEX authenticatable ON public.passwordless_sessions USING btree (authenticatable_type, authenticatable_id);


--
-- Name: index_prompt_grammars_on_added_by_id; Type: INDEX; Schema: public; Owner: bill
--

CREATE INDEX index_prompt_grammars_on_added_by_id ON public.prompt_grammars USING btree (added_by_id);


--
-- Name: index_prompt_lengths_on_added_by_id; Type: INDEX; Schema: public; Owner: bill
--

CREATE INDEX index_prompt_lengths_on_added_by_id ON public.prompt_lengths USING btree (added_by_id);


--
-- Name: index_prompt_topics_on_added_by_id; Type: INDEX; Schema: public; Owner: bill
--

CREATE INDEX index_prompt_topics_on_added_by_id ON public.prompt_topics USING btree (added_by_id);


--
-- Name: index_submissions_on_user_id; Type: INDEX; Schema: public; Owner: bill
--

CREATE INDEX index_submissions_on_user_id ON public.submissions USING btree (user_id);


--
-- Name: prompt_lengths fk_rails_05729582ca; Type: FK CONSTRAINT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.prompt_lengths
    ADD CONSTRAINT fk_rails_05729582ca FOREIGN KEY (added_by_id) REFERENCES public.users(id);


--
-- Name: submissions fk_rails_8d85741475; Type: FK CONSTRAINT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.submissions
    ADD CONSTRAINT fk_rails_8d85741475 FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: prompt_grammars fk_rails_de3b528e7f; Type: FK CONSTRAINT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.prompt_grammars
    ADD CONSTRAINT fk_rails_de3b528e7f FOREIGN KEY (added_by_id) REFERENCES public.users(id);


--
-- Name: prompt_topics fk_rails_e049c7c93f; Type: FK CONSTRAINT; Schema: public; Owner: bill
--

ALTER TABLE ONLY public.prompt_topics
    ADD CONSTRAINT fk_rails_e049c7c93f FOREIGN KEY (added_by_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

