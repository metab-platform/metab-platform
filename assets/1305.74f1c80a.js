const a=[.85,.21,.64,.65,.25,.15,.32,.26,.61,.11,.31,.01,.76,.97,.33,.36,.06,.04,.58,.41,.63,.37,.42,.04,.24,.16,.06,.17,.21,.04,.11,.07,.19,.57,.08,.63,.21,.17,.5,.28,.55,.19,.35,.19,1,.39,0,.06,.11,.24,.93,.38,.89,.28,.79,.6,.04,.69,.81,.05,.88,.13,.56,.17,.21,.67,.22,.13,.46,.62,.2,.03,.44,.37,.18,.74,.59,.78,.81,.32,.19,.01,.73,.08,.08,.2,.17,.54,.46,.72,.35,.75,.4,.12,.03,.41,.13,.93,.05,.77,.92,.33,.25,.63,.89,.83,.18,.44,.1,.4,.48,.95,.19,.31,.07,.09,.16,.36,.17,.38,.05,.84,.76,.75,.22,.82,.43,.79,.75,.12,.06,.04,.48,.2,.18,.24,.25,.18,.28,.7,.26,.59,.47,.22,.51,.18,.69,.15,.59,.71,.29,.01,.13,.1,.06,.58,.27,.07,.14,.22,.01,.85,.04,.88,.19,.52,.36,.32,.48,.14,.28,.87,0,0,.91,.39,.52,.02,.12,.18,.8,.22,.64,.32,.95,.49,.59,.25,.11,.65,.61,.02,.35,.89,.8,.37,.37,.43,.9,.05,.75,.29,.14,.1,.52,.61,.05,.05,.65,.72,0,.08,.46,.09,.61,.07,.74,.05,.19,.41,.71,.74,.11,.19,.95,.14,.01,.24,.91,.33,.76,.36,.04,.65,.44,.25,.13,.53,.61,.93,.41,.03,.37,.25,.17,.01,.83,.78,.96,.93,.32,.25,.9,.27,.38,.18,.14,.57,.08,.41,.88,.3,.27,.48,.91,.6,.64,.13,.26,.17,.01,.85,.11,.99,.62,.12,.25,.54,.51,.08,.08,.08,.54,.52,.71,.77,.06,.09,.99,.04,.21,.16,.15,.09,.63,.45,.95,.59,.05,.04,.15,.2,.03,.28,.06,.84,.46,.69,.77,.98,.18,.59,.85,.51,.94,.07,.06,.52,.94,.37,.07,.01,.11,.16,.06,.94,.1,.05,.55,.63,.73,.82,.02,.63,.33,.04,.81,.7,.05,.15,.88,.21,.27,.59,.12,.31,.06,.14,.47,.5,.59,.06,.28,.81,.71,.83,.14,.11,.41,.42,.24,.03,.31,.49,.22,.09,.72,.17,.91,.14,.1,.46,.4,.72,.66,.04,.62,.6,0,.33,.53,.22,.18,.42,.29,.08,.53,.49,.22,.09,.76,.49,.49,.01,.01,.19,.1,.84,.02,.11,.06,.96,.94,.4,.79,.97,.11,.49,.4,.65,.93,.12,.43,.67,.64,.46,.33,.19,.11,.81,.12,.29,.08,.14,.58,.17,.32,.36,.25,.65,.11,.64,.43,.78,.01,.18,0,.29,.15,.99,.85,.09,.41,.45,.32,.67,.29,.28,.53,.38,.47,.95,.22,.44,.83,.33,.03,.11,.86,.77,.66,.38,.4,.69,.03,.44,.4,.27,.18,.41,.26,.1,.23,.77,.26,.16,.97,.1,.3,.12,.74,.07,.74,.48,.23,.98,.16,.01,.04,.7,.35,.01,.2,.02,.81,.07,.03,.28,.48,.99,.19,.01,.18,.21,.08,.54,.28,.42,.04,.56,.7,.9,.32,.66,.22,.17,.09,.22,.44,.27,.31,.34,.97,.36,.02,.47,1,.87,.84,.53,.07,.06,.16,.04,.22,.39,.86,.46,.26,.01,.57,.28,.53,.02,.05,.72,.62,.02,.28,.21,.11,.15,.3,.58,.4,.46,.63,.16,.62,.47,.8,.4,.69,.02,.26,.57,.32,.67,.31,.06,.85,.68,.12,.07,.22,.21,.43,.98,.14,0,.05,.56,.94,.59,.94,.07,.24,.13,.58,.13,.24,.97,.86,.49,.02,.28,.95,.45,.64,0,.77,.25,.75,.74,.79,.42,.63,.04,.78,.15,.56,.09,.52,.03,.55,.47,.27,.02,.89,.23,.26,.61,.71,.12,.38,.09,.26,.37,.49,.01,.78,.34,.81,.94,.66,.77,.17,.15,.25,.45,.27,.05,.23,.16,.5,.34,.18,.09,.41,.62,.93,.45,.1,.17,.25,.04,.44,.23,.95,.37,.17,.29,.08,.49,.35,.07,.52,.45,.19,.08,.53,.48,.22,.07,.36,.15,.25,.15,.96,.68,.04,.44,.02,.08,.55,.68,.36,.14,.15,.12,.4,.74,.85,.41,.6,.11,.29,.3,.36,.79,.06,.08,.62,.42,.73,.52,.96,.7,.35,.11,.34,.75,.68,.19,.8,.97,.66,.05,.21,.65,.3,.35,.21,.16,.02,.29,.45,.19,.5,.99,.68,.44,.15,.13,.68,.14,.12,.15,.25,.29,.06,.55,.27,.03,.34,.83,.23,.2,.13,.11,.45,.18,.07,.34,.42,.86,.19,.09,.08,.96,.22,.35,.34,.11,.15,.94,.22,.74,.95,.14,.42,.94,.15,.65,.17,.69,.06,.07,.04,.42,.24,.03,.7,.3,.92,.84,.74,.42,.76,.1,.28,.93,.81,.26,.1,.22,.36,.34,.31,.54,.34,.2,.32,.4,.33,.25,.69,.33,.43,.01,.36,.26,.13,.8,.03,.23,.09,.04,.26,.09,.81,.09,.02,.02,.39,.07,.62,.96,.77,.63,.61,.12,.67,.09,.3,.06,.5,.62,.05,.53,.41,.01,.54,.38,.03,.86,.28,.08,.52,.17,.55,.31,.29,.16,.55,.04,.65,.52,.14,.11,.79,.13,.28,.51,.54,.01,.84,.17,.56,.05,.58,.16,.15,.18,.85,.24,.21,.77,.5,.79,.05,.75,.56,.16,.19,.12,.4,.36,.54,.02,.1,.22,.11,.36,.2,.11,.35,.25,.84,.23,.75,.98,.38,.82,.54,.38,.12,.18,.17,.1,.75,.02,.1,.02,.63,.7,.22,.61,.12,.07,.99,.89,.25,.26,.82,.45,.69,.13,.55,.53,.02,.58,.12,.11,.04,.18,.45,.9,.09,.19,.44,.34,.09,.01,.99,.15,.1,.33,.42,.6,.3,.84,.27,.27,.11,.41,.08,.53,.15,.71,.14,.52,.16,.97,.51,.56,.8,.06,.75,.17,.86,.73,.19,.89,.22,.54,.06,.83,.19,.63,.15,0,.27,.14,.15,.14,.71,.4,.15,.4,.89,.02,.14,.01,.28,.2,.11,.11,.06,.76,.14,.2,.52,.81,.87,.03,.93,.58,.72,.52,.2,.92,.63,.16,.98,.41,.74,.84,.43,.14,.23,.25,.56,.78,.03,.93,.32,.04,.16,.53,.37,.99,.16,.91,.18,.91,.1,.44,.12,.59,.38,.14,.08,.61,.07,.21,0,.93,.16,.48,.74,.92,.05,.05,.86,.77,.87,.23,.88,.22,.28,.51,.02,.07,.07,.66,.39,.97,.84,.93,.83,.92,.86,.23,.54,.91,.36,.79,.66,.13,.32,.36,.02,.21,.65,.06,.83,.26,.35,.16,.45,.86,.28,.63,.94,.63,.05,.32,.1,.07,.04,.34,.09,.28,.17,.4,.5,.47,.04,.6,.97,.1,.15,.03,.13,.1,.77,.15,.65,.22,.26,.09,.42,.42,.34,.02,.88,.06,.67,.13,.09,.11,.14,.14,.08,.46,.22,.03,.76,.42,.32,.03,.1,.26,.39,.49,.13,.32,.94,.07,.91,.73,.95,.92,.72,.42,.52,.67,.53,.48,.65,.98,.44,.05,.13,.27,.21,.26,.96,.45,.06,.56,.56,.52,.72,.33,.17,.22,.3,.27,.45,.06,.98,0,.1,.13,.08,.1,.81,.45,.08,.01,.02,.31,.15,.16,.59,.93,.51,.04,.06,.55,.45,.24,.4,.8,.67,.52,.8,.01,.33,.04,.59,.01,.14,.99,.53,.1,.97,.73,.96,.16,.79,.55,.31,.6,.46,.08,.78,.65,.51,0,.88,.93,.44,.94,.28,.27,.46,.46,.08,.08,.43,.31,.54,.4,.69,.78,.38,.56,.3,.08,.68,.72,.51,.73,.7,.73,.24,.97,.49,.27,.55,.12,.49,.63,.17,.33,.5,.2,.43,.16,.54,.01,.12,0,.27,.4,.83,.31,.63,.39,.62,.31,.78,.51,.38,.12,.97,.45,0,.07,.26,.89,.01,.4,.22,.91,.38,.4,.23,.94,.85,.77,0,.26,.42,.08,.11,.82,.4,.11,.66,.69,.46,.19,.01,.75,.1,.45,.69,.72,.49,.02,.04,.59,.39,.12,.81,.05,.89,.07,.01,.21,.24,.11,.01,.51,0,.29,.71,.11,.3,.01,.15,.64,.63,.51,.35,.3,.37,.08,.72,.21,.45,.51,.39,.52,.85,.26,.91,.29,.19,.23,.04,.26,.38,.21,.24,.48,1,.18,.96,.65,.4,.03,.04,.02,.84,.01,.76,.04,.04,.11,.04,.21,.45,.47,.61,.49,.04,.9,.78,.34,.12,.01,.78,.39,.7,.5,.12,.71,.74,.35,.56,.22,.46,.71,.85,.71,.19,.09,.77,.84,.6,.14,.6,.89,.5,.06,.36,.8,.91,.62,.93,.08,.34,.88,.34,.11,.44,.15,.52,.37,.18,.25,.93,.29,.33,.03,.17,.19,.04,.32,.09,.24,.15,.87,.75,.69,.58,.31,.65,.32,.24,.14,.26,.25,.09,.29,.98,.14,.01,.6,.94,.52,.34,.91,.26,.86,.82,.9,.01,.65,.87,.6,.92,.78,.71,.5,.21,.34,.64,.14,.09,.21,.42,.22,.45,.71,.04,.56,.48,.64,.9,.56,.36,.49,.63,.54,.62,.92,.34,.65,.89,.61,.27,.73,.51,.05,.57,.65,.67,.52,.57,.67,.09,.17,.09,.44,.29,.3,.36,.73,.62,.86,.15,.45,.41,.23,.88,.69,.41,.77,.99,.61,.44,.28,.15,.23,.18,.59,.99,.57,.13,.73,.09,.31,.17,.85,.36,.97,.54,.86,.79,.42,.24,.37,.12,.78,.39,.38,.56,.42,.75,.09,.28,.85,.11,.99,.03,.94,.53,.16,.76,.74,.11,.29,.61,.24,.01,.11,.62,.83,.97,.06,.22,.14,.5,.54,.38,.03,.11,.11,.39,.33,.05,.03,1,.11,.39,.9,.59,.7,.26,.3,.97,.14,.85,.28,.44,.34,.43,.72,.46,.63,.62,.84,.65,.28,.74,.43,.42,.89,.58,.03,.32,.93,.99,.82,.72,.25,.32,.59,.49,.26,.05,.42,.3,.83,.29,.17,.76,.53,.35,.36,.17,.92,.41,.12,.87,.26,.24,.85,.97,.14,.51,.03,.71,.05,.63,.17,.21,.24,.09,.38,.41,.39,.97,.96,.34,.9,.12,.13,.75,.73,.61,.66,.66,.68,.36,.11,.72,.06,.02,.28,.48,.08,.78,.01,.67,.45,.88,.1,.66,.04,.38,.12,.02,.22,.12,.03,.32,.1,.15,.43,.24,.3,.1,.37,.94,.98,.32,.59,.28,.25,.81,.97,.87,.17,.27,.61,.67,.27,.44,.91,.58,.24,.82,.87,.58,.86,.72,.52,.98,.77,.14,.45,.25,.27,.49,.91,.12,.24,.74,.78,.46,0,.07,.13,.79,.56,.39,.43,.37,.65,.87,.18,.22,.35,.12,.22,.25,.91,.21,.56,.26,.34,.39,.91,.33,.05,.27,.83,.99,.02,.26,.58,.23,.09,.13,.14,.01,.44,.66,.17,.7,.65,.31,.07,.45,.23,.54,.92,.63,.84,.47,.39,.26,.99,.81,.11,.27,.39,.14,.71,.7,.15,.64,.16,.2,.99,.31,.05,.95,.61,.94,.2,.57,.53,.28,.99,.06,.18,.09,.79,.81,.24,.63,.69,.77,.59,.17,.7,1,.52,.33,.4,.04,.1,.07,.22,.36,.01,.06,0,.26,.79,.58,.03,.32,.76,.21,.22,.33,.9,.2,.06,.01,.12,.99,.2,.46,0,.85,.53,.63,.12,.41,.22,.23,.3,.13,.62,.42,.24,.72,.9,.97,.04,.62,.03,.79,.64,.57,.7,.47,.47,.36,.72,.12,.04,.75,.49,.19,.86,.17,.24,.12,.09,.09,.53,.46,.82,.39,.16,.16,.09,.71,.15,.41,.21,.42,.42,.07,.2,.31,.13,.25,.73,.15,.46,.58,.92,.2,.34,.77,.55,.77,.17,.71,.41,.42,.94,.57,.49,.68,.79,.43,.91,.18,.12,.99,.04,.75,.45,.12,.16,.19,.32,.05,.77,.14,.88,.05,.94,.96,.92,.21,.18,.05,.23,.54,.97,.18,.05,.22,.7,.01,.47,.4,.1,.32,.26,.63,.64,.18,.88,.72,.85,.83,.4,.26,.09,.12,.29,.06,.66,.33,.24,.93,.07,.19,.84,.14,.25,.15,.71,.28,.2,.08,.6,.13,.06,.43,.89,.38,.43,.07,0,.78,.25,.24,.19,.14,.24,.03,.15,0,.68,.15,.14,.1,.26,.14,.41,.06,.68,.5,.75,.54,.09,.45,.2,.05,.43,.71,.1,.24,.35,.61,.14,.05,.14,.82,.97,.05,.22,.49,.36,.13,.08,.85,.58,.8,.79,.98,.33,.09,.49,.39,.69];export{a as pvalData};
