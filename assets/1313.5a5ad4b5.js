const a=[.36,-.4,-.81,.04,-.84,.02,-.11,.18,-.13,-.24,-.42,-.02,.09,.77,-.63,.01,-.27,-.03,.35,.14,-.06,.13,.03,-.44,-.51,-.72,.1,-.11,-.23,.03,-.32,.22,-.78,-.24,-.2,-.21,-.86,-.52,-.14,-.66,.05,-.78,-.58,.14,-.01,-.36,.01,.19,-.01,-.09,-.13,-.17,-.41,-.78,-.3,-.4,-.24,-.18,-.31,-.65,-.27,-.72,-.76,.05,-.08,.02,-.77,-.55,.16,-.02,-.02,-.56,-.13,.15,-.8,-.09,.07,-.21,-.57,.03,.48,-.5,.1,-.66,.23,.25,-.6,-.01,.75,-.55,-.04,-.04,0,.6,-.05,.3,.7,-.03,.29,-.27,.02,-.74,-.38,.12,-.42,.06,.05,.03,-.68,-.5,-.09,-.16,.04,.59,.18,-.75,-.11,.05,.38,-.45,.05,.19,-.34,.27,-.06,-.39,-.65,.32,0,-.84,.29,.53,.16,.02,-.52,.06,.08,-.13,.03,-.04,-.75,-.19,-.57,-.62,-.13,.14,-.01,.16,-.54,.21,-.73,.17,0,-.03,.25,.01,.02,-.07,.17,-.56,.09,-.64,-.07,0,-.04,-.14,-.48,.09,.13,-.64,-.09,.04,.21,.41,-.5,.05,.11,-.07,-.12,-.77,.06,-.08,-.09,-.81,-.35,.21,-.26,-.29,-.12,.27,.25,.04,-.04,-.47,-.63,-.81,-.57,-.31,-.14,.27,-.26,-.38,-.83,-.12,.55,-.43,.04,-.15,-.11,.21,.28,-.6,.11,-.71,-.19,-.2,.03,.14,.02,.16,-.4,-.32,-.36,-.77,-.3,-.85,.22,.03,-.18,-.15,.11,.11,-.47,-.77,-.17,-.19,-.5,-.21,.04,-.01,-.17,-.62,.36,.29,.03,.33,-.11,-.15,-.26,0,-.01,.29,-.26,.03,-.78,.13,-.14,-.27,-.11,-.84,-.2,.06,-.25,-.75,.23,-.38,.15,-.64,-.08,-.51,.03,.32,-.79,-.79,-.66,.12,-.18,-.15,-.71,.03,-.02,.13,-.41,.58,-.03,-.46,-.01,-.78,-.02,.12,.25,-.07,-.67,.29,.06,-.59,-.18,.19,-.13,-.15,.04,-.86,.16,.11,-.09,-.29,.06,-.5,.09,-.21,-.67,.02,.34,-.11,-.24,-.13,-.07,.06,-.77,-.34,-.64,.16,-.58,-.73,.07,-.02,-.73,.23,.01,-.08,.54,-.37,-.04,-.13,.12,-.08,0,-.25,.19,.2,-.27,-.57,.27,.03,-.84,-.78,-.14,-.04,-.51,.05,-.67,.31,-.19,.01,.46,-.44,-.26,-.1,-.71,-.83,-.34,-.22,.03,.13,.16,.63,-.27,-.86,-.25,-.12,-.2,.17,-.08,.18,-.23,-.02,-.18,-.65,-.03,-.11,-.12,-.02,-.01,-.16,.04,-.24,.03,0,-.66,-.73,-.76,.18,-.19,.03,.1,-.84,.31,.11,.19,-.07,.22,.11,-.74,-.27,-.12,-.05,-.56,-.69,-.58,-.49,-.75,.56,.35,-.73,0,-.1,-.73,-.71,-.02,.49,-.16,-.72,-.08,.11,-.18,-.86,-.82,-.06,-.01,.43,.42,.25,-.43,-.16,.07,-.81,.29,-.77,-.86,-.6,-.64,-.57,-.58,.01,-.22,-.33,-.85,-.65,.07,.32,-.18,-.31,.76,.15,0,.11,.17,-.86,-.03,-.36,-.8,-.69,.62,-.18,-.06,.02,.36,.19,.47,-.78,-.03,-.86,-.6,-.29,0,-.66,-.58,-.01,-.81,.16,-.64,-.7,-.75,-.09,-.22,.07,-.34,.34,-.35,-.71,-.03,0,.33,.21,-.85,-.81,.01,.09,-.53,.38,-.01,.13,-.63,-.5,-.69,.22,.03,-.59,-.77,-.26,-.74,.15,-.66,.18,-.26,.16,-.15,.14,-.12,-.67,.01,-.85,.13,.18,-.32,-.1,-.24,-.51,-.09,-.55,.06,.05,.13,.23,0,-.11,-.04,-.24,.37,-.1,-.15,-.03,.26,-.09,.08,.28,-.07,-.11,-.7,-.05,.02,-.84,-.83,-.77,-.61,.21,.41,.3,.28,.16,-.76,.04,-.03,.26,.11,.18,.11,-.01,-.13,.04,-.7,-.79,-.12,.32,-.74,-.86,.21,.43,-.11,-.26,.07,-.25,-.65,-.02,-.38,-.65,-.85,-.57,.02,-.84,.13,-.03,-.01,-.7,.28,.6,-.58,-.81,-.41,-.04,-.54,-.82,-.83,-.12,-.68,.06,.07,.29,-.23,.01,-.1,-.78,.08,.02,.3,-.02,-.86,.32,-.01,-.12,.22,.16,-.09,.15,.18,.08,-.18,-.04,-.7,.43,.16,.4,.27,-.07,-.25,-.35,-.67,.23,.22,.23,-.16,-.62,.28,-.11,-.26,-.71,.4,-.68,-.08,-.36,-.07,.66,.12,-.86,-.68,.07,-.56,-.03,.28,.1,-.86,-.57,-.82,-.08,-.26,-.11,-.07,.12,-.5,-.67,-.28,0,.1,.05,-.33,.34,-.56,-.79,.5,-.22,0,.32,-.55,-.71,.04,-.27,.49,-.7,-.72,.33,.06,.3,.19,.31,-.08,.33,-.51,-.24,-.6,.59,-.66,.16,-.24,-.68,.03,-.03,.13,-.59,.03,.04,-.72,.28,-.21,.03,.21,.11,.15,-.02,.14,.14,.16,-.67,-.83,.13,-.6,-.53,.41,.29,.14,-.67,.56,-.1,-.75,-.09,-.25,.13,-.83,.15,-.14,.18,-.43,-.49,.29,-.05,.04,.42,-.23,-.79,.17,-.41,.03,.08,.11,-.2,-.75,-.03,.07,-.46,-.57,-.14,-.33,.11,-.7,-.26,-.44,-.74,-.73,.29,.09,-.16,.33,.12,-.82,-.16,-.03,.38,-.09,.22,-.82,-.11,-.79,.17,-.02,-.73,-.76,-.62,-.17,-.12,0,.15,.31,.23,-.56,-.48,-.78,.09,-.86,-.56,.49,-.32,.26,-.23,.28,-.77,-.7,-.33,-.17,.15,-.13,.05,0,.18,-.72,.27,-.45,.25,.61,.06,-.08,-.82,-.21,-.08,.31,-.59,.08,-.84,.03,-.15,.12,-.03,.11,-.83,.02,.31,.03,.1,-.04,.03,-.27,.17,-.49,-.64,.2,.36,.14,-.78,-.05,.01,-.28,-.06,.14,.01,-.32,.13,-.02,-.08,-.09,.05,.01,.12,-.5,-.84,.13,.37,.3,.19,.29,-.16,.17,.4,.49,-.05,.1,-.03,.21,-.05,-.18,.03,.05,-.14,.01,-.52,-.11,-.76,-.76,0,.03,-.12,-.78,.31,-.71,.66,.49,-.29,-.7,-.06,.31,.25,-.49,-.73,-.11,.12,-.07,.02,-.11,-.54,-.18,.09,-.15,.15,-.04,-.05,.06,.28,-.65,-.16,.01,.14,.41,-.04,.24,.16,.36,-.41,-.79,-.83,-.04,-.85,-.72,-.06,.04,-.79,-.7,-.78,-.6,.72,-.13,.04,-.45,-.8,-.18,.03,.01,-.45,.12,-.05,.22,-.75,0,-.09,.34,.03,.2,.13,.06,-.25,-.8,.03,-.74,.05,-.67,-.1,.27,.15,-.58,-.09,.17,0,.67,.09,-.08,.3,-.56,.77,-.61,.11,.11,-.08,0,-.55,-.84,.29,.25,.15,0,.35,.43,-.22,-.17,-.27,-.3,.38,.02,.34,.09,.09,-.13,-.07,-.1,-.07,.1,.02,-.15,0,-.14,-.15,-.07,-.24,.12,.01,.08,-.46,-.01,.02,.16,.19,-.22,.43,.35,-.13,-.69,.05,-.41,-.28,-.27,.09,-.74,-.08,-.26,-.01,.25,.02,-.12,-.03,.04,-.35,-.74,.26,-.36,0,.23,-.87,.18,.1,.04,0,-.09,.24,.21,-.51,.02,-.52,-.22,.07,-.21,.14,.24,.04,.18,-.65,.02,-.09,.03,-.55,-.15,-.13,.07,-.26,-.67,.09,-.15,-.18,-.35,-.82,.05,-.32,-.81,.25,-.63,-.83,-.15,.21,-.07,-.04,-.18,-.11,-.06,.28,.14,-.51,0,.47,-.77,.22,-.7,-.63,.31,.13,-.8,-.7,.35,.21,.32,-.27,-.78,-.29,-.58,0,-.59,.01,.19,-.21,-.2,.07,.18,.16,.32,-.57,-.06,-.78,.27,-.67,.08,-.34,.32,-.11,.09,-.53,-.01,.1,.31,-.71,-.86,.22,-.06,-.84,-.7,.25,-.14,.36,-.75,-.1,-.08,-.23,-.75,-.1,-.67,-.53,-.64,.22,-.19,.32,-.25,-.69,-.11,.08,-.11,.19,-.1,-.1,-.41,-.35,-.06,0,-.59,-.3,-.84,-.69,-.68,-.38,.03,-.27,.67,-.06,-.47,-.23,-.81,-.13,-.43,0,.37,.17,-.1,.22,.25,-.19,-.85,-.81,-.04,-.77,-.04,.32,.59,0,-.82,-.03,.24,-.75,-.73,.36,.06,-.46,-.03,-.81,0,-.67,.33,-.79,-.66,.21,-.82,-.21,.19,.31,-.56,.03,.11,-.67,-.63,.06,.22,-.66,-.29,-.1,-.11,-.15,.21,.09,-.12,-.06,-.01,.3,-.74,-.07,-.83,-.51,-.5,-.1,.04,-.12,-.8,-.79,-.79,.03,-.12,.16,-.11,-.23,-.57,-.1,-.7,.16,-.06,-.08,-.16,.03,-.37,.3,.4,-.66,.63,-.84,.07,.33,-.08,-.3,.12,.09,-.12,-.11,-.74,.08,-.67,-.2,-.21,.41,-.45,.25,.3,.11,-.5,.03,-.42,.1,-.11,-.12,-.86,-.18,-.09,-.18,.08,-.65,-.75,-.55,.25,.08,.13,-.72,-.48,-.55,-.67,-.32,.04,-.11,-.05,-.68,-.19,.25,-.85,.01,-.31,-.82,1,-.36,.21,-.06,-.15,-.35,-.82,-.15,-.09,.22,.34,.36,.09,.28,-.82,-.75,-.63,.15,.07,-.78,.28,-.2,.03,-.12,.45,-.04,.03,-.67,-.11,.29,.18,-.37,-.12,.07,-.12,-.48,-.09,.22,-.21,-.04,-.53,-.34,.1,-.08,.02,-.11,.13,.11,-.43,-.55,.22,.31,.44,.21,-.58,-.06,-.03,.16,.54,.02,0,-.64,.01,.26,.4,.4,-.23,.52,.01,.37,.28,-.06,.14,-.29,-.07,.07,-.41,-.63,-.11,-.41,-.11,-.3,-.85,-.24,.35,-.21,-.83,.27,.13,.14,-.32,-.78,-.39,-.55,-.07,-.14,.35,.18,-.7,-.75,-.18,.2,.05,-.77,.13,.09,-.19,.03,-.3,-.04,-.03,-.11,.18,-.12,-.67,.08,.07,-.68,.05,-.09,-.72,-.17,-.73,-.62,0,.14,-.21,-.06,-.29,-.67,.44,-.73,-.11,.28,-.08,.23,0,-.32,.35,.34,-.09,-.44,-.81,-.58,-.62,0,-.04,.08,-.02,0,-.17,-.02,-.3,-.64,-.26,.06,-.32,-.33,-.04,.13,.58,-.03,-.65,.13,-.61,-.41,-.29,.21,.12,-.39,.21,-.22,.26,-.43,-.21,.15,.08,-.35,.38,-.67,-.34,-.01,.02,-.37,-.16,.18,-.1,-.45,-.02,-.01,-.76,-.09,.46,-.31,-.85,-.19,.06,-.37,-.44,-.31,-.1,-.21,.14,-.1,-.74,.2,-.35,-.42,-.02,-.11,-.21,-.3,-.05,-.23,-.77,0,-.26,.05,.18,-.53,-.04,-.12,-.66,.05,-.08,-.62,-.38,-.85,-.73,-.02,-.76,-.68,-.69,-.18,.24,-.1,-.47,-.22,-.47,.1,-.62,-.7,-.18,-.09,-.57,-.54,-.62,-.48,-.14,.07,-.65,-.45,-.27,.05,-.48,-.26,-.6,-.03,-.7,-.78,-.34,-.65,-.14,-.58,.09,.1,-.44,-.61,.33,.01,-.69,-.55,-.5,-.09,-.17,-.48,-.78,-.68,-.77,.12,.12,-.01,-.11,.2,-.82,.02,-.24,-.59,.02,-.33,-.44,-.09,-.76,-.79,.06,.04,-.74,-.07,-.21,-.74,.27,.08,-.43,-.31,-.23,-.55,-.23,-.66,-.27,-.71,.19,-.39,-.03,-.04,.07,-.29,-.08,-.25,-.82,-.15,-.42,-.24,-.29,.1,-.03,-.73,-.51,-.58,-.52,-.68,.18,-.08,.16,-.12,-.19,-.02,.26,-.62,-.53,-.63,-.03,-.66,.17,.03,-.37,.08,-.41,.16,-.2,-.84,-.85,-.71,-.72,.05,-.78,-.27,-.52,-.26,.41,-.45,-.29,.53,-.57,.16,-.67,.16,-.82,-.56,-.03,-.77,.15,0,-.27,-.18,-.16,-.41,-.03,.32,-.03,-.14,-.04,.13,.11,-.73,-.82,-.54,.15,-.61,-.55,-.53,-.61,-.61,-.85,-.08,.14,.11,-.58,.01,.4,.16,-.17,-.23,-.09,-.86,-.81,-.64,.32,-.69,-.48,.05,-.28,-.12,-.75,-.54,-.17,.29,.08,.03,.14,.07,-.16,-.81,-.52,-.49,.3,-.25,-.13,-.74,-.11,.06,.21,.07,-.78,.12,-.75,-.53,-.7,-.73,-.11,-.54,-.5,-.72,0,-.29,.11,-.3,.67,.13,.16,.65,.14,.38,.04,.11,.19,0,-.48,-.51,.25,-.72,-.86,.32,-.72,.45,.07,.42,0,-.78,-.87,-.83,-.47,-.11,-.37,-.32,-.33,-.37,-.42,-.2,-.73,-.81,-.43,-.37,-.2,-.24,.19,-.56,-.73,-.79,.01,.03,-.04,0,-.7,-.03,-.34,-.07,-.36,-.86,-.63,-.77,-.86,-.83,-.76,.12,-.59,.02,.09,-.72,.04,.17,-.05,-.63,-.78,-.62,-.3,-.03,-.57,-.22,-.77,-.21,.13,0,.05,-.14,-.08,-.56,.41,-.01,.21,-.77,.24,-.54,.3,.16,.02,-.09,.2,.33,-.8,-.02,.07,-.28,-.06,-.24,-.7,.37,.48,.17,-.07,-.58,.3,.15,-.54,-.4,-.28,.23,-.82,.17,-.7,-.08,-.85,.12,-.27,-.17,.08,-.26,-.11,-.25,-.15,.69,.38,.19,-.6,-.65,-.71,-.52,.2,-.11,-.63,-.2,-.3,-.25,.1,.12,-.72,-.81,0,-.43,-.77,-.26,-.28,-.14,-.83,-.8,-.01,.31,-.1,-.35,-.3,-.04,.3,-.47,-.18,.15,.03,-.84,.35,-.06,-.72,.05,.03,-.52,-.11,-.15,.17,-.75,.2,-.6,0,-.13,.17,-.04,-.58,-.22,.01,-.07,-.1,.04,-.86,-.87,-.77,-.08,-.81,-.83,-.83,-.59,-.75,.22,-.09,-.27,-.73,.15,-.28,-.14,.12,-.33,-.83,-.69,.44,-.61,.1,-.32,-.87,-.18,.01,-.14,.04,.29,.12,-.09,-.06,-.56,-.89,-.42,-.85,-.27,-.16,-.17,-.29,-.34,.05,.17,-.25,-.6,-.76,.04,.22,.62,-.14,-.76,-.34,-.81,-.23,-.8,-.12,.17,-.52,.55,-.75,-.8,-.87,-.24,-.63,-.25,-.67,-.54,.17,-.38,-.8,-.62,-.4,-.85,-.8,-.83,-.04,-.86,-.43,-.22,-.02,-.79,-.77,-.76,-.81,-.8,.38,-.71,-.69,-.04,.57,-.8,-.15,-.85,.52,-.02,-.67,-.3,-.8,-.76,.08,-.14,-.17,.23,-.84,.05,-.62,-.45,-.68,.26,.07,-.05,-.01,.12,-.14,-.25,-.03,-.1,-.82,-.16,0,-.39];export{a as rvalData};
