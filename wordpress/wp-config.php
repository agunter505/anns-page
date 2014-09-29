<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'd,Oir%fIGpk{R2QAM}#sHl[a~WR#88SVZ!DOdF9.-b+-l2aLPlw7,8sB~$.R>[P{');
define('SECURE_AUTH_KEY',  'j}<&hs!/r#}Rj6-Tg)d-8[+e<-r-<Ml:DXzh}k{qeC4^$v/jYyP+,n`uF+eA&{F-');
define('LOGGED_IN_KEY',    '0J([?P<$n;YH6eX+3V1aIk?Zdp%%<pkY5%cqmYq(9-~x/:UIvm>3m2wVmY->e>OY');
define('NONCE_KEY',        '}-Jkj0>KIS~t{2o&t=%FBCcaUofXr2QQ8;l,9.xBk7.x$;J/5X]l{+#,$fT@If_V');
define('AUTH_SALT',        'z3@V=?ULZY%;)oAG(XaU3B 0u`/v0J>--Q+*VO_2|+Xx]7ngVe2RBVp,bt+I;t%~');
define('SECURE_AUTH_SALT', ' :U%3?Cw]m+[CZ$x |c[+`)leIv.h$l|LR1rY.jN_6]?-=w!L7U7K9/xZcv^_7;|');
define('LOGGED_IN_SALT',   'V]]T-q+Eq18}qEl7W!)IMSG$pI7M~I+W@+1Iij//>$g&X6vC`WG!aBQ<V9.{@9F6');
define('NONCE_SALT',       '_#PS<OpM[27yuJ(`fc<oeb]iQ&t-lwc#vFAkP;kKb&bneS=SbUeyQ|a7O)%86SO~');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
