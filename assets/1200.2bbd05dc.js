const a=[.18,-.26,-.31,.2,-.32,.06,.2,-.39,-.41,-.38,-.3,.11,.02,.39,-.43,-.03,-.03,.1,.2,.01,-.13,.18,-.08,-.23,-.43,-.43,.25,.23,.12,.21,-.17,.2,-.43,.13,.24,-.12,-.43,-.43,-.04,-.43,-.1,-.39,-.05,.01,-.09,-.43,.2,.26,.13,-.43,-.36,-.06,-.31,-.36,-.36,-.42,-.41,-.05,-.41,-.06,-.14,-.43,-.43,.07,-.01,.17,-.42,-.43,-.11,.06,-.12,-.28,-.2,.26,-.33,.01,.15,-.12,-.36,.3,.23,.18,.01,-.28,.23,.26,-.38,-.14,.27,-.43,-.12,-.14,-.42,.16,-.07,.02,.31,.14,.24,-.12,.08,-.43,-.23,.17,-.35,.04,.22,.05,-.43,-.32,-.02,-.43,.02,.27,0,-.32,.39,.14,.33,-.43,-.08,.13,-.24,.09,-.39,-.41,-.29,.26,.28,-.43,-.35,-.34,.02,-.43,-.04,.15,-.31,-.17,.14,.13,-.4,.06,-.35,-.43,.01,-.24,-.15,.33,-.43,-.07,-.34,-.43,.01,-.01,-.42,-.09,-.12,.03,.04,-.43,-.37,-.4,-.14,-.12,-.43,-.12,-.02,.23,.02,-.24,.05,.31,-.33,-.37,-.36,.19,.03,.12,-.2,-.27,.09,.16,-.04,-.32,-.39,.04,-.15,-.07,-.23,.18,.2,-.31,.02,-.4,-.43,-.43,-.14,-.27,-.06,.22,-.42,-.32,-.43,-.18,.21,-.16,-.35,-.4,-.16,.03,-.43,-.34,-.05,-.43,-.05,.25,-.02,-.43,.2,-.09,-.36,-.24,.01,-.34,-.4,-.43,-.4,.17,-.3,-.27,-.14,.17,-.34,-.31,-.21,.02,-.25,-.38,-.02,.03,-.4,-.25,-.25,-.1,-.43,-.43,-.08,-.28,-.07,.08,-.2,.18,-.34,.03,-.39,-.03,-.13,-.35,-.2,-.31,-.18,-.03,-.43,-.43,.32,-.29,.31,-.43,-.33,-.38,0,.12,-.43,-.43,-.43,.04,.05,-.27,-.29,.12,-.36,-.02,-.42,.25,-.36,-.43,.04,-.43,-.15,.1,-.33,-.26,-.35,-.4,-.16,-.03,-.43,.17,-.3,-.37,-.03,-.31,.17,-.11,.05,-.38,-.16,-.39,.13,-.43,-.23,.13,.3,.06,-.15,-.35,-.36,-.11,-.34,-.34,-.28,.04,-.4,-.34,-.43,-.33,-.43,-.09,-.29,-.36,.15,-.43,-.06,.06,.35,.14,.2,-.36,-.43,.05,-.43,.06,.15,0,-.43,-.31,-.2,-.22,-.09,-.42,-.43,-.18,-.12,-.33,-.13,-.43,-.32,.11,-.25,-.33,-.41,-.12,-.25,.02,-.08,.32,-.17,-.43,.13,.04,.07,.21,-.4,.11,-.01,-.16,-.23,-.39,-.11,-.23,-.18,.08,.06,-.19,-.04,-.18,.11,.07,-.41,-.43,-.43,.06,.1,-.43,-.43,-.31,.34,.08,-.1,-.39,.25,-.07,-.38,-.43,-.24,.05,-.26,-.33,-.31,-.28,-.37,.21,.16,-.43,-.1,.02,-.39,-.18,-.36,.21,-.14,-.43,.11,-.01,-.01,-.4,-.42,.03,-.27,-.16,-.27,.13,-.43,-.05,-.34,-.33,-.43,-.43,-.31,-.35,-.39,-.3,-.38,-.24,-.43,-.18,-.32,-.42,-.3,.22,-.41,-.34,.43,.06,.13,.15,.28,-.43,-.01,-.41,-.32,-.42,.28,-.18,-.3,-.21,.28,-.03,.24,-.39,0,-.37,-.25,-.17,-.24,-.43,-.43,-.43,-.42,.04,-.35,-.43,-.33,-.43,-.42,-.11,-.43,0,-.01,-.31,-.12,.13,-.3,-.08,-.33,-.34,-.43,-.01,-.34,-.04,-.36,-.12,-.43,-.24,-.3,.11,.43,-.43,-.34,-.12,-.38,-.15,-.4,.19,-.43,.33,-.34,-.43,-.26,-.29,.3,-.31,-.03,.05,.36,.05,-.39,-.26,-.27,-.43,-.43,-.43,-.06,-.43,.07,.02,-.21,-.13,.25,-.04,-.24,-.17,.05,.01,.35,.18,-.03,.01,-.39,.15,.1,-.43,-.37,-.33,-.41,-.02,.35,-.13,.29,-.04,-.43,.2,-.43,-.43,-.07,-.04,-.03,.07,-.36,-.02,-.35,-.29,-.43,-.39,-.28,-.31,.26,.04,-.3,.23,.35,-.27,-.4,-.08,-.43,-.23,-.34,-.04,.13,-.43,-.09,-.05,-.14,-.32,-.43,.42,-.43,-.31,-.19,-.41,-.3,-.37,-.31,-.37,-.39,.26,-.24,.39,-.06,.2,.04,-.43,.07,-.33,.06,-.24,-.32,-.43,-.02,-.01,-.03,-.12,-.05,.05,-.07,.17,-.3,0,-.35,-.42,.03,-.08,0,-.2,-.25,-.41,-.43,-.32,-.16,.27,-.04,-.14,.28,.23,-.18,-.43,.21,-.31,-.07,-.43,.08,.42,-.39,-.33,-.43,-.11,-.43,.07,.14,-.05,-.31,-.02,-.42,-.16,-.07,-.05,-.11,-.03,-.35,-.31,-.43,.06,.11,.17,-.25,-.09,-.31,-.3,.27,.01,-.18,.31,.06,-.37,.05,-.09,.25,-.43,-.43,-.29,.01,.24,.24,.15,.1,-.31,-.18,-.12,-.37,.29,-.27,-.43,-.42,-.28,0,.11,.27,.01,-.06,.22,-.41,-.22,-.38,-.43,.07,.13,-.35,.03,-.13,.21,-.43,-.37,-.43,-.04,-.09,.07,.06,.47,.12,-.32,.28,-.39,-.43,-.11,-.41,-.33,-.43,.12,.2,.08,-.2,-.2,.27,.12,-.13,.09,-.41,-.43,-.26,-.37,.07,.06,.25,-.09,-.43,-.24,-.1,-.02,-.24,.11,.45,.19,-.43,-.37,-.05,-.43,-.43,.11,-.19,.08,.25,.18,-.27,-.03,-.25,.29,-.41,-.43,-.31,-.17,-.28,-.08,-.12,-.41,-.35,-.41,-.38,-.15,-.02,.2,.37,-.01,-.31,-.4,-.35,.26,-.32,-.39,.33,.02,-.37,-.07,.08,-.32,-.39,-.39,-.43,.25,-.23,.07,.01,.27,-.43,.37,-.33,-.18,.26,.25,.21,-.31,.01,-.22,-.43,-.26,.11,-.31,-.09,-.31,.24,.01,.08,-.43,.09,.18,.16,.14,-.06,-.33,-.09,.18,-.07,-.05,.11,-.11,.27,-.32,0,.1,-.43,-.07,-.07,.28,-.43,-.11,-.08,.02,-.13,-.19,-.43,.25,-.38,-.38,0,.1,.31,-.18,.33,.03,-.14,-.43,.11,-.11,.06,-.26,.37,-.17,.15,-.18,-.04,.01,.1,-.43,-.14,-.34,-.42,-.15,.12,-.38,-.4,-.43,-.36,.32,.2,-.41,-.38,-.01,.26,.09,-.18,-.43,-.2,-.08,.04,.01,.06,-.43,-.19,-.37,.1,-.37,.1,.13,.38,-.21,-.37,-.08,.08,-.24,-.25,-.13,.31,.07,-.11,-.33,-.43,-.31,-.05,-.3,-.43,-.09,-.33,-.35,-.24,-.35,-.21,.33,-.35,.06,-.19,-.34,.04,-.09,-.08,-.25,-.15,.25,-.43,-.43,.03,-.08,-.29,.05,.02,-.02,-.42,-.09,-.31,.41,-.38,.09,-.43,-.1,-.42,.02,-.29,-.14,.13,-.4,.22,.07,.08,.37,-.19,.28,-.29,-.04,-.42,-.21,-.25,-.43,-.32,-.43,.33,-.43,-.43,-.32,-.12,-.04,-.01,-.33,-.39,-.39,-.43,-.43,-.13,-.12,-.01,-.37,-.01,-.12,.08,.06,.04,.02,-.01,.09,0,.1,.24,-.01,-.12,-.41,-.04,.02,.11,.09,-.43,.13,.31,.1,-.31,.23,-.33,-.32,-.23,0,-.43,-.08,-.05,.16,-.26,.02,-.08,-.34,-.02,-.43,-.43,-.17,-.23,.06,-.43,-.29,.35,.1,.05,-.23,.05,.06,.13,-.18,-.12,-.42,.01,-.41,-.22,-.03,.2,-.14,.37,-.43,0,.01,-.43,-.31,-.28,.06,.3,-.43,-.28,.03,-.29,-.31,-.1,-.31,.06,-.43,-.43,-.31,-.27,-.3,.06,.2,.03,.08,-.23,.09,-.05,-.08,.15,-.34,.02,.25,-.31,.19,-.29,-.36,-.43,-.04,-.43,-.3,-.33,.19,-.14,-.37,-.29,-.43,-.35,.01,-.31,-.07,.09,-.35,-.29,.05,.28,.18,.1,-.3,-.18,-.33,.57,-.33,.19,-.07,.23,0,-.03,-.24,-.08,.05,-.01,-.33,-.31,-.05,.16,-.31,-.43,.01,.02,.2,-.43,.26,-.1,.13,-.4,.06,-.4,-.22,-.31,-.42,-.06,.25,-.2,-.32,-.14,-.1,.05,-.09,-.07,.02,-.38,-.39,0,-.19,-.34,-.05,-.31,-.36,-.32,-.43,-.41,-.04,.36,-.33,-.43,.06,-.43,0,-.12,-.13,-.13,-.09,-.08,-.34,.16,.05,-.32,-.42,-.12,-.31,.22,-.27,.08,-.06,-.33,.11,.11,-.33,-.39,1,.35,-.27,-.09,-.35,-.24,-.42,.32,-.31,-.32,-.43,-.31,.26,.11,-.38,-.43,.18,-.06,-.3,-.17,.35,.36,-.29,-.25,.05,.04,-.2,.02,.07,.11,-.05,.15,-.23,-.43,-.04,-.3,-.43,-.35,-.14,.07,.04,-.41,-.35,-.34,-.04,.03,.08,.05,-.2,-.43,-.03,-.34,-.13,-.06,-.15,-.05,-.38,-.38,.1,-.26,-.33,.29,-.31,-.29,-.43,0,-.29,.27,.2,-.42,0,-.34,-.12,-.41,.33,-.23,-.4,-.06,.2,-.28,.16,-.43,.09,-.43,-.37,-.27,.02,-.33,.08,-.15,-.11,-.2,-.29,-.42,-.4,-.19,-.17,-.12,-.31,-.31,-.43,-.43,-.33,-.37,-.15,.21,-.43,-.14,-.03,-.43,-.05,-.34,-.32,.36,-.32,-.04,.23,-.34,-.43,-.39,.08,-.15,.02,.06,-.08,-.24,.09,-.31,-.3,-.34,.08,-.07,-.31,-.22,-.41,.23,.25,-.27,.04,.2,-.43,-.43,.05,.1,-.18,-.43,-.04,-.01,-.43,.04,.23,-.31,-.4,-.43,-.43,-.08,-.41,-.24,-.43,.11,-.39,-.42,-.42,.03,-.35,-.23,-.43,-.43,-.43,.37,.43,.43,-.43,-.43,-.43,-.4,-.4,-.36,-.35,-.43,-.33,.15,-.38,-.43,.23,-.43,-.43,-.43,0,-.43,-.43,-.27,-.43,-.3,-.38,-.43,.23,-.08,-.2,-.35,.3,-.32,.25,.12,-.31,-.43,-.43,-.04,-.3,.36,.16,-.4,-.38,-.23,-.06,.12,-.43,0,.22,-.13,.13,-.29,-.08,.28,-.14,-.16,-.08,-.43,-.15,.01,-.43,-.01,-.2,-.43,-.24,-.33,-.43,.02,.1,-.38,-.03,-.36,-.43,-.38,-.39,.13,-.32,-.07,.26,-.05,-.4,.21,-.35,-.07,-.43,-.43,-.43,-.43,-.17,.16,-.09,.05,-.09,-.1,.16,-.43,-.43,-.02,.16,-.35,-.4,-.09,.03,-.34,.08,-.43,.07,-.43,-.43,-.43,.15,-.23,-.4,.2,-.27,-.41,-.43,-.39,-.37,.02,-.17,-.36,-.43,-.37,-.42,.09,-.25,-.02,-.04,0,-.4,-.35,-.05,-.38,-.02,.37,-.43,-.43,-.43,-.11,-.23,-.43,-.17,.13,-.43,.05,.16,-.33,.04,-.18,-.24,-.09,-.21,-.42,-.33,-.04,.08,-.43,.11,-.04,.32,.38,-.42,-.43,-.43,-.35,-.03,-.24,-.43,-.43,-.31,-.43,-.13,-.43,-.41,-.38,-.42,-.02,-.39,-.26,.16,-.43,-.19,-.43,-.43,.11,-.18,-.43,-.03,-.34,-.43,.06,.16,-.28,-.38,-.23,-.42,-.43,-.43,-.35,.12,-.39,-.42,-.43,-.43,.02,-.43,-.35,.37,-.43,-.43,-.25,.17,-.43,-.33,-.36,-.41,-.43,-.1,-.35,-.43,-.43,.26,.07,-.41,-.34,-.39,-.26,-.43,-.3,-.43,.03,-.14,-.16,-.04,-.36,-.36,.01,.27,-.43,-.43,-.43,-.33,.07,-.38,-.43,-.28,-.22,-.43,-.41,-.43,-.24,-.42,-.04,-.43,-.19,-.43,0,-.08,-.2,-.43,-.32,-.12,-.43,-.04,-.43,.06,-.43,-.29,-.43,-.42,-.43,-.43,.24,-.32,-.39,-.43,-.38,.11,.26,-.38,-.43,-.34,.43,-.43,.23,.05,-.4,-.3,-.43,-.34,-.18,-.29,-.28,-.43,-.41,-.4,-.38,-.42,-.43,-.43,.32,-.43,-.17,-.26,-.43,-.05,-.43,-.2,-.31,-.41,-.06,-.32,.21,-.43,-.08,-.43,-.3,-.09,-.16,-.43,.1,-.4,.04,.15,-.04,-.43,-.43,-.42,-.24,-.33,-.18,-.36,-.43,-.32,-.37,.03,.06,.23,-.32,.01,.43,.11,-.43,-.41,-.43,-.31,-.3,-.23,.11,-.31,-.31,.33,-.43,.04,-.35,-.43,-.43,.25,.26,.01,.22,-.06,-.4,-.37,-.32,-.43,-.43,-.33,-.43,-.42,.01,-.12,.04,0,-.43,.1,-.33,-.19,-.38,-.29,-.02,-.43,-.43,-.43,.01,-.04,-.14,-.4,-.09,.11,-.43,.36,.15,.45,.06,-.02,.02,.02,-.34,-.4,.06,-.28,-.32,-.02,-.38,-.43,.12,.28,-.13,-.33,-.29,-.33,.43,-.43,-.43,.17,-.33,-.43,-.28,.37,-.43,-.4,-.43,-.25,-.36,-.29,0,-.43,-.35,-.4,-.07,.25,0,.04,-.43,-.01,-.43,.02,-.43,-.43,-.28,-.32,-.38,-.34,-.3,-.07,-.35,-.08,.13,-.43,-.17,.16,-.22,-.32,-.43,-.43,-.06,-.18,.12,-.37,-.33,-.15,.1,.1,.19,.04,-.01,-.41,-.12,-.43,-.43,-.43,.07,-.13,-.36,-.43,.09,.26,.01,.25,-.42,-.1,-.15,-.42,-.15,-.25,-.39,-.38,-.03,-.21,-.03,-.43,.06,-.43,-.43,-.43,-.41,-.34,-.43,.39,-.37,.06,-.43,-.38,-.43,-.39,-.02,-.33,-.12,.31,-.01,.21,.15,.21,-.36,-.43,-.15,-.17,.27,.13,-.25,-.41,-.28,-.1,-.05,-.04,-.37,-.29,-.11,-.43,-.37,-.14,-.32,-.1,-.39,-.43,.16,-.3,-.04,-.39,-.43,-.19,.23,-.43,-.04,.24,.2,-.35,-.23,-.16,-.35,.06,.08,-.43,.26,.02,.27,-.43,.24,-.34,-.1,-.02,.1,-.03,-.43,-.07,.12,-.16,-.14,.43,-.43,-.31,-.31,.27,-.32,-.43,-.28,-.38,-.43,-.1,-.29,-.37,-.37,-.06,.23,-.08,.07,.02,-.43,-.3,-.43,-.37,-.06,-.42,-.34,.14,-.43,.02,-.22,.34,.15,.2,.11,0,-.32,-.37,-.33,-.41,-.03,-.43,-.4,-.12,-.42,0,.15,-.42,-.34,-.41,-.3,.35,-.32,-.35,-.12,-.31,-.35,-.43,-.05,-.19,-.43,.34,-.33,-.39,-.31,-.07,-.29,-.07,-.35,-.15,-.43,-.19,-.32,-.43,-.43,-.43,-.4,-.43,.34,-.41,.19,-.12,.25,-.42,-.35,-.39,-.34,-.38,-.42,-.37,-.43,-.43,.43,-.33,.03,-.31,-.38,-.03,-.35,-.22,-.38,-.38,.19,-.06,.22,-.31,-.33,-.31,-.05,-.42,-.39,.39,.24,.06,.12,.25,-.1,-.43,-.43,-.3,-.28,-.05,-.05,-.35];export{a as rvalData};
