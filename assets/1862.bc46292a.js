const a=[.03,0,0,.25,0,.02,0,.01,0,.3,0,.54,.54,0,0,.53,0,.87,.01,.55,.65,0,.6,0,0,0,0,.18,0,0,0,.01,0,.83,.11,.08,0,0,0,0,.76,0,0,.67,.98,0,.35,.17,.43,0,0,.63,.35,0,0,0,0,.12,.59,0,0,0,0,.54,.01,0,0,0,.72,.42,.88,0,0,0,0,.72,.64,0,0,.94,0,0,.78,0,.06,0,0,.1,0,0,.3,.68,0,0,.18,.34,0,.08,.18,0,.08,0,0,.15,0,.16,.79,.41,0,0,.57,0,.18,0,.52,0,.29,0,.8,0,.44,.09,0,.37,.66,0,0,.16,0,0,.1,.12,.71,.03,.03,.87,.14,.02,0,.39,0,.55,0,0,.35,.8,.42,.68,0,.23,0,0,.78,.08,.01,.49,.75,.79,.16,0,.58,0,.98,.02,0,0,0,0,.25,0,.33,.03,.48,.22,0,.1,.61,.12,0,0,.39,.21,.63,0,0,.75,.28,.49,.48,.15,.22,0,.59,0,0,0,0,.02,.8,0,0,0,0,.33,0,0,.73,0,0,.38,.17,0,.35,0,.16,0,.99,0,.04,.11,0,0,0,0,0,0,.06,0,0,.71,.54,.11,0,0,.79,.17,0,.01,.35,.24,0,0,.01,.69,0,.22,.2,.08,.61,.35,.39,.08,0,.04,0,.97,.91,0,.7,0,.29,.62,0,0,.99,0,.17,0,.02,0,.35,0,0,0,0,.55,.4,0,0,.5,.02,.03,0,0,0,0,.15,0,.48,.15,.13,0,0,.09,0,0,0,.01,.12,.01,.32,0,.02,.16,.44,0,.56,0,.66,0,0,.17,.09,.5,.23,.01,.55,.48,0,.1,0,.4,0,0,.91,0,0,0,.25,0,0,0,0,.91,0,.73,0,0,.45,.12,0,0,.07,.62,0,0,.58,0,0,0,0,.13,.02,0,0,0,.01,.74,0,0,0,.19,.02,.56,.86,0,.65,0,0,.54,.72,.01,0,.16,0,0,.15,0,.9,.06,.16,.64,.21,.25,.98,0,.07,.38,0,0,0,.17,.3,.55,.46,0,0,.02,0,.79,.02,.03,0,0,.12,.75,0,0,0,0,0,0,0,0,.36,.71,0,0,.02,.08,.13,0,.05,.4,0,0,0,.24,0,.03,.04,.46,0,.18,.44,0,.52,0,0,0,0,0,0,.04,.03,0,0,0,0,0,0,0,0,.3,.61,.84,.19,0,.12,0,0,0,0,0,.62,.03,0,.71,0,0,.2,0,0,.48,.03,0,0,0,0,.01,0,0,0,0,.11,.12,0,.01,0,0,.14,.54,.24,0,0,0,.36,.52,0,.69,0,.01,0,0,0,.13,.95,0,0,0,0,.2,0,.13,.02,.03,.61,0,0,0,.08,0,.25,.63,0,.75,.02,.32,.34,0,0,.39,.27,.87,.32,.07,.01,0,.05,.34,.65,.26,.07,.41,.91,.16,.23,.55,0,.77,.04,0,0,0,0,.16,0,.96,.01,.93,0,.03,.01,.04,.68,.13,.3,.67,.39,.35,0,0,0,.04,0,0,.13,0,.05,.06,.74,.04,0,.02,0,0,0,0,.02,0,.37,.13,.95,0,.03,0,0,0,0,0,0,0,0,0,0,0,.15,.83,.1,.45,.57,0,.84,0,.12,.79,0,.2,.36,.29,.43,.75,0,.94,.13,.04,0,.42,0,.79,.51,.03,.04,.01,0,0,0,.28,.41,.02,.14,0,0,.28,.06,0,.07,0,.72,0,.58,0,.02,0,0,.18,0,.31,.03,.23,0,0,0,.34,.08,.17,.28,.05,0,0,0,.76,.22,0,0,.05,0,0,0,.1,.66,.13,0,0,.1,0,0,0,0,.29,.38,.03,.35,.11,.53,.59,.01,.05,0,0,0,0,0,0,.54,.53,.1,0,.59,.01,0,.82,.2,0,.08,.15,0,.36,.08,.49,0,0,0,.8,0,0,.02,0,.07,0,0,0,0,.53,0,.23,0,.29,.19,.66,0,0,.01,.18,.81,.01,0,0,.34,0,.51,.5,.06,0,0,.01,.93,.39,0,.36,.15,0,0,.04,.15,0,0,.07,.69,.02,.09,.3,0,.22,.03,.01,.01,0,0,.04,0,.63,.47,0,0,0,0,0,.4,.05,0,.43,0,0,0,0,0,0,.03,0,.01,.01,0,0,0,0,0,0,.36,.82,.65,.03,0,.01,0,.04,0,.41,.55,0,.97,0,.09,0,.94,0,.89,.01,.28,.9,.35,0,.34,.08,.42,.37,.3,.03,.03,.01,0,0,.59,.1,.18,0,.09,.03,0,.9,.91,.01,0,.76,.65,.01,.32,.83,0,.19,0,0,.81,0,.23,.26,0,.03,0,.22,.59,.09,.68,.03,.59,.37,.13,0,.69,.12,0,0,.08,0,0,.29,.01,0,0,.1,0,0,0,0,0,.18,0,0,0,0,0,.19,.92,.92,.88,0,.03,.06,.42,.22,.6,.17,.09,.01,0,0,.93,.25,.54,.49,.47,.58,.01,0,0,0,.55,0,0,.3,0,0,0,0,0,0,0,.11,0,0,.78,.21,.32,0,.49,.24,0,0,.34,.14,0,.3,.05,.97,.04,.02,0,.43,0,0,0,.22,.13,.79,0,.25,.83,.3,0,.63,0,.36,0,0,0,.09,.7,.26,0,0,0,.42,0,0,0,.01,.04,.08,.21,0,0,.63,0,.36,.18,.06,.96,.52,.55,.25,.64,.8,.84,.22,.13,.13,.53,.3,.03,.91,.69,0,0,.2,.06,.07,0,.12,.08,.34,0,.66,0,0,.29,.09,0,.94,.07,.35,.81,.64,.01,0,.9,0,0,.01,0,.5,.43,0,.21,.09,.83,.04,.31,.07,.02,0,.04,0,.08,.01,0,.84,0,.09,.62,0,.18,.53,.41,0,.17,0,0,0,0,.17,0,0,0,0,.92,0,0,.33,0,0,.25,.05,.98,.47,0,.44,.36,.07,0,0,.72,0,0,.02,.01,0,.09,.01,0,0,.48,0,.07,0,0,0,0,.24,0,.67,.03,0,0,.85,.03,.05,.16,0,.01,0,.13,0,.13,.37,.06,.26,.91,0,.73,.38,.88,0,0,.02,.01,0,0,.57,.08,.66,0,.87,.66,0,0,.4,0,.27,0,.48,.6,.1,.01,0,.31,.11,.48,.01,.17,.56,0,0,.12,0,0,.02,0,0,0,0,.51,.34,0,0,0,.33,0,.08,0,.88,.41,.27,.47,.03,0,.17,0,0,.71,0,.73,.36,.11,.48,0,.25,.05,0,0,0,.76,0,.77,0,0,0,.85,0,.04,.05,0,.8,0,.08,0,.21,.12,0,0,.22,.7,0,0,.4,.31,.12,.88,.02,.09,.8,0,0,0,.25,0,0,0,.51,.96,.51,0,0,0,.67,.29,.36,.58,.03,0,.13,0,.43,.22,.41,.1,0,0,0,.01,0,0,0,0,.99,.05,.01,0,0,0,.44,0,.57,0,0,.01,.64,0,.1,.39,.25,0,.18,0,.01,0,.96,0,.78,.73,.19,0,0,0,0,.01,.02,.91,0,0,0,0,0,.01,.04,.2,0,0,.51,0,.12,.01,0,0,.01,.76,.24,.02,0,0,.7,0,.31,0,0,.74,.6,0,0,0,.01,.77,0,0,0,.5,.04,.81,.53,.92,0,0,.01,.58,0,0,.58,.82,0,.73,.03,0,0,0,0,.37,0,.15,0,.89,0,0,0,.21,.09,.04,0,0,0,.36,.18,.03,0,0,0,.01,1,.34,0,.01,.19,.78,.88,.29,.75,.06,0,.18,.93,0,0,.21,0,0,0,0,.02,.17,.01,0,0,.17,.11,.6,0,0,0,0,0,0,.45,0,0,.01,.06,.46,0,.52,.12,0,.76,0,.17,.76,0,.16,.11,0,.45,.27,0,.77,.17,0,.02,0,0,.83,.38,0,.9,.01,0,.75,0,.39,.09,.38,.06,.12,0,.01,.71,.29,0,0,0,0,.5,.8,.9,.17,.82,0,.01,0,0,0,.25,.09,0,0,.16,.05,.01,0,.15,0,0,0,.23,.02,0,.51,0,.55,0,0,.16,.99,0,.3,0,0,.8,.31,0,.99,.24,.28,0,.37,0,0,0,0,0,0,0,.77,0,0,.01,.48,0,.18,.23,0,.16,0,0,.48,.02,0,0,.67,.07,0,.53,.06,0,.68,0,0,0,0,.8,.25,0,0,0,0,.01,0,0,0,0,.1,.06,0,.25,0,0,0,0,.87,.1,0,.01,0,0,.13,.02,0,0,0,.02,0,.01,0,.49,0,0,0,0,.2,0,.08,0,0,0,.1,.68,0,0,0,0,0,.01,0,0,0,.3,.22,.01,0,.04,0,.02,.04,0,.85,0,0,0,0,0,.2,.56,0,0,0,0,.11,.07,0,0,0,0,0,0,.08,0,.04,0,.25,.8,.91,.18,.59,0,0,.03,0,.28,0,.4,.38,0,0,0,0,0,.92,0,.21,0,0,.36,.42,0,0,0,.62,0,.62,.16,0,0,0,.66,.81,0,0,0,0,.84,0,0,0,0,0,0,.01,.47,0,.07,0,.3,0,0,.35,0,.04,0,0,.01,.27,0,0,.08,.35,.07,0,.22,.9,0,0,0,.26,0,0,0,0,0,0,.83,.97,.41,0,.85,0,.87,.02,.03,.44,0,0,.13,.96,0,0,.04,0,.59,0,0,0,.08,.29,.94,.11,0,.03,0,0,0,.83,0,0,0,.24,.08,.01,.75,0,.06,0,0,0,0,.51,0,0,0,0,.46,.73,0,0,0,0,0,.21,.06,.47,.49,.1,.25,0,0,.16,0,0,.98,0,.7,0,0,.93,0,0,0,0,.02,0,0,0,0,0,.05,0,0,0,0,0,0,.77,0,0,0,.75,.03,.15,.05,0,0,0,.33,0,0,0,0,0,0,0,.48,0,.62,0,0,.24,.17,.35,0,0,0,0,.19,0,0,0,.59,.87,.19,.4,.41,.45,0,0,0,.06,0,.11,0,.66,.59,.14,.48,.11,.3,0,.68,.17,0,.19,.01,0,.94,0,.2,.7,0,.14,.79,0,0,0,.16,0,.33,0,.72,0,.01,0,0,.28,0,.05,.02,.52,0,.01,.1,0,0,0,0,.01,.26,0,0,0,.13,.46,.45,0,0,.43,0,0,0,0,.17,0,0,.01,.86,0,0,0,.23,.03,0,0,.49,.39,0,.03,.24,0,.04,.27,0,.33,.26,.01,0,0,0,.62,.55,.27,.41,0,0,.74,.91,.06,.87,0,0,0,.81,0,0,0,0,0,.82,.72,0,0,.32,.13,.77,.09,.33,0,0,.99,0,.89,0,0,.1,0,.93,.5,0,.97,.45,.88,0,0,0,0,0,.88,0,.12,.05,.03,.81,.53,0,0,0,.92,0,0,0,0,0,.02,0,0,.97,0,0,0,0,0,.04,0,.59,0,0,0,0,0,0,0,0,0,0,.92,0,.01,0,.07,0,0,0,0,0,.48,0,0,0,0,0,.27,0,.13,.56,0,0,0,0,.02,.32,.21,.63,0,.26,0,0,0,.3,.01,.18,.06,.82,.12,0,.5,.89,0,.11,.23,0];export{a as pvalData};
