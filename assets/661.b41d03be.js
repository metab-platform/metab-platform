const a=[0,0,0,.58,0,.58,.08,.02,.61,0,0,.24,.86,0,0,.78,0,.36,.05,.2,.48,.6,.58,0,0,0,.87,.07,.01,.91,0,.13,0,.14,.09,.43,0,0,.02,0,.48,0,0,.67,.33,0,.62,.11,.46,.86,.21,.91,0,0,0,0,0,.84,0,0,.03,0,0,.73,.04,.36,0,0,.47,.41,.41,0,.27,.5,0,.45,.15,.06,0,.37,0,0,.11,0,.7,.33,0,.55,0,0,.31,.34,.54,0,.22,.14,0,.31,.29,.02,.68,0,0,.16,0,.78,.17,.11,0,0,.33,.08,.44,0,.99,0,.26,.87,0,0,.12,.7,0,.05,.21,0,0,.01,.46,0,0,0,.06,.77,0,.12,.38,.59,.66,.64,0,.59,0,0,.87,.24,.71,.57,0,.06,0,.01,.61,.77,0,.55,.99,.44,.06,0,.83,0,.95,.63,.9,.17,0,.98,.23,0,.94,.51,.05,0,0,.87,.42,.4,.82,0,.43,.7,.26,0,0,.15,.13,.02,.19,.22,.1,.31,.31,0,0,0,0,.01,.88,.22,.38,0,0,.87,0,0,.54,.37,.59,.16,0,0,.95,0,.86,.11,.47,.06,.71,.02,0,.01,0,0,0,0,.01,.64,.01,.02,.43,.31,0,0,.01,.54,0,.24,.8,.61,.17,0,0,.01,.4,0,.15,.63,.02,.79,.67,.52,0,.35,0,.34,.05,.08,.62,0,.43,.8,.1,0,.13,0,.43,0,.26,0,.44,0,0,0,0,.85,.02,.4,0,.6,.71,.08,.01,0,.7,0,.97,0,.93,.97,.04,.27,0,0,.18,0,.06,.01,.57,.41,.93,0,.73,.05,.16,0,.4,0,.7,.03,0,.35,.05,.81,0,.46,.53,.55,0,.01,0,.91,0,0,.19,.89,0,.09,.44,.69,0,0,.29,.28,.83,.97,.19,.02,.07,.1,.02,0,.07,.38,0,0,.19,.66,0,.57,0,0,.17,.91,0,0,.01,.51,0,0,.03,.26,.96,.04,.56,0,.24,0,0,.59,0,.02,.97,.01,.02,.44,0,0,.93,.47,.26,.93,.38,.29,.9,0,.92,.65,0,0,0,.41,.18,.79,.67,0,.01,.06,.19,.1,.97,.48,0,.09,.35,.38,0,0,0,0,0,0,0,0,.34,.81,0,0,.6,0,.66,0,.22,.44,.25,0,0,.49,.41,0,0,0,0,.35,.26,0,.01,0,0,0,0,0,0,.43,.17,0,0,0,.09,0,.17,.02,0,.33,.06,.7,.28,0,.37,0,0,0,0,.26,.71,.87,0,.85,0,0,.41,0,0,.11,.82,0,0,.2,0,.21,0,0,0,.71,.2,.5,0,0,0,0,.57,.24,0,.06,0,0,.48,.16,0,0,.92,.16,0,0,0,.03,.44,0,0,0,0,.21,0,.42,.14,.37,.09,.02,.55,0,.47,0,.84,.17,.01,.99,.04,0,.94,0,.26,.34,.05,0,.69,.99,.28,0,0,.05,.17,.18,.27,.18,.45,.19,.72,.16,0,.75,.5,0,0,0,0,.32,0,.02,0,.18,0,.77,.65,0,.11,.02,.21,.55,.04,.96,0,0,.78,0,0,0,.05,0,.24,.05,.49,.01,0,.8,0,0,0,0,.69,0,.04,.77,.97,0,0,0,0,0,.01,.79,0,0,0,.47,0,.95,.91,.06,.05,.9,.55,0,.51,.38,.05,.7,0,0,.92,.5,.07,.23,.28,.27,.29,.83,.13,.46,0,0,.19,0,.01,.7,0,0,0,.01,0,.27,.97,0,.02,.08,0,0,0,0,.56,0,.82,0,.53,0,0,.42,0,.51,.03,.36,0,0,0,.23,.03,.65,.52,.38,0,0,.16,.22,.48,.71,0,.01,0,0,0,.3,.19,.01,0,0,.14,.06,0,0,0,0,.35,.04,.24,.02,.71,0,0,.15,0,0,0,.07,.03,0,.79,.93,.29,0,.57,1,0,.01,.06,.87,.34,.21,.02,.19,.02,.07,.06,0,0,.5,0,0,.01,.08,.03,0,0,.23,0,.27,.1,.33,0,.11,.01,.1,0,0,.01,.37,.27,0,.19,0,.68,0,.26,.69,.93,.09,0,.12,.33,0,0,.53,0,.7,0,.01,0,0,0,.11,.5,.95,.02,.41,0,.59,.57,0,.89,0,0,.15,0,.62,.83,0,0,0,.05,.34,.23,.84,.08,.22,0,0,0,.94,0,0,0,0,0,.05,0,0,0,0,.15,.26,.07,.96,.85,.08,0,.15,0,.01,0,.88,.26,0,.39,.94,0,0,.4,0,.35,.07,.46,.58,.57,0,.21,.31,.66,.51,.7,.98,.04,.2,0,0,.12,0,.19,0,.54,.63,.04,.63,.15,.58,.02,.51,.44,.1,.11,.4,.29,.68,0,0,.1,0,.02,.33,0,.5,.36,0,0,.3,.38,.6,.05,.23,.08,.91,.27,.51,.58,0,.24,0,0,.22,.55,.13,0,0,0,0,0,.01,0,.91,0,.06,0,0,.14,.43,.45,.78,.82,0,.17,.72,.48,.11,.37,.45,.66,.18,0,.03,.85,.18,0,.76,.02,.67,0,0,0,0,.94,0,0,.2,.33,0,0,0,0,0,.39,.94,0,0,.33,.91,.95,0,.23,.14,0,0,.35,.31,0,.49,.26,.23,.37,.02,0,.31,0,.88,0,.39,.02,.37,0,.36,.7,.63,0,.02,.69,.01,0,0,0,.01,.06,.21,.88,0,0,0,.21,.05,.93,0,0,.27,.45,.07,.01,0,.77,0,.09,.38,.58,.87,.66,.25,.83,.46,.11,.92,.19,.08,.63,.01,.24,.66,.26,0,.89,.94,.03,.11,.04,0,0,.25,0,.32,0,0,.09,.74,0,.39,.13,.76,.06,.3,0,.57,.52,0,0,0,0,.17,.03,0,.04,.22,.17,.77,.26,0,.88,0,.34,0,0,.71,.01,.01,.02,.53,.19,0,.7,.94,.86,0,.34,.29,.74,.54,0,.28,.1,.64,.02,0,.75,0,0,.01,0,0,.89,.3,.7,.59,.28,.14,.7,.01,.71,0,.65,0,0,.41,0,0,0,.52,0,0,0,.01,0,.18,0,.08,0,.77,0,.63,.32,.06,.1,.73,.23,.23,.07,0,.65,0,.09,0,.21,.16,0,.92,.06,0,.55,.23,.01,0,0,.01,.81,0,0,.06,.83,0,0,.34,.73,0,0,.77,0,0,0,0,.67,.01,.34,0,.2,.64,.8,.03,.14,.77,0,0,.3,.59,0,0,0,0,0,0,.38,.01,0,.63,0,.08,0,.32,0,.32,0,.09,.81,.01,0,.69,0,0,.34,0,.91,0,0,.88,0,.96,.13,0,0,0,.45,0,.94,0,.34,0,0,0,0,.01,0,.11,.02,0,0,.7,.07,0,0,.83,.26,0,.05,.72,.98,.07,.88,.48,.17,.39,.34,.01,0,.17,0,0,0,.49,.86,.88,0,0,0,.3,.92,.53,.75,.01,0,.78,0,.13,.39,.19,.1,.18,0,.01,0,0,0,0,.12,0,.32,.03,.79,.99,.57,.73,0,.41,0,.1,.09,0,0,.04,0,.2,0,.34,0,.15,.43,.97,0,.56,.69,.52,.52,0,0,0,.1,.29,.19,0,0,0,0,0,.18,.92,.17,0,.3,.1,0,.8,.04,0,0,0,.19,.12,.05,0,0,.62,.45,.04,.01,0,.54,.12,0,0,0,.23,.65,0,.03,.03,.74,.06,0,.97,.37,0,.32,0,0,0,.39,.42,.25,0,.57,.18,.31,.74,0,.01,.98,.94,.33,.41,.91,.09,0,0,.35,.01,0,.06,0,.5,.37,.01,0,.79,.96,0,.6,.04,0,0,.02,0,.22,0,.02,.88,.27,0,.16,.28,0,0,.68,0,.4,.01,0,.01,0,.24,0,.01,.23,.61,.01,0,0,0,.89,.15,.01,.31,0,0,.29,.7,.93,0,.85,.64,.04,.75,0,.35,.46,.5,.13,.75,0,.14,.59,0,.1,.39,0,.04,0,0,.59,.05,.11,.42,0,0,0,0,.8,0,.72,.26,.97,.01,0,0,.11,0,0,0,0,.62,.78,.92,.61,.93,.01,.84,.01,0,.03,.2,.01,0,.69,.1,0,.42,0,.22,0,0,0,.07,.74,.01,.12,.01,.01,0,.01,.12,.14,0,0,0,.01,.6,.61,0,.53,.48,.45,0,.28,.45,0,.31,0,.01,0,.12,.34,0,0,.02,.61,.11,.08,.17,0,.01,0,0,.52,.15,.02,.02,.65,.02,0,.31,.04,.67,.18,0,.59,.38,0,.26,.33,0,0,0,0,.92,0,0,0,.22,.07,.48,0,.08,0,.17,0,0,.65,.2,0,0,0,0,.34,.16,0,0,.02,.36,0,.04,0,.32,0,0,0,0,.83,0,.14,1,0,0,0,.97,0,0,0,.55,.14,0,0,0,0,.8,.22,.6,.88,.06,0,.41,.47,0,.65,0,0,.92,0,0,.04,.9,0,.92,.06,0,.03,.02,0,.02,.03,0,.17,0,.26,0,.01,0,.3,.76,.63,.21,.68,.04,0,.12,0,.07,.02,.84,.55,0,0,0,0,0,.26,.82,.05,.23,.03,.92,.02,0,0,0,.28,0,.26,.61,.01,.2,0,.05,.17,0,0,0,0,.71,0,.03,0,.07,0,0,.04,0,0,.09,0,.2,0,0,.26,0,.18,.62,.01,.5,.38,0,.49,0,.93,.94,.21,.5,.69,0,0,0,.52,0,0,0,0,0,0,.21,.01,.85,0,.56,0,.03,.12,.02,.97,0,0,0,.04,0,0,.73,.12,.23,0,0,.17,0,.91,.37,.5,.34,.19,0,0,0,0,.05,.51,0,.94,.58,.03,.92,0,.49,0,0,0,0,.65,0,0,0,.62,.01,.14,0,0,.2,.08,0,.66,0,.37,.41,0,.36,0,0,.05,0,0,0,0,0,.77,0,.34,0,0,0,0,.68,0,0,0,0,0,.04,0,0,0,0,.13,0,.45,0,0,0,.72,.74,.42,.8,0,.48,0,.69,0,0,0,0,0,0,0,.56,0,.17,.07,0,.61,.09,.9,0,0,0,.01,.25,0,.01,0,.06,.79,.67,.31,.97,.57,0,0,.7,.05,0,.04,0,.01,.33,.24,.71,.08,.1,0,.74,.98,0,.15,.02,0,0,0,.08,.61,0,.07,.1,0,0,.01,.06,0,.2,0,.36,0,.38,.02,.12,.82,0,.5,.01,.73,0,.02,.22,0,0,0,0,.02,.16,0,.08,0,.3,.09,.05,0,0,.92,0,0,0,0,.35,0,0,.57,.01,.85,.02,.01,.65,0,0,.01,.34,.97,0,0,.77,0,.95,.54,0,.12,.55,.15,0,0,0,.74,.63,.08,.97,0,0,.36,.35,.17,.37,0,0,0,.14,0,0,0,0,0,.65,.58,.02,0,.97,.01,.97,.09,.25,0,0,0,0,.48,0,0,.37,.63,.14,.62,.01,.03,.89,.8,0,0,0,0,.02,.61,.07,.03,0,.68,.06,0,0,0,.6,.03,0,.04,0,0,0,0,0,.43,.58,0,0,0,0,0,.03,0,0,0,0,.05,0,0,0,0,0,0,0,.15,0,0,.02,.41,0,0,0,0,0,0,0,0,.29,0,0,.86,0,0,.46,0,0,0,0,.77,.89,.04,.01,0,.25,0,0,0,.15,.98,.42,.95,.73,.36,.12,.87,.03,0,.68,.63,0];export{a as pvalData};
