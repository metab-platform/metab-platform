const a=[-.4,.48,.62,-.05,.78,-.01,.24,-.2,.37,.09,.41,.04,-.06,-.64,.59,.04,.29,.12,-.16,-.01,0,-.02,-.1,.48,.67,.86,.01,-.03,.26,.08,.42,-.12,.73,.05,.22,.13,.79,.62,.32,.56,-.03,.83,.33,-.03,.15,.5,.12,-.11,.21,.11,.17,.07,.31,.77,.2,.4,.37,-.02,.39,.68,.1,.74,.7,-.04,.28,.06,.83,.63,0,-.04,-.18,.53,.08,-.18,.84,.03,.02,.07,.5,-.06,-.47,.6,-.05,.82,-.12,-.06,.73,.08,-.7,.6,-.1,.08,.06,-.59,.13,-.08,-.7,-.08,-.07,.16,-.09,.74,.42,-.2,.44,.1,.06,.13,.71,.5,-.01,.13,.01,-.58,-.03,1,.03,.06,-.29,.63,.01,-.09,.21,-.05,-.09,.42,.71,-.19,-.05,.85,-.33,-.49,-.17,-.08,.33,.13,-.17,.17,.05,-.04,.75,.06,.67,.73,0,-.17,-.03,-.09,.57,-.17,.73,-.26,-.01,-.05,-.24,-.12,.13,.03,-.24,.58,-.25,.62,0,.11,.06,.03,.4,-.09,-.14,.72,.03,-.07,-.23,-.4,.5,.08,-.03,.25,.01,.8,0,.08,.01,.69,.33,-.1,.17,.14,-.1,-.17,-.12,-.14,.1,.44,.53,.71,.54,.23,.06,-.11,.31,.39,.85,-.01,-.49,.28,-.15,.12,-.01,-.06,-.33,.74,-.03,.81,-.01,.14,0,-.19,.09,.01,.43,.35,.32,.78,.45,.85,-.28,.04,.16,.13,-.1,-.14,.65,.57,.18,.07,.6,.32,-.04,.07,.13,.71,-.28,-.32,-.04,-.38,.16,.1,.17,-.1,.01,-.06,.2,.16,.76,-.06,.03,.29,.02,.7,.13,-.1,.21,.76,-.12,.39,-.13,.77,.09,.59,.14,-.26,.77,.57,.77,.02,.31,.03,.52,.2,-.11,.03,.42,-.43,.11,.4,.11,.79,0,.11,-.26,.04,.68,-.31,-.04,.34,.16,-.28,-.01,-.01,-.08,.77,-.01,-.1,.12,.45,.08,.46,-.06,.19,.73,-.17,-.03,-.01,.32,-.03,.01,-.09,.57,.13,.77,-.02,.71,.79,-.16,.13,.74,-.15,.04,.19,-.47,.53,.14,.17,-.08,.09,.03,.25,-.25,-.12,.23,.38,-.23,.02,.83,.6,.05,0,.28,.07,.63,-.43,.16,.13,-.39,.43,.31,.02,.56,.72,.49,.07,.11,.08,-.14,-.53,.21,.8,.08,.19,.39,-.3,.27,-.16,.04,.08,.3,.74,.03,0,.21,.04,.13,.02,.05,.27,-.08,.01,.62,.72,.58,-.07,.04,-.23,-.2,.76,-.17,-.17,-.15,-.06,-.09,.07,.55,.43,-.03,.03,.59,.56,.65,.58,.57,-.41,-.22,.59,0,.03,.78,.68,-.09,-.26,.03,.78,.2,-.02,.35,.84,.75,.13,.07,-.47,-.34,-.17,.6,-.03,-.24,.76,-.4,.73,.81,.47,.61,.73,.66,.12,.06,.27,.76,.65,.1,-.32,.09,.33,-.79,0,-.08,-.08,.07,.84,-.05,.39,.68,.58,-.66,.07,-.06,.13,-.37,-.16,-.53,.75,.17,.82,.41,.17,-.05,.63,.33,-.09,.72,.08,.55,.76,.76,.15,.06,.04,.26,-.35,.41,.48,.1,.08,-.11,-.35,.65,.86,-.02,-.03,.45,-.33,.06,-.13,.58,.51,.8,-.21,-.07,.51,.72,.07,.68,.03,.72,-.04,.06,.03,-.08,-.13,.02,.78,-.03,.71,.03,-.1,.36,.04,.22,.27,0,.48,-.07,-.04,-.23,-.29,-.03,-.03,0,.23,-.29,.18,-.01,-.05,-.07,.32,-.04,-.16,-.06,.31,.62,.14,.08,.84,.65,.59,.56,-.12,-.27,-.29,-.23,-.04,.68,.14,.27,-.23,-.04,-.13,-.14,.07,-.06,-.04,.53,.61,.17,-.3,.83,.74,-.17,-.33,.01,.28,-.04,.13,.66,.12,.33,.76,.74,.58,.15,.79,-.1,.08,0,.58,-.22,-.71,.47,.68,.26,-.11,.49,.84,.69,.03,.57,.02,-.14,-.17,.17,.12,.12,.78,-.03,-.13,-.13,.05,.75,-.37,.04,0,-.26,-.13,-.01,-.1,-.09,-.15,.14,0,.68,-.41,-.12,-.39,-.27,-.03,.31,.29,.64,-.31,-.32,-.02,.02,.65,-.18,-.03,.24,.77,-.29,.77,.18,.3,-.01,-.72,-.11,.77,.64,.01,.67,.02,-.13,-.01,.77,.37,.88,-.07,.3,.08,.14,.06,.64,.74,.4,.01,-.06,.07,.31,-.46,.56,.83,-.4,.08,-.06,-.2,.46,.67,-.14,.22,-.46,.82,.73,-.3,-.15,-.22,-.11,-.13,-.09,-.19,.23,.19,.57,-.47,.81,-.1,.27,.63,-.03,-.04,-.18,.45,-.06,.03,.71,-.27,.11,-.19,-.18,-.13,.08,-.01,-.16,-.09,-.12,.66,.75,-.12,.66,.54,-.27,-.18,-.2,.59,-.54,.07,.72,.08,.19,-.21,.82,-.21,.03,-.11,.58,.33,-.21,.28,.02,-.38,.44,.78,.08,.35,-.11,.14,-.11,.23,.8,-.02,.1,.55,.5,0,.21,-.01,.7,.2,.57,.64,.71,-.15,.05,.17,-.26,-.09,.75,.04,-.02,-.27,.08,-.23,.83,-.01,.63,.02,.01,.8,.55,.56,.2,-.02,.05,.02,-.09,-.06,.45,.56,.81,-.09,.74,.67,-.38,.17,-.06,.29,-.16,.7,.61,.52,.1,-.12,.01,.04,.02,-.16,.7,-.12,.61,-.2,-.59,.13,.22,.82,.12,.26,-.26,.66,-.09,.84,-.02,.06,0,-.12,.04,.85,-.08,-.13,-.01,.09,-.04,-.04,.2,-.08,.29,.68,-.08,-.3,-.12,.67,.2,.09,.23,.01,-.03,.09,.43,-.07,.07,.15,-.05,-.09,-.02,0,.49,.8,.04,-.38,-.22,-.22,-.26,.08,.01,-.37,-.34,.05,0,-.01,-.25,-.05,.21,-.03,-.06,.06,.1,.3,.18,.77,.77,-.06,-.09,.35,.71,-.29,.78,-.54,-.46,.26,.71,.02,-.44,-.16,.39,.75,.06,-.03,.1,-.01,.01,.52,.22,-.15,.11,-.25,-.09,.26,.04,-.32,.55,.28,-.11,-.16,-.37,.02,-.26,-.02,-.4,.54,.72,.72,-.03,.76,.79,-.02,-.15,.59,.71,.79,.69,-.72,.08,-.01,.45,.84,.11,.12,-.03,.64,-.04,-.05,-.2,.73,.09,.18,-.27,-.06,.08,.08,-.1,.33,.84,-.07,.8,-.13,.71,.09,-.22,-.14,.64,.09,-.05,-.05,-.52,-.13,.14,-.24,.54,-.63,.78,-.19,.04,.1,-.08,.47,.79,-.32,-.02,-.12,-.15,-.28,-.45,.13,.04,.18,.24,-.4,-.03,-.36,-.09,-.1,.05,-.01,.06,.04,.05,.04,.08,-.06,.14,.19,-.04,.24,-.04,.01,-.03,.33,-.03,.21,-.16,-.3,.16,-.35,-.26,.19,.77,-.11,.34,.25,.1,.02,.61,.04,.17,.06,-.24,.02,.15,.18,-.06,.3,.81,-.28,.42,.01,-.25,.75,.03,.05,-.05,-.05,.02,-.29,-.11,.41,-.24,.27,.29,-.21,.43,-.24,-.26,.07,-.24,.69,.14,-.03,-.22,.76,-.02,.17,-.06,.31,.54,-.07,.11,.14,.19,.7,.11,.33,.72,-.21,.46,.82,.02,-.09,.03,.04,.02,.39,.08,-.26,0,.66,.05,-.35,.68,-.1,.45,.61,-.25,.11,.73,.64,-.27,-.15,-.42,.37,.7,.4,.5,.11,.51,.15,-.11,.06,.1,0,.02,-.01,-.17,.75,.06,.81,-.28,.73,-.13,.13,-.3,.02,-.08,.66,-.06,-.12,-.23,.65,.78,-.23,.13,.78,.72,-.25,.06,-.23,.81,.13,.03,.27,.78,-.02,.75,.44,.42,-.17,.04,-.21,.09,.61,.12,-.09,-.01,-.08,.08,-.04,.55,.33,0,-.06,.61,.29,.82,.64,.6,.32,-.11,.09,-.57,.17,.45,.13,.82,.13,.56,.09,-.34,-.17,.16,-.31,-.26,.04,.83,.81,.13,.58,.15,-.41,-.54,.15,.75,-.02,-.27,.64,.66,-.32,-.05,.44,-.09,.7,.17,.64,-.23,.6,.61,-.26,.65,.2,-.17,-.28,.62,.06,.02,.8,.54,-.2,-.19,.7,.33,-.01,.02,.01,0,.15,.14,-.08,.11,-.37,.59,.16,.73,.38,.67,-.01,-.04,-.01,.82,.86,.61,-.07,.02,-.13,0,.23,.54,.01,.76,-.22,.05,-.05,.11,.16,.34,-.17,-.34,.56,-.66,.74,.09,-.24,.18,.21,-.03,-.04,.04,.03,.75,-.02,.69,.27,.05,-.44,.34,-.27,-.24,-.13,.56,-.03,.41,-.1,.28,.02,.73,.18,.04,.07,-.14,.74,.76,.46,-.37,-.03,.03,.57,.53,.45,.71,.35,.05,.13,.18,.66,0,-.29,.83,.1,.32,.72,-.75,.33,.02,-.05,.12,.39,.84,.05,.13,-.05,-.21,-.42,-.05,-.1,.67,.77,.41,.05,.04,.66,-.39,.33,.11,.2,-.44,.07,-.05,.55,.09,-.24,.04,.59,.03,-.01,.19,.38,-.04,-.11,.08,.06,.41,.44,.04,.1,.06,.14,-.23,-.11,.37,.58,-.09,-.27,-.5,-.2,.54,.08,.02,-.19,-.48,-.1,-.06,.51,.09,-.28,-.39,-.46,.16,-.5,.05,-.36,-.27,.03,-.23,.04,.15,.03,.34,.64,-.05,.34,.15,.25,.84,.31,-.32,.22,.72,-.34,-.2,-.1,.15,.6,.51,.61,.25,.07,-.24,-.12,.6,.69,.1,-.04,.01,.76,-.04,-.09,.1,-.06,.36,.06,.04,-.02,-.22,.17,.55,-.04,.08,.8,-.11,.01,.72,.08,.8,.73,.01,-.21,.06,.01,.11,.66,-.44,.8,0,-.28,.02,-.15,.09,.24,-.37,-.34,.17,.62,.83,.61,.61,-.01,.03,-.08,-.1,-.04,.26,.01,.23,.64,.09,.01,.18,.29,-.02,-.08,-.55,.11,.6,-.3,.56,.35,.32,-.05,-.07,.33,-.08,.38,-.24,.57,.22,-.25,-.02,.28,-.36,.57,.23,.06,-.06,.39,.14,-.01,.07,.43,-.11,-.15,.77,.05,-.31,.19,.79,.21,-.07,.47,.55,.38,.11,.12,-.12,.19,.8,-.26,.36,.47,-.1,-.03,.24,.16,-.02,.3,.76,-.08,.23,.04,-.13,.56,.05,.37,.52,-.04,-.02,.56,.32,.74,.69,-.07,.56,.64,.63,.42,-.25,.01,.59,.03,.64,.12,.68,.54,.03,-.04,.68,.37,.6,.56,.16,-.17,.51,.55,.35,-.11,.58,.15,.68,.02,.67,.57,.57,.71,.04,.37,-.13,.04,.38,.68,-.36,-.1,.58,.59,.44,.02,.08,.5,.6,.69,.75,.08,-.06,.02,.24,-.11,.77,-.1,.2,.67,.22,.44,.58,.13,.73,.63,-.1,.21,.57,.1,.17,.59,-.11,.03,.52,.24,.21,.62,.21,.68,.12,.74,-.18,.31,.08,.03,0,.1,.12,.49,.65,.17,.54,.06,.2,-.1,-.07,.59,.53,.6,.53,.8,-.08,.16,-.24,-.02,.35,-.05,-.18,.71,.4,.75,-.03,.52,-.1,-.03,.23,-.17,.44,-.16,.1,.77,.75,.6,.66,-.11,.67,.18,.45,.27,-.44,.46,.35,-.51,.65,-.1,.59,-.03,.6,.52,-.02,.83,-.13,-.08,.35,.06,.18,.46,.06,-.25,-.05,.05,0,.01,.03,.74,.73,.59,-.28,.69,.54,.56,.73,.76,.83,.06,-.18,-.06,.73,-.06,-.37,-.09,.04,.11,.08,.77,.63,.47,-.14,.76,.33,.05,.35,.21,.78,.35,.11,-.25,0,.07,-.07,-.04,.13,.62,.52,.29,-.24,.32,.03,.72,.02,.11,-.32,.07,.57,-.16,.65,.52,.7,.67,.03,.42,.43,.74,.06,.23,-.02,.52,-.59,-.22,-.13,-.52,-.01,-.38,-.09,-.06,-.25,.14,.49,.41,-.1,.84,.72,-.18,.53,-.43,-.02,-.28,.09,.72,.77,.82,.49,.08,.46,.29,.47,.35,.49,.21,.72,.78,.57,.32,.27,.22,-.17,.4,.81,.61,-.08,.12,.18,-.02,.79,-.01,.28,-.09,.42,.79,.63,.56,.74,.81,.66,.02,.51,-.08,-.22,.51,-.17,-.21,-.1,.61,.68,.58,.32,-.01,.47,.18,.6,.13,-.09,.1,-.11,.01,-.08,.5,-.45,-.14,-.29,.73,-.1,.7,-.27,-.31,.23,.1,-.14,-.12,.79,-.02,-.15,.37,.01,.27,.73,-.37,-.49,-.21,.09,.6,-.26,-.26,.56,.3,.26,-.26,.83,-.07,.8,.04,.85,-.1,.19,.09,-.03,.38,.25,.07,-.06,-.73,-.24,-.06,.58,.67,.66,.45,-.15,.28,.7,.12,.3,.12,-.02,-.19,.82,.69,-.08,.56,.83,.34,.17,.07,.73,.85,.15,-.29,.17,.22,.37,.06,-.2,.33,.32,-.14,.03,.73,-.29,.08,.79,-.13,-.03,.53,.04,.09,-.18,.74,-.33,.65,-.09,.04,-.25,-.01,.58,.18,-.09,-.04,-.02,-.1,.8,.8,.6,.09,.6,.72,.84,.75,.75,-.08,.02,.3,.84,-.13,.31,-.07,-.1,.14,.8,.76,-.4,.68,.05,.27,.75,.24,.08,.05,-.01,-.25,-.14,.15,.08,.6,.76,.52,.7,.24,.09,.23,.18,.39,-.06,.04,.24,.57,.81,.03,-.33,-.68,.2,.71,.3,.63,.09,.84,.18,-.04,.54,-.68,.82,.72,.8,.18,.65,.11,.7,.55,-.13,.55,.62,.73,.31,.83,.86,.76,.04,.83,.43,.19,.03,.8,.87,.83,.85,.8,-.29,.66,.66,.01,-.48,.88,.03,.73,-.53,-.02,.66,.44,.83,.76,-.04,.03,.27,-.33,.69,.05,.49,.47,.74,-.15,.09,.08,.07,-.07,.11,.36,.2,.08,.79,.04,.11,.44];export{a as rvalData};
