--
-- PostgreSQL database dump
--

-- Dumped from database version 10.6 (Ubuntu 10.6-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.6 (Ubuntu 10.6-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: adonis_schema; Type: TABLE; Schema: public; Owner: ubuntu
--

CREATE TABLE public.adonis_schema (
    id integer NOT NULL,
    name character varying(255),
    batch integer,
    migration_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.adonis_schema OWNER TO ubuntu;

--
-- Name: adonis_schema_id_seq; Type: SEQUENCE; Schema: public; Owner: ubuntu
--

CREATE SEQUENCE public.adonis_schema_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.adonis_schema_id_seq OWNER TO ubuntu;

--
-- Name: adonis_schema_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ubuntu
--

ALTER SEQUENCE public.adonis_schema_id_seq OWNED BY public.adonis_schema.id;


--
-- Name: categories; Type: TABLE; Schema: public; Owner: ubuntu
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.categories OWNER TO ubuntu;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: ubuntu
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO ubuntu;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ubuntu
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: location_categories; Type: TABLE; Schema: public; Owner: ubuntu
--

CREATE TABLE public.location_categories (
    id integer NOT NULL,
    location_id integer,
    category_name character varying(255) NOT NULL,
    value integer,
    category_id integer,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.location_categories OWNER TO ubuntu;

--
-- Name: location_categories_id_seq; Type: SEQUENCE; Schema: public; Owner: ubuntu
--

CREATE SEQUENCE public.location_categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.location_categories_id_seq OWNER TO ubuntu;

--
-- Name: location_categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ubuntu
--

ALTER SEQUENCE public.location_categories_id_seq OWNED BY public.location_categories.id;


--
-- Name: locations; Type: TABLE; Schema: public; Owner: ubuntu
--

CREATE TABLE public.locations (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    address character varying(255) NOT NULL,
    thumbnail character varying(255) NOT NULL,
    latitude real NOT NULL,
    longitude real NOT NULL,
    price_min integer NOT NULL,
    price_max integer NOT NULL,
    type_id integer NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.locations OWNER TO ubuntu;

--
-- Name: locations_id_seq; Type: SEQUENCE; Schema: public; Owner: ubuntu
--

CREATE SEQUENCE public.locations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.locations_id_seq OWNER TO ubuntu;

--
-- Name: locations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ubuntu
--

ALTER SEQUENCE public.locations_id_seq OWNED BY public.locations.id;


--
-- Name: type_locations; Type: TABLE; Schema: public; Owner: ubuntu
--

CREATE TABLE public.type_locations (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.type_locations OWNER TO ubuntu;

--
-- Name: type_locations_id_seq; Type: SEQUENCE; Schema: public; Owner: ubuntu
--

CREATE SEQUENCE public.type_locations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.type_locations_id_seq OWNER TO ubuntu;

--
-- Name: type_locations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ubuntu
--

ALTER SEQUENCE public.type_locations_id_seq OWNED BY public.type_locations.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: ubuntu
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(80) NOT NULL,
    email character varying(254) NOT NULL,
    password character varying(60) NOT NULL,
    full_name character varying(100) NOT NULL,
    information text NOT NULL,
    contact character varying(150) NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.users OWNER TO ubuntu;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: ubuntu
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO ubuntu;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: ubuntu
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: adonis_schema id; Type: DEFAULT; Schema: public; Owner: ubuntu
--

ALTER TABLE ONLY public.adonis_schema ALTER COLUMN id SET DEFAULT nextval('public.adonis_schema_id_seq'::regclass);


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: ubuntu
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: location_categories id; Type: DEFAULT; Schema: public; Owner: ubuntu
--

ALTER TABLE ONLY public.location_categories ALTER COLUMN id SET DEFAULT nextval('public.location_categories_id_seq'::regclass);


--
-- Name: locations id; Type: DEFAULT; Schema: public; Owner: ubuntu
--

ALTER TABLE ONLY public.locations ALTER COLUMN id SET DEFAULT nextval('public.locations_id_seq'::regclass);


--
-- Name: type_locations id; Type: DEFAULT; Schema: public; Owner: ubuntu
--

ALTER TABLE ONLY public.type_locations ALTER COLUMN id SET DEFAULT nextval('public.type_locations_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: ubuntu
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: adonis_schema; Type: TABLE DATA; Schema: public; Owner: ubuntu
--

COPY public.adonis_schema (id, name, batch, migration_time) FROM stdin;
4	1503250034279_users_schema	1	2019-04-28 10:00:41.384828+00
5	1556434922915_category_schema	1	2019-04-28 10:00:41.407693+00
6	1556438252165_type_location	1	2019-04-28 10:00:41.419566+00
7	1556438252168_location_schema	1	2019-04-28 10:00:41.435641+00
8	1556443803946_location_category_schema	1	2019-04-28 10:00:41.447939+00
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: ubuntu
--

COPY public.categories (id, name, created_at, updated_at) FROM stdin;
1	foto	2019-04-28 10:00:44+00	2019-04-28 10:00:44+00
2	jalan-jalan	2019-04-28 10:00:45+00	2019-04-28 10:00:45+00
3	lari	2019-04-28 10:00:45+00	2019-04-28 10:00:45+00
4	hiking	2019-04-28 10:00:45+00	2019-04-28 10:00:45+00
5	kuliner	2019-04-28 10:00:45+00	2019-04-28 10:00:45+00
6	belajar	2019-04-28 10:00:45+00	2019-04-28 10:00:45+00
7	vlog	2019-04-28 10:00:45+00	2019-04-28 10:00:45+00
8	histori	2019-04-28 10:00:45+00	2019-04-28 10:00:45+00
9	belanja	2019-04-28 10:00:45+00	2019-04-28 10:00:45+00
10	berenang	2019-04-28 10:00:45+00	2019-04-28 10:00:45+00
11	co-working	2019-04-28 10:00:45+00	2019-04-28 10:00:45+00
\.


--
-- Data for Name: location_categories; Type: TABLE DATA; Schema: public; Owner: ubuntu
--

COPY public.location_categories (id, location_id, category_name, value, category_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: locations; Type: TABLE DATA; Schema: public; Owner: ubuntu
--

COPY public.locations (id, name, description, address, thumbnail, latitude, longitude, price_min, price_max, type_id, created_at, updated_at) FROM stdin;
7	Braga	Tempat menarik untuk berjalan-jalan menikmati arsitektur kota tua	Jl. Braga	http://www.hotelgeulisbandung.com/gambar/bandung/bandung-braga-street-for-the-neoclassicism-fans-16.jpg	-6.91756392	107.607178	20000	100000	1	2019-04-28 10:36:15+00	2019-04-28 10:36:15+00
8	Farmhouse Susu Lembang	Koleksi spot-spot unik untuk berswafoto ria	Jl. Raya Lembang No.108, Gudangkahuripan, Lembang, Kabupaten Bandung Barat, Jawa Barat 40391	https://www.hargatiket.net/wp-content/uploads/2018/11/harga-tiket-masuk-farmhouse-lembang.jpg	-6.83296728	107.603539	30000	200000	2	2019-04-28 10:40:42+00	2019-04-28 10:40:42+00
9	Taman Hutan Raya	Gabungan antar taman dan hutan yang terletak di jantung lembang	Kompleks Tahura, Jl. Ir. H.Djuanda No.99, Ciburial, Cimenyan, Kota Bandung, Jawa Barat 40198	https://visitingjogja.com/wp-content/uploads/2017/11/tahura.jpg	-6.8565917	107.630478	20000	100000	3	2019-04-28 10:42:37+00	2019-04-28 10:42:37+00
10	Museum Geologi Bandung	Museum geologi Bandung, ada T-Rex dan Mammut juga	Jl. Diponegoro No.57, Cihaur Geulis, Cibeunying Kaler, Kota Bandung, Jawa Barat 40122	http://bisniswisata.co.id/wp-content/uploads/2015/07/DINOSAURUS-2.jpg	-6.9007163	107.61927	10000	40000	4	2019-04-28 10:46:14+00	2019-04-28 10:46:14+00
11	Museum Gedung Sate	Gedung pemerintahan provinsi Jawa Barat	Jl. Diponegoro No.22, Citarum, Bandung Wetan, Kota Bandung, Jawa Barat 40115	https://www.wonderfulwestjava.com/wp-content/uploads/gedung-sate.jpg	-6.90263891	107.616982	5000	30000	4	2019-04-28 10:49:52+00	2019-04-28 10:49:52+00
12	Museum Konferensi Asia Afrika	Gedung bersejarah tempat konferensi asia afrika yang pertama berlangsung	Jl. Asia Afrika No.65, Braga, Sumur Bandung, Kota Bandung, Jawa Barat 40111	https://tempatwisatadibandung.info/wp-content/uploads/MUSEUM-KONFERENSI-ASIA-AFRIKA.png	-6.92109203	107.607346	5000	30000	4	2019-04-28 10:52:15+00	2019-04-28 10:52:15+00
\.


--
-- Data for Name: type_locations; Type: TABLE DATA; Schema: public; Owner: ubuntu
--

COPY public.type_locations (id, name, created_at, updated_at) FROM stdin;
1	City Walk	2019-04-28 10:36:03+00	2019-04-28 10:36:03+00
2	Tempat Wisata	2019-04-28 10:40:38+00	2019-04-28 10:40:38+00
3	Wisata Alam	2019-04-28 10:42:33+00	2019-04-28 10:42:33+00
4	Museum	2019-04-28 10:45:57+00	2019-04-28 10:45:57+00
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: ubuntu
--

COPY public.users (id, username, email, password, full_name, information, contact, created_at, updated_at) FROM stdin;
1	fetim	sokwokri@indite.com	$2a$10$WWZyKGKjFuSliSqlgVLbDuN7h/urnlHJTRsKwJiFUftBgLZsF4Wrq	Julia Jefferson	Mifmoez uharos firraigi lerele habopse nufa vomoczos ocomujuw juhehma pusosi hew eswaja lu sudleja cudo ti odu.	sokwokri@indite.com	2019-04-28 10:00:45+00	2019-04-28 10:00:45+00
2	wiwac	hadu@indite.com	$2a$10$ys1IbJxwUXecAsxBzBB6FOkVWqWpcUvOTMOBri9iJj.rmYtW3sK..	Marvin Christensen	Lu inwoj ilopeb enopu nac subid wonavu vezsag ra rofbu dif leb.	hadu@indite.com	2019-04-28 10:00:45+00	2019-04-28 10:00:45+00
3	leuha	hulzu@indite.com	$2a$10$xVlTVzDdJ6Nq.vh1NnrI1usgit0Bd8cdymP8opVqFiYKdSiceGDlO	Travis Jackson	Delufava gep tape jurmuw la hulihbiv hoozwuj joavehu guc urlak juburo riwif huima kepu.	hulzu@indite.com	2019-04-28 10:00:45+00	2019-04-28 10:00:45+00
4	sisda	afjuju@indite.com	$2a$10$CiNLePQiTakGsVyjxcKLsOa7IGWCg0CfWHSvhd488pijv3LD1SfTi	Darrell Reed	Kut viosube gavez pipedegot ju afsoz bik olpo sosfe jojcef lopof ove gin toh pecwid.	afjuju@indite.com	2019-04-28 10:00:45+00	2019-04-28 10:00:45+00
5	cipwa	sav@indite.com	$2a$10$0.ajdJRv7wBpOBmBsNf6wu08vFNRCavyGrf06uhlPaDvmuvtcFvoW	Leona Jones	Ligmummuc delmisu reeggez pez fapnilgic horeclec urive bur ujigis bukvi evi nit juwsira co.	sav@indite.com	2019-04-28 10:00:45+00	2019-04-28 10:00:45+00
\.


--
-- Name: adonis_schema_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ubuntu
--

SELECT pg_catalog.setval('public.adonis_schema_id_seq', 8, true);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ubuntu
--

SELECT pg_catalog.setval('public.categories_id_seq', 11, true);


--
-- Name: location_categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ubuntu
--

SELECT pg_catalog.setval('public.location_categories_id_seq', 1, false);


--
-- Name: locations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ubuntu
--

SELECT pg_catalog.setval('public.locations_id_seq', 12, true);


--
-- Name: type_locations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ubuntu
--

SELECT pg_catalog.setval('public.type_locations_id_seq', 4, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: ubuntu
--

SELECT pg_catalog.setval('public.users_id_seq', 5, true);


--
-- Name: adonis_schema adonis_schema_pkey; Type: CONSTRAINT; Schema: public; Owner: ubuntu
--

ALTER TABLE ONLY public.adonis_schema
    ADD CONSTRAINT adonis_schema_pkey PRIMARY KEY (id);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: ubuntu
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: location_categories location_categories_pkey; Type: CONSTRAINT; Schema: public; Owner: ubuntu
--

ALTER TABLE ONLY public.location_categories
    ADD CONSTRAINT location_categories_pkey PRIMARY KEY (id);


--
-- Name: locations locations_pkey; Type: CONSTRAINT; Schema: public; Owner: ubuntu
--

ALTER TABLE ONLY public.locations
    ADD CONSTRAINT locations_pkey PRIMARY KEY (id);


--
-- Name: type_locations type_locations_pkey; Type: CONSTRAINT; Schema: public; Owner: ubuntu
--

ALTER TABLE ONLY public.type_locations
    ADD CONSTRAINT type_locations_pkey PRIMARY KEY (id);


--
-- Name: users users_email_unique; Type: CONSTRAINT; Schema: public; Owner: ubuntu
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_unique UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: ubuntu
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_unique; Type: CONSTRAINT; Schema: public; Owner: ubuntu
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_unique UNIQUE (username);


--
-- Name: locations locations_type_id_foreign; Type: FK CONSTRAINT; Schema: public; Owner: ubuntu
--

ALTER TABLE ONLY public.locations
    ADD CONSTRAINT locations_type_id_foreign FOREIGN KEY (type_id) REFERENCES public.type_locations(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

