const a=[0,.74,.1,.06,.1,.08,.47,.38,.47,.07,.81,.11,.01,.02,.56,.78,.48,.82,.32,.01,.58,.89,.05,.35,.59,.49,.63,.91,.2,.91,.97,.51,.14,.03,.25,.58,.55,.49,.98,.11,.67,.33,.23,.38,.91,.22,.38,.03,.85,.41,.98,.04,.99,.53,.53,.54,.99,.03,.08,.46,.51,.31,.27,.74,.53,.88,.69,.69,.41,.01,.11,.53,.67,.48,.63,.93,.14,.4,.59,.42,.42,.89,.06,.72,.63,1,.77,.07,.32,.45,.45,.1,.81,.48,0,.06,.05,.04,.97,.58,.24,.76,.81,.29,.32,.75,.71,.93,.47,.06,.49,.34,.05,.32,.3,.78,.73,.89,.88,.46,.48,.61,.96,.47,.04,.17,.19,.25,.62,.4,.91,.68,.19,.66,.56,.11,.39,.07,.6,0,.15,.01,.47,.84,0,.92,.86,.88,.86,.42,.8,.23,.81,.16,.78,.5,.12,.01,.52,.92,.06,.14,.08,.96,.91,.7,.52,.45,.72,.6,0,.72,.56,.45,.02,.81,.47,.77,.7,.27,.8,.05,.12,.03,.06,.06,.06,.22,.24,.07,.65,.35,.98,.91,.22,.22,.18,.26,.05,.28,.2,.85,.44,.96,.36,.06,.01,.13,.56,.1,.74,.58,.01,.76,.03,.88,.52,.79,.6,.45,.15,.22,.59,.43,.05,.39,.84,.61,.23,.14,.76,.1,.37,.07,0,0,.51,.15,.28,.98,.99,.74,.72,.72,.6,.61,.26,.52,.43,.07,.68,.31,.39,.88,.14,.05,0,.3,.1,.15,.99,.91,.64,.11,.61,.39,.17,.76,.55,.13,.04,0,.5,.07,.39,.52,.79,.69,.09,.92,.32,.9,.23,.96,.52,.04,.22,.79,.29,.95,.96,.19,.09,.78,.46,.18,.52,.05,.23,.02,.64,.08,.13,.1,.01,.04,.23,.75,.54,.59,.74,.07,.46,0,.47,.01,.34,.67,.09,.04,.7,.05,.48,.41,.81,.27,.12,.16,.39,.32,.4,.07,1,.17,.69,.29,.99,.04,.72,.67,.85,.09,.69,.02,.55,.1,0,.83,.03,.56,.12,.44,.01,.46,.1,.39,.71,.32,.51,.08,.1,.1,.14,.82,.1,.1,.26,.23,.68,.95,.53,.15,.16,.75,.47,.53,.08,.17,.96,.5,.75,.38,.88,.28,.86,.31,.36,.46,.07,.04,.16,0,.5,.01,.02,.06,.4,.77,.28,.03,1,.95,.07,.87,.28,.03,.65,.26,.57,.27,.11,.88,.48,.33,.68,.37,.27,.1,.43,.73,.07,.16,.33,.08,.17,.17,.03,.54,.07,.61,.96,.48,.39,.15,.39,.48,.93,.02,.17,.82,.2,.57,.66,.01,.47,.91,.03,.02,.03,.09,.94,.28,.13,.63,.43,.22,.93,.46,.22,.24,.18,.04,.03,.54,.01,.72,.97,.24,.63,.39,.7,.4,.57,.08,.26,.17,.2,.15,.19,.79,.23,.73,.14,.62,.72,.45,.04,.64,.38,.07,.29,.09,.56,.06,.12,.35,.45,.26,.24,.56,.38,.38,.08,.42,.76,.04,.94,.25,.09,.88,.53,.52,.65,.47,1,.94,.7,.78,.3,.54,.05,.03,.88,.81,.71,0,.11,.84,.52,.33,.9,.37,.04,.54,.01,.01,.55,.16,.74,.23,.07,.27,.07,.6,.22,.69,.69,.63,.99,.89,.78,.28,.09,.23,.39,.28,.25,.53,.75,.84,.13,.22,.16,.59,.19,.99,.51,.68,.83,.01,.13,.13,.01,.9,.36,.06,.78,.66,.2,.68,.12,.26,.14,.94,.5,.54,.09,.81,.52,.44,.28,1,.09,.29,.58,.06,.07,.04,.25,.21,.18,.71,.07,.06,0,.88,.94,.56,.09,.95,.08,.63,.08,.34,.07,.1,.03,.4,.2,.06,.58,.11,.16,.83,.44,.11,.75,.61,.35,.76,.86,.63,.68,.94,.34,.75,.19,.9,.96,.93,.31,.67,.68,.79,.95,.44,.57,.52,.01,.27,.18,.05,.46,.09,.18,.81,.4,.08,.85,.57,.05,.07,.39,.85,.94,.01,.77,.62,.68,.97,.89,.65,.63,.93,.89,.53,.45,.59,.31,.62,.48,.95,.13,.2,.27,.4,.09,.51,.31,.2,.26,.98,.63,.5,.01,.67,.3,.13,.9,.03,.61,.6,.71,.03,.45,.68,.78,.34,.79,.98,.53,.6,.66,.95,.43,.39,.24,.74,.11,.12,.3,.19,.59,.38,.76,0,.69,.68,0,.12,.04,.25,.06,.27,.36,.3,.45,.8,.82,.14,.58,.16,.93,.86,.88,.09,.49,.31,.51,.77,.01,.41,.87,.99,.65,.18,.23,.77,.49,.45,.99,.66,.26,.81,.64,.52,.32,.04,.45,.01,.45,.35,.63,.01,.28,0,.76,.32,.15,.57,.02,.94,.12,.4,.12,.12,.07,.39,.31,.55,.93,.44,.16,.32,.14,.46,.14,.78,.22,.23,.53,0,.56,.39,.93,.23,.32,.6,.48,.81,.84,.65,.05,.82,.4,.72,.9,.76,.2,.16,.04,.02,.99,.22,.31,.47,.34,.53,.7,.36,.4,.31,.94,.44,.73,.11,.1,.13,.15,.64,.16,.73,.05,.74,.88,.34,.84,.83,.47,.65,.76,.91,.84,.24,.56,.11,.95,.28,.56,.7,.77,.18,.57,.44,.87,.59,.74,.04,.95,.79,.62,.06,.73,.33,.87,.76,.6,.4,.34,.01,.6,.64,.16,.47,.35,.11,.82,.6,.04,.87,.43,.77,.63,.88,.27,.04,.15,.21,.09,.52,.24,.04,.04,.11,0,.22,.01,.23,.01,.28,0,.97,.57,.36,.59,.26,.58,1,.89,.42,.74,.53,.74,.34,.04,.08,.04,.12,.16,1,.52,.07,.24,.54,.49,.32,.59,.95,.32,.33,.01,.1,.23,.94,.48,.75,.51,.46,.53,.12,.78,.43,.75,.17,.22,.19,.3,.25,.41,.26,.36,.28,.44,.93,.41,.34,.87,.15,.57,.16,.07,.14,.94,.41,.26,.2,.6,.08,.4,.25,.33,.52,.66,.74,.32,.89,.72,.09,.01,.67,.34,.96,.38,.8,.08,.18,.41,.81,.55,.19,.15,.67,.67,.88,.53,.01,0,.27,.88,.01,.27,.71,.79,.85,.57,.58,.67,.07,.91,.79,.93,.27,.75,.39,.22,.09,.1,.18,.25,.92,.18,.45,.77,.47,0,.81,.72,.4,.1,.11,.13,.08,.96,.17,.03,.35,.14,.62,.27,.78,.38,.25,.57,.15,.22,.44,.85,.93,.9,.27,.55,.01,.03,.93,.94,.54,.33,.08,.47,.66,.54,.04,.25,.04,.83,.05,.38,.83,1,.58,0,.49,.61,.7,.56,.74,.96,.83,.6,.93,.42,.46,.16,.22,.1,.17,.86,.6,.14,.08,.24,.89,.4,.12,.02,.15,.1,.76,.12,.86,.17,.26,.73,.63,.9,.77,.86,.8,.12,.12,.05,.94,.01,.55,.87,.05,.89,.44,.82,.75,.39,.34,.13,.78,0,.11,.15,.15,0,.83,.08,.07,.26,.51,.39,0,.32,.27,.05,.76,.38,.2,.15,.01,.67,.2,.01,.48,.28,0,.54,.34,.06,.89,.2,.15,.4,.26,.12,.71,.16,.76,.2,.11,.6,.06,.37,.99,.29,.45,.72,.52,.48,.45,.65,0,.17,.37,.84,.13,.7,.78,.76,.51,.11,0,.82,.24,.16,.23,.17,.39,.41,.26,.19,.18,.95,.28,.32,.79,.11,.05,.76,1,.61,.47,.01,.53,.21,.45,.23,.84,.44,0,0,.64,.83,.95,.88,.66,.77,.38,.05,.08,.09,.81,.9,.49,.23,0,.42,.28,.12,.14,0,.04,.01,.01,.09,.01,.24,.26,.16,.81,.42,.02,.13,.71,.26,.04,.01,.04,.03,.82,.03,.58,.89,.69,.59,.01,.29,.9,.53,.1,.05,.9,.01,.02,.35,.04,.34,.04,.69,.67,.02,0,.05,.35,.93,.01,.32,.75,.35,.64,.05,.09,.33,.08,.48,.3,.27,.62,.01,.71,.14,.43,.38,.2,.45,.72,.44,.06,.2,.08,.55,.61,.98,.98,.37,0,.33,.93,.7,.64,.63,.04,.14,.39,.14,.81,.14,.2,.03,.2,.57,.74,.9,.35,.41,.28,.56,.08,.01,.58,.37,.76,.72,.11,.38,.75,.65,.44,.52,.52,.06,.73,.97,.4,.07,.66,.47,.32,.01,.7,.56,.87,.74,.14,.57,.5,.91,.74,.38,.62,0,.38,.75,.06,.86,1,.08,.71,.34,.91,.18,.75,0,.22,.54,.79,.59,.19,.8,.22,.53,.35,.57,.04,.03,.3,.15,.78,.86,.1,.98,.63,.73,.41,.29,.31,.06,.05,.07,.42,.77,.67,.97,.89,.84,.26,.71,.7,.4,.62,.13,.05,.03,.65,.16,.58,.1,.25,.53,.47,.74,.95,1,0,.85,.1,.3,.53,.62,.7,0,.83,.96,.84,.53,.13,.01,.62,.2,.41,.5,.61,.01,.97,.93,.2,.31,.06,.12,.35,.99,.71,.38,.19,.97,.46,.68,.24,.71,.49,.35,1,.15,.14,.5,.12,.2,.39,.78,.23,.71,.99,.21,.67,.05,.7,.52,.24,.14,.33,.47,.41,.07,.7,.72,.5,.31,.98,.43,.48,.2,.07,.2,.09,.18,.17,.23,.82,.35,.31,.04,.54,.59,.23,.3,.57,.68,.48,.09,.73,.87,.55,.05,0,.88,.77,.88,.97,.53,.24,.56,.07,.89,.05,.44,.07,.03,.54,.06,.24,.21,.57,.11,.4,.79,.65,.23,.88,.18,.22,.02,.61,.15,.26,.09,.1,.38,.71,.04,.6,.3,.96,.21,.89,.7,.68,.15,.07,.74,.19,.01,.1,.95,.24,.31,.88,.72,.94,.28,.58,.43,.96,.13,.56,.07,.11,.57,.96,.72,.64,.13,.54,.1,.43,.09,.91,.31,.66,.27,.82,.5,.2,0,.59,.11,.91,.27,.24,.49,.16,.69,.27,.75,.06,.51,.19,.29,.35,.08,.96,.17,.22,.43,.44,.32,.3,.18,.08,.4,.94,.16,.45,.36,.29,.55,.05,.65,.42,.7,.02,.66,.28,.47,.77,.75,.48,.26,.61,.87,.09,.79,.03,.25,.4,.12,.27,0,.09,.05,.05,.19,.24,.45,.05,.44,.45,.96,.47,.78,.92,.16,.36,.36,.42,.21,.28,.67,.22,.02,.53,.74,.79,.52,.19,.87,.92,0,.77,.48,.75,.96,.4,.09,.68,.38,.33,.76,.65,.84,.59,.11,.85,.74,.5,.52,.25,.71,.35,.99,.7,.32,.06,.14,.13,.64,.85,.36,.45,1,.78,.25,.92,.43,0,.43,.85,.25,.65,.47,.34,1,.34,.66,.79,.25,.03,0,.15,.03,.49,.11,.13,.2,.78,.19,.24,.55,.37,.67,.25,.73,.17,.17,.55,.4,.22,.97,.3,.26,.11,.05,.68,.72,0,.34,.18,.19,.99,.05,.09,.15,.84,.88,.33,.29,.06,.09,.35,.83,.76,.6,.26,.67,.2,.2,.19,.57,.11,.45,.69,.45,.3,.5,.23,.28,.29,.4,.62,.76,.84,.84,.65,.67,.65,.81,.25,.71,.04,.08,.11,.24,.31,.25,.72,.49,.2,.09,.32,.98,.14,.47,.16,.55,.24,.04,.64,.05,0,.68,.99,.49,0,0,.91,.94,.66,.94,.03,.2,.9,.8,.1,.85,.73,1,.13,.27,.67,.15,.74,.22,.54,.51,.95,.9,.1,.46,.91,.01,.39,.29,.37,.36,.38,.56,.84,.38,.76,.43,.6,.34,.21,.81,.76,.29,.76,.37,.78,.6,.28,.48,.21,.2,.74,.42,.98,.5,.1,.69,.01,.12,.96,.35,.05,.25,.27,.63,.86,.75,.29,.2,.63,.44,.49,.84,.7,.41,.4,.71,.98,.49,.67,.66,.04,.8,.18,.73,.27,0,.73,.09,.02,.94,.55,.01,.34,.98,.12,.55,.94,.28,.09,0,.95,.51,.28,.46,.18,.08,.18,.13,.08,.15,.4,.08,.08,.84,.05,.35,.44,.33,.35,.73,.03,.44,.69,.54,.35,.51,.86,.06,.92,.83,.1,.16,.81,.01,.8,.12,.61,.16,.7,.11,.79,.91,.52,.25,.64,.89,1,.37,.27,.63,.13,.57,.11,.13,.07,.54,.12,.53,.3,.22,.4,.49,.09,.77,.08,.17,.08,.71,.15,.07,.43,.82,.68,.06,.99,.69,.37,.42,.69,.14,.4,.48,.57,.75,.44,.62,.9,.21,.45,.59,.28,.32,.05,.24,.39,0,.02,.77,.38,.36,.85,.52,.98,.65,.36,.94,.86,.26,.92,.28,.91,.16,.33,.48,.52,.5,.39,.01,.39,.99,.01,.13,.01,.58,.98];export{a as pvalData};
